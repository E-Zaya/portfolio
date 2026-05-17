# ポートフォリオ改善提案レポート

**対象**: `D:\Zaya\Portfolio\Portfolio`（Next.js 16 + React 19 + Tailwind v4 + TypeScript）
**作成日**: 2026-05-17
**作成**: コードレビュー結果まとめ

---

## 全体所感

しっかり設計されているプロジェクトです。App Router + 3言語対応 + Notion CMS + Resend + Vitest と、必要な要素が揃っており、CSS トークンや `apple-panel` などの共有 utility にもデザインの一貫性があります。

ただし「すぐ直したいバグ」と「中長期で取り組むと品質がぐっと上がる構造的な改善」がそれぞれ複数見つかったので、優先度別に整理しました。

---

## 1. すぐ直したい（バグ／壊れている箇所）

### 1-1. `app/layout.tsx` — JSX に余計なセミコロン

```tsx
<Analytics />;   // ← この末尾の ; が JSX 中にテキストとして "; " を出力する
```

ブラウザ DOM にゴミの `;` がレンダリングされる可能性あり。削除推奨。

### 1-2. `components/home/ContactForm.tsx` — Tailwind v4 任意値の構文ミス

複数箇所で `(--accent-2)]` のように 閉じ括弧 `]` が余分に付いている／開き `[` が抜けています。

```tsx
className="... focus:border-(--accent-2)]"          // ✗
className="... text-(--color-error)]"               // ✗
```

正しい書き方：
```tsx
className="... focus:border-[var(--accent-2)]"
className="... text-[var(--color-error)]"
```

このせいで「フォーカス時のボーダー色」「エラーメッセージの色」が当たっていない可能性が高いです。

### 1-3. `app/[locale]/layout.tsx` — `<head>` 内に `<script>` 直書き

App Router では基本的に `<head>` の中に手書きで script を入れない方が安全（Next の最適化と相性が悪い、CSP との衝突）。
`personJsonLd` は `next/script` で `strategy="beforeInteractive"` するか、`<head>` の代わりに body 内（型 `application/ld+json` ならどこに置いてもクローラに拾われる）に置くのがおすすめ。

### 1-4. `components/home/HeroVisual.tsx` — locale 判定が雑

```ts
const locale: Locale =
  params?.locale === "ja" || params?.locale === "mn" ? params.locale : "en";
```

`isLocale()` という helper が既にあるので、共通化したい。さらに、URL に `/en` がついていても英語シーン用テキストを取れていない可能性。

### 1-5. `app/[locale]/page.tsx` — page から page を import している

```ts
import { ProjectsContent } from "./projects/page";
```

Next の `page.tsx` から `page.tsx` を直接 import するのは非推奨パターン。コンポーネント本体は `components/projects/ProjectsSection.tsx` などに切り出し、両ページ（home / projects）から import するのが安全。

### 1-6. `LoadingScreen` — `localStorage` 依存

```ts
if (showOnce && localStorage.getItem(STORAGE_KEY) === "true") { ... }
```

シークレットウィンドウ／プライバシーモード／iOS Safari の `localStorage` 例外で throw する可能性。`try / catch` でラップを。
さらに `<script dangerouslySetInnerHTML>` で `localStorage` を直接読みに行っているのもクラッシュ要因。

### 1-7. `MouseGlow` — `mousemove` がスロットルなし

```ts
window.addEventListener("mousemove", handleMove);
```

毎フレーム CSS 変数書き込み → レイアウト計算。`requestAnimationFrame` でまとめるか、pointer 系イベントを使う、または `prefers-reduced-motion` で無効化を推奨。
モバイルでは意味がないので `(pointer: fine)` メディアクエリで no-op に。

---

## 2. デザイン改善

### 2-1. ライトテーマのコントラスト

`--text-soft: rgba(15,23,42,0.84)` / `--text-muted: rgba(30,41,59,0.80)` は淡い背景の上ではグレー寄りで読みづらい場面が出る。WCAG AA を満たしているかブラウザの DevTools で要チェック。特に `bg-card`（白 55%）の上の `text-muted` は怪しい。

### 2-2. グラデーション過多

Hero、ボタン、ヘッダー、プログレスバー、ローダーすべてに `accent-1→2→3→4` のグラデーション。視覚的なフックを「Hero のヘッドラインのみ」に絞り、他は `accent-2` 1色などに統一すると、より高級感が出ます。

### 2-3. `MouseGlow` と `body の radial-gradient` と Hero の `corner glow` が同居

