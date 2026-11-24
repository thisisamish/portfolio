const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Renders `**emphasis**` in a content string as <tag>. Everything else is escaped. */
export function inline(text: string, tag: 'strong' | 'em' | 'b' = 'strong'): string {
  return escape(text).replace(/\*\*(.+?)\*\*/g, `<${tag}>$1</${tag}>`);
}

/** The same string without the emphasis markers, for aria-labels and meta tags. */
export const plain = (text: string): string => text.replace(/\*\*/g, '');
