# Zaya Portfolio

Portfolio and web production service site built with Next.js.  
Japanese-first, trilingual, and designed for small businesses, creators, and independent professionals.


日本語をメインにした、Web制作サービス兼ポートフォリオサイトです。  
個人事業主・小規模事業者・クリエイター向けに、制作実績、サービス内容、ブログ、問い合わせ導線をまとめています。


🌐 [ezaya.dev](https://ezaya.dev)

## Overview

This site is my personal portfolio and service website.  
It introduces my web development work, services, projects, blog posts, and contact information.


The site is built with a Japanese-first structure and supports three languages:

- Japanese (`/ja`)
- Mongolian (`/mn`)
- English (`/en`)

## Tech Stack

- **Next.js 15** — App Router, static generation
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Notion API** — Blog CMS
- **Vercel Analytics**

## Features

- Trilingual routing with custom i18n implementation
- Japanese-first routing with automatic redirect from `/` to `/ja`
- Blog system powered by Notion CMS
- Service pages for web production offerings
- Project and portfolio showcase
- Dark / light theme toggle
- Smooth UI animations with Framer Motion
- Fully responsive layout
- Static generation for better performance

## Blog

記事は Notion の「Blog database」に書き、`Published` を ON にすると約5分で出る (revalidate 300)。再 deploy は不要。

- Notion の property: `Title` / `Slug` / `Published` / `Lang` (ja・mn・en) / `Date` / `Summary` / `Tags` / `ReadingTime`
- カバー画像は Notion の Cover ではなく `public/images/blog/{slug}.png` を使う。記事を公開する前に、この画像を repo に入れて deploy しておく

### カバー画像の型

ChatGPT で生成する。記事ごとに変えるのは最後の「この記事のテーマ」だけ。

```txt
ブログのカバー画像を1枚作ってください。

【固定ルール】
- サイズ: 横長 1536×1024
- 背景: 生成りの紙（#F6F5F1）。紙の繊維がうっすら見える程度
- 画風: 墨色（#1F242E）のペン画。線に強弱をつけ、影は細かいハッチングで描く。上品なエディトリアル・イラストの雰囲気
- 色: 線の上から、透明感のある淡い水彩で面を塗る。使う色は次の中から3色まで。藍（#2557CB）、青緑（#2E7F74）、琥珀（#9A6D10）、朱（#C05635、ほんの少しだけ）。どれも紙になじむよう薄めて、少しにじませる。塗るのは画面全体の4割まで。塗り残しの白い紙も残す
- 青ペン: 濃い青（#2557CB）だけで、添削のような丸・矢印・チェックを2〜3か所に手書きで書き込む
- 構図: 主役1つと、関連する小物2〜3個で小さな場面を作る。少し斜め上から見た机の上。上下20%・左右10%は空けて中央の帯に収める
- 入れないもの: 文字、ロゴ、数字、画面のスクリーンショット、人の顔
- 避ける画風: 写真風、3D、アニメ調、ネオン、紫のグラデーション、彩度の高いベタ塗り

【この記事のテーマ】
- 主役: {記事ごとに書く}
- 小物: {記事ごとに書く}
- 塗る色: {3色まで選ぶ}
- 青ペンで書き込む場所: {記事ごとに書く}
```

色はサイトの `app/styles/tokens.css` (ライトモード) から取っている。カードは 1.75:1、記事ページの Hero は最大 2.4:1 に切られるので、上下は空けておく。

## Project Structure

```txt.
app/
  [locale]/
    page.tsx
    about/
    blog/
    services/
    projects/
    contact/

components/
  about/
  home/
  blog/
  layout/
  ui/

lib/
  messages/
    en.ts
    ja.ts
    mn.ts
  i18n.ts
  notion.ts