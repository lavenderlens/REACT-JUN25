export function Header(level, message) {
  const element = document.createElement(`h${level}`);
  element.innerText = message;
  return element;
}
