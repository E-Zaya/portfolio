import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Logo from "./Logo";

describe("Logo", () => {
  it("uses a separate SVG gradient for every rendered logo", () => {
    const { container } = render(
      <>
        <Logo />
        <Logo size={38} />
      </>,
    );

    const gradients = [...container.querySelectorAll("linearGradient")];
    const paths = [...container.querySelectorAll("path")];
    const gradientIds = gradients.map((gradient) => gradient.id);

    expect(new Set(gradientIds).size).toBe(2);
    expect(paths.map((path) => path.getAttribute("stroke"))).toEqual(
      gradientIds.map((id) => `url(#${id})`),
    );
  });
});
