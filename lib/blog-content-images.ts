const localContentImagesBySlug: Record<string, string[]> = {
  "kokoro-sticker": [
    "/images/blog/kokoro-sticker/01.jpg",
    "/images/blog/kokoro-sticker/02.jpg",
    "/images/blog/kokoro-sticker/03.jpg",
    "/images/blog/kokoro-sticker/04.jpg",
    "/images/blog/kokoro-sticker/05.jpg",
    "/images/blog/kokoro-sticker/06.jpg",
    "/images/blog/kokoro-sticker/07.jpg",
  ],
};

function isNotionHostedImage(url: string): boolean {
  try {
    const { hostname } = new URL(url);

    return (
      hostname === "prod-files-secure.s3.us-west-2.amazonaws.com" ||
      hostname.endsWith(".amazonaws.com") ||
      hostname.endsWith(".notion.so")
    );
  } catch {
    return false;
  }
}

export function replaceNotionMarkdownImages(
  markdown: string,
  slug: string,
): string {
  const localImages = localContentImagesBySlug[slug];

  if (!localImages?.length) return markdown;

  let imageIndex = 0;

  return markdown.replace(
    /!\[([^\]]*)\]\((<[^>]+>|[^\s)]+)(\s+"[^"]*")?\)/g,
    (match, alt: string, rawUrl: string, title: string | undefined) => {
      const url = rawUrl.startsWith("<") && rawUrl.endsWith(">")
        ? rawUrl.slice(1, -1)
        : rawUrl;

      if (!isNotionHostedImage(url)) return match;

      const localImage = localImages[imageIndex];
      imageIndex += 1;

      if (!localImage) return match;

      return `![${alt}](${localImage}${title ?? ""})`;
    },
  );
}
