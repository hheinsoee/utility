export function noHtml(html:string) {
  return html.replace(/<[^>]*>/g, "");
}
export function noMarkdown(mdText:string) {
  // Remove Markdown headings
  let cleanedText = mdText.replace(/^#+\s+(.*)/gm, '$1');

  // Remove Markdown bold and italic
  cleanedText = cleanedText.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '$1$2');
  cleanedText = cleanedText.replace(/\*(.*?)\*|_(.*?)_/g, '$1$2');

  // Remove Markdown inline code
  cleanedText = cleanedText.replace(/`([^`]+)`/g, '$1');

  // Remove Markdown blockquotes
  cleanedText = cleanedText.replace(/^\s*>/gm, '');

  // Remove Markdown links
  cleanedText = cleanedText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');

  // Remove Markdown lists
  cleanedText = cleanedText.replace(/^\s*[\-*+]\s+/gm, '');

  // Remove extra newlines
  cleanedText = cleanedText.replace(/\n+/g, ' ');

  return noHtml(cleanedText.trim());
}