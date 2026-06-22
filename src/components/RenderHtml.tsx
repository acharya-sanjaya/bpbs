function renderHTML(html: string) {
  return {__html: html};
}

export default function RenderHtml({text}: {text: string}) {
  return <span dangerouslySetInnerHTML={renderHTML(text)} />;
}