3 層のグローが重なって、特にライトモードで「白っぽくて立体感がない」絵になりがち。
ライトモードでは MouseGlow をオフ、もしくは透明度をさらに下げる。

### 2-4. タイポグラフィ

`tracking-[-0.05em]` までキツくしている見出しが多い。日本語フォント (Noto Sans JP) ではマイナストラッキングが行間崩れを誘発するので、`[lang="ja"]` には `tracking-tight` 程度に緩和を。

### 2-5. ボタンサイズの統一

`Button.tsx` は size を持っているのに、Hero 内では `<Link>` の inline 実装でサイズ違いの CTA を量産している。`Button as Link` で吸収して統一すると保守性が上がる。

### 2-6. モバイル時の Hero 余白

`px-4 py-6` は 360px 端末で詰まりがち。`px-5` ／ `py-7` ぐらいに広げる、または safe-area-inset を併用。

### 2-7. ScrollProgress の高さ

`h-4px` は今のトレンドより少し太い。`h-[2px]` か `h-[3px]` の方が洗練。

---

## 3. パフォーマンス／SEO

### 3-1. `"use client"` の使いすぎ

`Hero`, `HeroContent`, `Skills` などは Framer Motion を使うために client component になっているが、ヘッダーやテキスト部分はサーバーで返したい。
**案**: 静的な見出し・コピーは server component に残し、`SectionReveal` のような motion wrapper だけ client にする。`Skills` のような全体 client を `<MotionList>` に分離。

### 3-2. `framer-motion` のバンドルコスト

App Router で client コンポーネントが多いと、`framer-motion` 全体が初期 JS に乗る。可能なら：
- `motion/react` の lazy 版（`m` + `LazyMotion`）に置き換える
- 単純な fade-in 程度は CSS `@starting-style` か CSS animation で代替

### 3-3. 画像最適化

`HeroVisual.tsx` の `priority` は OK だが、`Skills` のロゴ群が react-icons（SVG）で React レンダリングなので、サーバー側で静的 SVG として埋め込む方が早い。

### 3-4. メタデータの抜け

- `metadata.icons` が設定されていない（`app/icon.tsx` だけだとレガシーブラウザで認識されない場合あり）
- `metadata.themeColor` がない
- `<html lang="ja">` がルート、`<html lang={locale}>` がロケール側で**両方**出力される構造（ネストの結果ロケール側だけ残るはず、ただし `app/layout.tsx` が一見冗長）。整理が必要。

### 3-5. JSON-LD

`personJsonLd` 内 `sameAs` が GitHub だけ。X / Instagram / LinkedIn など Public プロフィールがあれば追加すると個人 SEO に効きます。

### 3-6. Sitemap / robots

`app/sitemap.ts` `app/robots.ts` がある（◯）。
sitemap にブログ記事の動的 URL を含めているか要確認（Notion から `getBlogPosts()` 呼んで列挙する）。

### 3-7. 静的化

`app/[locale]/page.tsx` は `force-static` だが、ProjectsContent が `ProjectsClient`（"use client"）を使っているので、状態管理（modal）が動くか確認。

---

## 4. アクセシビリティ

### 4-1. `aria-hidden` の乱用

装飾要素はすべて `aria-hidden` で OK だが、Skills のアイコンに alt 相当が無い。スクリーンリーダーで「リンク」とだけ読まれる。
→ `<Icon aria-label="React icon" />` か、`<span className="sr-only">React</span>` を併記。

### 4-2. `outline-none` 多用

`ContactForm` の inputs は `outline-none` だけで focus-visible スタイルがない（border の色だけ。前述のバグでそれも効いていない）。キーボードユーザーが現在地を見失う。
→ `focus-visible:ring-2 focus-visible:ring-[var(--accent-2)]` を追加。

### 4-3. ローディング画面の skip

`LoadingScreen` は `aria-label="Loading"` `role="status"` 付きで良いが、`prefers-reduced-motion: reduce` の場合は即時消す処理が欲しい。

### 4-4. 言語切り替え

`LangToggle` で 3 言語切り替え可能だが、その時 `<html lang>` がリロードまで反映されないと SR の発音が変。Next の router で `replace` 後に layout が rerender されるはずなので確認。

---

## 5. コード品質・構造

### 5-1. CSS が `globals.css` から 5 ファイル import

```css
@import "./styles/tokens.css";
@import "./styles/base.css";
@import "./styles/components.css";
@import "./styles/blog.css";
@import "./styles/projects.css";
```

