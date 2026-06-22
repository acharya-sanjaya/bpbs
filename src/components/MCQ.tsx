import {instructionMap, type MCQExercise} from "@data/ExerciseTypes";
import {cn} from "@lib/utils";
import {useState} from "react";
import CheckAnswersButton from "./CheckAnswersButton";

type Props = {
  data: MCQExercise;
};

export default function MCQ({data}: Props) {
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [checking, setChecking] = useState(false);

  const handleSelect = (qid: string, option: string) => {
    if (checking) return;

    setSelected((prev) => ({
      ...prev,
      [qid]: option,
    }));
  };

  const handleCheck = () => setChecking(true);

  const handleReset = () => {
    setChecking(false);
    setSelected({});
  };

  return (
    <div>
      <h1 className="mb-4 font-bold">{instructionMap[data.type]}</h1>

      <div className="text-sm">
        <CheckAnswersButton checking={checking} handleCheck={handleCheck} handleReset={handleReset} />

        <ol className="list-[lower-alpha] space-y-6 pl-8">
          {data.questions.map((q) => {
            const picked = selected[q.id];

            return (
              <li key={q.id}>
                <div className="mb-3">{q.statement}</div>

                <div className="flex w-full flex-col gap-2">
                  {q.options.map((opt) => {
                    const isSelected = picked === opt;
                    const isCorrect = opt === q.answer;

                    const isWrong = checking && isSelected && picked !== q.answer;

                    const showCorrect = checking && isCorrect;

                    return (
                      <button
                        key={opt}
                        onClick={() => handleSelect(q.id, opt)}
                        disabled={checking}
                        className={cn(
                          "cursor-pointer rounded-lg border-2 px-3 py-2 text-left text-sm transition disabled:cursor-not-allowed",
                          isSelected &&
                            !checking &&
                            "border-blue-600 bg-blue-200 text-blue-600 dark:border-blue-300 dark:bg-blue-500/30 dark:text-blue-300",
                          checking && showCorrect && "border-green-500 text-green-500 dark:border-green-300 dark:text-green-300",
                          isWrong && "border-red-500 text-red-500 dark:border-red-300 dark:text-red-300",
                        )}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
