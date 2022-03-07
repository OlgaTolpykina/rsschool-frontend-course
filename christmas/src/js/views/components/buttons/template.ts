export default function buttonTemplate(text: string, dataAttr: string): string {
  return `
    <button class="button button_small" data-name="${dataAttr}">${text}</button>
  `
}