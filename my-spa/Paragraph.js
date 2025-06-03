export function Paragraph(message) {
  const element = document.createElement(`p`);
  element.innerText = message;
  return element;
}
