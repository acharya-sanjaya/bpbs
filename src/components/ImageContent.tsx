import {cn} from "@lib/utils";
import type {ImageBlock} from "@data/NoteTypes";

export default function ImageContent({src, alt, caption, className}: ImageBlock) {
  return (
    <div className="flex flex-col items-center gap-3">
      <img {...{src, alt}} className={cn("w-full max-w-full rounded-xl border", className)} />
      <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-black/10 p-2 dark:bg-white/10">
        <div>Figure:</div>
        <div className="text-center">{caption}</div>
      </div>
    </div>
  );
}
