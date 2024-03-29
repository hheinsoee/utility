export function removeHTMLTags(html) {
  return html.replace(/<[^>]*>/g, "");
}
