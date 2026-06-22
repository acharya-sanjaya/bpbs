import RenderHtml from "@components/RenderHtml";

export default function TextContent({content}: {content: string[]}) {
  return (
    <div className="flex flex-col gap-1">
      {content.map((line, i) => (
        <RenderHtml key={i} text={line} />
      ))}
    </div>
  );
}
