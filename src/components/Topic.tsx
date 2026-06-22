import type {ChapterType} from "@data/NoteTypes";
import {cn} from "@lib/utils";

import ContentRenderer from "@components/ContentRenderer";

type Props = {
  data: ChapterType[number];
  explainLabel?: string;
};

export default function Topic({data, explainLabel = "In simple words"}: Props) {
  return (
    <div className={cn("cursor-pointer rounded-2xl bg-black/5 p-4 transition dark:bg-white/10")}>
      {/* Topic title */}
      <h2 className="text-center text-2xl font-bold">{data.topic}</h2>

      {/* Paragraph */}
      <div className="mt-3 space-y-3">
        <ContentRenderer {...data.paragraph} />
      </div>

      {/* Explanation */}
      {data.explanation && (
        <div className="mt-6 space-y-3 border-t pt-4">
          <h3 className="text-lg font-semibold">{explainLabel}:</h3>

          <ContentRenderer {...data.explanation} />
        </div>
      )}
    </div>
  );
}
