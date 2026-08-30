import SectionShell from "@/components/ui/SectionShell";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return buildPageMetadata(params, "privacy", "/privacy");
}

// ポリシー本文はこのページ専用なので、messages ではなくここで管理する
const CONTENT: Record<
  Locale,
  {
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; body: string }[];
  }
> = {
  ja: {
    title: "プライバシーポリシー",
    updated: "最終更新日: 2026年8月30日",
    intro:
      "本サイト(ezaya.dev、以下「当サイト」)における個人情報の取り扱いについて、以下のとおり定めます。",
    sections: [
      {
        heading: "1. 取得する情報",
        body: "お問い合わせフォームの送信時に、お名前・メールアドレス・ご相談内容を取得します。これら以外の個人情報を当サイトから取得することはありません。",
      },
      {
        heading: "2. 利用目的",
        body: "取得した情報は、お問い合わせへの返信およびご相談内容の確認のためにのみ利用します。広告配信や第三者への提供は行いません。",
      },
      {
        heading: "3. 送信・保管",
        body: "フォームの内容はメール配信サービス(Resend)を通じて運営者のメールアドレスに送信されます。サーバー上のデータベースに保存されることはありません。",
      },
      {
        heading: "4. アクセス解析",
        body: "当サイトはVercel Analyticsを利用しています。これは個人を特定しない形でページ閲覧状況を計測するもので、Cookieによる横断的な追跡は行いません。",
      },
      {
        heading: "5. お問い合わせ",
        body: "個人情報の訂正・削除のご依頼やご質問は、フッター記載のメールアドレスまたは電話番号までご連絡ください。",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: August 30, 2026",
    intro:
      "This page explains how personal information is handled on this website (ezaya.dev).",
    sections: [
      {
        heading: "1. Information collected",
        body: "When you submit the contact form, your name, email address, and message are collected. No other personal information is collected on this site.",
      },
      {
        heading: "2. How it is used",
        body: "The information is used only to reply to your inquiry and understand your request. It is never used for advertising or shared with third parties.",
      },
      {
        heading: "3. Delivery and storage",
        body: "Form submissions are delivered to the site owner's email via Resend, an email delivery service. They are not stored in any database on the server.",
      },
      {
        heading: "4. Analytics",
        body: "This site uses Vercel Analytics, which measures page views without identifying individuals and does not use cross-site tracking cookies.",
      },
      {
        heading: "5. Contact",
        body: "To request correction or deletion of your information, or for any questions, please reach out via the email address or phone number in the footer.",
      },
    ],
  },
  mn: {
    title: "Нууцлалын бодлого",
    updated: "Сүүлд шинэчилсэн: 2026 оны 8 сарын 30",
    intro:
      "Энэ хуудсанд тус вэбсайт (ezaya.dev) дээрх хувийн мэдээллийн боловсруулалтыг тайлбарлав.",
    sections: [
      {
        heading: "1. Цуглуулах мэдээлэл",
        body: "Холбоо барих маягт илгээх үед таны нэр, имэйл хаяг, хүсэлтийн агуулгыг хүлээн авна. Үүнээс өөр хувийн мэдээлэл цуглуулдаггүй.",
      },
      {
        heading: "2. Ашиглах зорилго",
        body: "Хүлээн авсан мэдээллийг зөвхөн таны хүсэлтэд хариулах зорилгоор ашиглана. Зар сурталчилгаанд ашиглах болон гуравдагч этгээдэд дамжуулахгүй.",
      },
      {
        heading: "3. Илгээлт ба хадгалалт",
        body: "Маягтын агуулга имэйл үйлчилгээ (Resend)-ээр дамжин сайт эзэмшигчийн имэйл рүү илгээгдэнэ. Серверийн өгөгдлийн санд хадгалагдахгүй.",
      },
      {
        heading: "4. Аналитик",
        body: "Тус сайт Vercel Analytics ашигладаг. Энэ нь хувь хүнийг таниулахгүйгээр хуудасны үзэлтийг хэмждэг бөгөөд хөндлөн мөрдөх cookie ашигладаггүй.",
      },
      {
        heading: "5. Холбоо барих",
        body: "Мэдээллээ засуулах, устгуулах хүсэлт болон асуултаа footer дэх имэйл хаяг эсвэл утасны дугаараар илгээнэ үү.",
      },
    ],
  },
};

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ja";
  const t = CONTENT[locale];

  return (
    <SectionShell>
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">{t.title}</h1>
        <p className="mt-3 text-xs text-muted">{t.updated}</p>
        <p className="mt-6 text-sm leading-7 text-soft">{t.intro}</p>

        <div className="mt-10 space-y-8">
          {t.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-foreground">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-soft">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
