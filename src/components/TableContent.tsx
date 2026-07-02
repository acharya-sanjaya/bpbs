import type {TableBlock} from "@data/NoteTypes";
import RenderHtml from "@components/RenderHtml";
import {cn} from "@lib/utils";

export default function TableContent({label, headers, rows}: TableBlock) {
  return (
    <div>
      <div>{label}</div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="border bg-black/10 px-3 py-2 font-bold dark:bg-white/20">
                  <RenderHtml text={header.label} />
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <RowRenderer key={rowIndex} {...{row, headers}} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

type RowRendererProps = {
  row: TableBlock["rows"][number];
  headers: TableBlock["headers"];
};

const RowRenderer = ({row, headers}: RowRendererProps) => {
  if (Array.isArray(row)) {
    return (
      <tr>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex} className={cn("border px-3 py-2", headers[cellIndex].align)}>
            <RenderHtml text={cell} />
          </td>
        ))}
      </tr>
    );
  }

  return (
    <tr>
      <td colSpan={99} className="border py-3 text-center text-xl font-bold">
        <RenderHtml text={row.sectionLabel} />
      </td>
    </tr>
  );
};
