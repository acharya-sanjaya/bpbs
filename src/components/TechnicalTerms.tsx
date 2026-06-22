import {useState} from "react";
import type {TechnicalTermsExercise} from "@data/ExerciseTypes";
import {instructionMap} from "@data/ExerciseTypes";
import {cn} from "@lib/utils";
import CheckAnswersButton from "./CheckAnswersButton";

type Props = {
  data: TechnicalTermsExercise;
};

export default function TechnicalTerms({data}: Props) {
  const [checking, setChecking] = useState(false);
  const [userInputs, setUserInputs] = useState<Record<string, string>>({});

  /* ================= INPUT ================= */

  const handleChange = (id: string, value: string) => {
    if (checking) return;

    setUserInputs((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  /* ================= CHECK ================= */

  const normalize = (val: string) => val.trim().toUpperCase();

  const handleCheck = () => setChecking(true);

  const handleReset = () => {
    setChecking(false);
    setUserInputs({});
  };

  /* ================= UI ================= */

  return (
    <div>
      {/* INSTRUCTION */}
      <h1 className="mb-4 font-bold">{instructionMap[data.type]}</h1>

      <div className="space-y-3 text-sm">
        <CheckAnswersButton checking={checking} handleCheck={handleCheck} handleReset={handleReset} />

        {/* QUESTIONS */}
        <ol className="list-[lower-alpha] space-y-4 pr-4 pl-8">
          {data.questions.map((q) => {
            const userValue = userInputs[q.id] ?? "";

            const isCorrect = normalize(userValue) === normalize(q.answer);

            return (
              <li key={q.id} className="leading-7">
                {/* QUESTION */}
                <span>{q.statement}</span>

                {/* INPUT */}
                <div className="mt-2">
                  <input
                    value={userValue}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    disabled={checking}
                    className={cn(
                      "w-full max-w-md border-b-2 border-dashed bg-transparent px-1 py-1 transition outline-none",
                      checking && "cursor-not-allowed opacity-80",
                      !checking && "border-blue-400 text-blue-500 dark:text-blue-300",
                      checking &&
                        (isCorrect ? "border-green-500 text-green-600 dark:text-green-300" : "border-red-500 text-red-500 dark:text-red-300"),
                    )}
                  />
                </div>

                {/* RESULT */}
                {checking && !isCorrect && <div className="font-semiboldtext-red-500 mt-1 text-sm dark:text-red-300">{q.answer}</div>}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
