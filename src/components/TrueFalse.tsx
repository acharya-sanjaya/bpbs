import {instructionMap, type TrueFalseExercise} from "@data/ExerciseTypes";
import {cn} from "@lib/utils";
import {useState} from "react";
import CheckAnswersButton from "./CheckAnswersButton";

type Props = {
  data: TrueFalseExercise;
};

export default function TrueFalse({data}: Props) {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [checking, setChecking] = useState(false);

  const handleSelect = (qid: string, value: boolean) => {
    if (checking) return;

    setSelected((prev) => ({
      ...prev,
      [qid]: value,
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

            const isTrueSelected = picked === true;
            const isFalseSelected = picked === false;

            return (
              <li key={q.id}>
                <div className="flex flex-col gap-2">
                  <div className="flex-1">{q.statement}</div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => handleSelect(q.id, true)}
                      disabled={checking}
                      className={cn(
                        "flex cursor-pointer items-center gap-1 rounded-lg border-2 px-4 py-1 text-sm transition disabled:cursor-not-allowed",

                        !checking &&
                          isTrueSelected &&
                          "border-blue-600 bg-blue-200 text-blue-600 dark:border-blue-300 dark:bg-blue-500/30 dark:text-blue-300",

                        checking && q.answer === true && "border-green-500 text-green-500 dark:border-green-300 dark:text-green-300",

                        checking && isTrueSelected && q.answer !== true && "border-red-500 text-red-500 dark:border-red-300 dark:text-red-300",
                      )}
                    >
                      True
                    </button>

                    <button
                      onClick={() => handleSelect(q.id, false)}
                      disabled={checking}
                      className={cn(
                        "cursor-pointer gap-1 rounded-lg border-2 px-4 py-1 text-center text-sm transition disabled:cursor-not-allowed",

                        !checking &&
                          isFalseSelected &&
                          "border-blue-600 bg-blue-200 text-blue-600 dark:border-blue-300 dark:bg-blue-500/30 dark:text-blue-300",

                        checking && q.answer === false && "border-green-500 text-green-500 dark:border-green-300 dark:text-green-300",

                        checking && isFalseSelected && q.answer !== false && "border-red-500 text-red-500 dark:border-red-300 dark:text-red-300",
                      )}
                    >
                      False
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
