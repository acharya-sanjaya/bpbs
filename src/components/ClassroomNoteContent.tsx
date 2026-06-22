export default function ClassroomNoteContent({content}: {content: string}) {
  return (
    <div>
      <h1 className="mb-4 font-bold">Classroom Note</h1>
      <p className="text-sm">{content}</p>
    </div>
  );
}
