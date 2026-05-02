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

## Project Structure

```txt
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