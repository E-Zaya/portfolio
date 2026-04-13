// 謎にCSSモジュールがエラーになるため、宣言ファイルを追加
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
