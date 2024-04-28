export function noHtml(html) {
  return html.replace(/<[^>]*>/g, "");
}