Tailwind v4 の `@layer utilities` を `components.css` で使う設計は良いが、これだけ分割するなら `@import` の順を `tokens → base → components → page-specific` で固定するルールをコメントで明示。
さらに `components.css` の中に `services-*` だけで 100 行近くあるので、`services.css` に切り出した方がスケールする。

### 5-2. インラインスタイル多用

`HeroVisual.tsx` ほか、`style={{ background: "linear-gradient(...)" }}` が大量にある。

メリット：CSS 変数を動的に展開できる
デメリット：再利用できない、テーマ切替で別の指定が必要になっても気付きにくい

→ よく使うパターンは `.scene-tile` のような utility に切り出すと差分が減る。

### 5-3. 型の重複

`HeroVisualContent` から `LandingScene` 等を抜くために
```ts
type LandingScene = HeroVisualContent["scenes"]["landing"];
```
これは OK だが、これを 4 つ書くより `HeroVisualContent["scenes"][keyof HeroVisualContent["scenes"]]` などでも良い。気にしすぎなくて良い。

### 5-4. data ファイルと messages の二重管理

`data/projects.ts` がプロジェクトのメタデータ（slug, image, link）、
`lib/messages/{locale}.ts` がローカライズ文（title, description）を持つ。
**Single Source of Truth** がないため slug を片方に追加して片方を忘れる事故が起きやすい。
→ messages 側で言語別のテキストだけ持ち、`data/projects.ts` を「英語フォールバック付きの正規データ」にする。または、`data/projects.ts` で `id` を持たせて messages 側がそれを参照、足りないと型エラーになるよう厳格化。

### 5-5. テストカバレッジ

`ContactForm.test.tsx` と `blog-content-images.test.ts` だけ。
最低でも `i18n` の `withLocale` / `stripLocaleFromPathname` / `isLocale` は純関数なのでテストすべき（5 分で書ける）。

### 5-6. ESLint warnings の可視化

`eslint.config.mjs` を使っているが、CI 連携の説明が README に無い。Vercel デプロイ時に `next build` で必ず通る／落ちる、を README に明記。

### 5-7. 環境変数

`.env.example` がある（◯）。ただ `CONTACT_FROM_EMAIL` をハードコードでフォールバックしているのは Resend の sandbox から離れた時に事故るので、未設定なら 500 にする方が安全。

---

## 6. 追加機能（あったら嬉しい）

- **ブログの目次（TOC）の sticky 化**: `BlogPostTOC.tsx` がある前提で、デスクトップだけ side rail で固定。
- **ダークモード切替アニメーション**: `disableTransitionOnChange` を入れているが、最近の流行は `View Transitions API`（Chrome / Safari Tech Preview 対応）。
- **OG 画像の動的生成**: `app/og/route.tsx` で記事タイトル入りの OG を `@vercel/og` で生成。
- **コンタクトフォームに reCAPTCHA / Turnstile**: honeypot（`company` フィールド）はあるが、Cloudflare Turnstile を足すとスパム激減。
- **記事ごとの言語切替リンク**: `mn` ページから日本語版記事への切替リンクを記事ヘッダに。
- **`@vercel/analytics` のセミコロン削除後に**、`<SpeedInsights />` が `body` 内末尾にあるのは OK。一貫性のため `<Analytics />` も同じ位置に。
- **PWA 化**: `app/manifest.ts` があるなら `apple-touch-icon` と service-worker を足してインストール可能に。

---

## 優先度サマリー

| 優先度 | 項目 |
|---|---|
| 🔴 High（バグ） | 1-1, 1-2, 1-5, 1-6 |
| 🟠 Medium（品質） | 1-3, 1-4, 1-7, 4-2, 5-4 |
| 🟢 Low（磨き） | 2系, 3系, 6系 |

---

## 次のアクション提案

「全部直して」と頼まれたら大変ですが、**まず 1 時間で**：

1. `app/layout.tsx` のセミコロン削除
2. `ContactForm.tsx` の Tailwind 任意値構文を全部修正
3. `MouseGlow` を rAF 化＋`(pointer: fine)` 限定
4. `LoadingScreen` の `localStorage` を try/catch
5. ContactForm に `focus-visible:ring` を追加

ここまで反映するだけで、見た目はほぼ変わらないのに体感品質が一段上がります。

その後、デザイン側（2-2, 2-3, 2-4）に着手すると効果が大きいです。
