import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("Form field haragdaj baigaa eseh.", () => {
    render(<ContactForm locale="ja" />);

    expect(screen.getByLabelText("お名前")).toBeInTheDocument();
    expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByLabelText("ご相談内容")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "送信する" })).toBeInTheDocument();
  });

  it("Form input hiij bolj baigaa eseh.", async () => {
    const user = userEvent.setup();

    render(<ContactForm locale="ja" />);

    await user.type(screen.getByLabelText("お名前"), "山田太郎");
    await user.type(screen.getByLabelText("メールアドレス"), "test@example.com");
    await user.type(screen.getByLabelText("ご相談内容"), "お問い合わせ内容です");

    expect(screen.getByLabelText("お名前")).toHaveValue("山田太郎");
    expect(screen.getByLabelText("メールアドレス")).toHaveValue("test@example.com");
    expect(screen.getByLabelText("ご相談内容")).toHaveValue("お問い合わせ内容です");
  });

  it(" Succesffully sent bolson uyd API ruu aguulgiig uvuulj , Success message haruulj baigaa eseh.", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });

    render(<ContactForm locale="ja" />);

    await user.type(screen.getByLabelText("お名前"), "山田太郎");
    await user.type(screen.getByLabelText("メールアドレス"), "test@example.com");
    await user.type(screen.getByLabelText("ご相談内容"), "お問い合わせ内容です");
    await user.click(screen.getByRole("button", { name: "送信する" }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "山田太郎",
          email: "test@example.com",
          message: "お問い合わせ内容です",
          company: "",
        }),
      });
    });

    expect(await screen.findByText("メッセージを送信しました。")).toBeInTheDocument();
  });

  it("Send aldaa zaaval Error message haruulah.", async () => {
    const user = userEvent.setup();
    fetchMock.mockResolvedValue({
      ok: false,
      json: async () => ({ ok: false, error: "送信できませんでした。" }),
    });

    render(<ContactForm locale="ja" />);

    await user.type(screen.getByLabelText("お名前"), "山田太郎");
    await user.type(screen.getByLabelText("メールアドレス"), "test@example.com");
    await user.type(screen.getByLabelText("ご相談内容"), "お問い合わせ内容です");
    await user.click(screen.getByRole("button", { name: "送信する" }));

    expect(await screen.findByText("送信できませんでした。")).toBeInTheDocument();
  });
});
