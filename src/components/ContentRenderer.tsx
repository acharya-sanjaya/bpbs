import type {ContentType} from "@data/NoteTypes";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";
import ListContent from "./ListContent";
import TableContent from "./TableContent";
import ClassroomNoteContent from "./ClassroomNoteContent";

export default function ContentRenderer({type, content}: ContentType) {
  switch (type) {
    case "text":
      return <TextContent content={content} />;

    case "image":
      return <ImageContent {...content} />;

    case "list":
      return <ListContent {...content} />;

    case "table":
      return <TableContent {...content} />;

    case "classroom":
      return <ClassroomNoteContent content={content} />;

    default:
      return <>Unknown Content Type</>;
  }
}
