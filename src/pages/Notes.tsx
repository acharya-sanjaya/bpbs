import useGetNotes from "@/hooks/useGetNotes";
import Topic from "@components/Topic";

const Notes = () => {
  const {error, notes} = useGetNotes();

  if (error) {
    return <div className="p-6 text-center">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="space-y-6">
        {notes.map((topic, index) => (
          <Topic key={index} data={topic} explainLabel={topic.explainLabel} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
