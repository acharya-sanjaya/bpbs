import type {ListBlock} from "@data/NoteTypes";
import RenderHtml from "@components/RenderHtml";

export default function ListContent({label, listStyle = "list-[disc]", items}: ListBlock) {
  return (
    <div>
      <ol className={listStyle}>
        <div>
          <RenderHtml text={label} />
        </div>
        {items.map((item, i) => (
          <li key={i} className="my-2 ml-8">
            <RenderHtml text={item} />
          </li>
        ))}
      </ol>
    </div>
  );
}
