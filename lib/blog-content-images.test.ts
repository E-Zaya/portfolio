import { describe, expect, it } from "vitest";
import { replaceNotionMarkdownImages } from "./blog-content-images";

describe("replaceNotionMarkdownImages", () => {
  it("replaces Notion-hosted markdown images for configured posts", () => {
    const markdown =
      'before ![preview](https://prod-files-secure.s3.us-west-2.amazonaws.com/foo/bar.png "caption") after';

    expect(replaceNotionMarkdownImages(markdown, "kokoro-sticker")).toBe(
      'before ![preview](/images/blog/kokoro-sticker/01.jpg "caption") after',
    );
  });

  it("replaces multiple Notion-hosted images in order", () => {
    const markdown = [
      "![first](https://prod-files-secure.s3.us-west-2.amazonaws.com/foo/1.png)",
      "![second](https://prod-files-secure.s3.us-west-2.amazonaws.com/foo/2.png)",
    ].join("\n");

    expect(replaceNotionMarkdownImages(markdown, "kokoro-sticker")).toBe(
      [
        "![first](/images/blog/kokoro-sticker/01.jpg)",
        "![second](/images/blog/kokoro-sticker/02.jpg)",
      ].join("\n"),
    );
  });

  it("leaves unconfigured posts unchanged", () => {
    const markdown =
      "![preview](https://prod-files-secure.s3.us-west-2.amazonaws.com/foo/bar.png)";

    expect(replaceNotionMarkdownImages(markdown, "other-post")).toBe(markdown);
  });

  it("does not replace already-local images", () => {
    const markdown = "![preview](/images/blog/kokoro-sticker/01.jpg)";

    expect(replaceNotionMarkdownImages(markdown, "kokoro-sticker")).toBe(
      markdown,
    );
  });
});
