import {instructionMap, type FillGapExercise} from "@data/ExerciseTypes";
import {cn, shuffleArray} from "@lib/utils";
import {useMemo, useState} from "react";
import CheckAnswersButton from "./CheckAnswersButton";

type Props = {
  data: FillGapExercise;
};

export default function FilltheGaps({data}: Props) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [filled, setFilled] = useState<Record<string, string>>({});
  const [checking, setChecking] = useState(false);

  /* ================= OPTIONS ================= */

  const options = useMemo(
    () =>
      data.questions.flatMap((q) =>
        q.answers.map((a) => ({
          id: a.id,
          value: a.value,
        })),
      ),
    [data.questions],
  );

  const shuffledOptions = useMemo(() => shuffleArray(options), [options]);

  const usedOptions = useMemo(() => Object.values(filled), [filled]);

  /* ================= SELECT ================= */

  const handleSelectOption = (id: string) => {
    if (checking) return;

    if (usedOptions.includes(id)) return;

    if (selectedOption === id) {
      setSelectedOption("");
      return;
    }
    setSelectedOption(id);
  };

  /* ================= GAP ================= */

  const handleGapClick = (gapId: string) => {
    setFilled((prev) => {
      if (!selectedOption) {
        const copy = {...prev};
        delete copy[gapId];
        return copy;
      }

      return {
        ...prev,
        [gapId]: selectedOption,
      };
    });

    setSelectedOption("");
  };

  /* ================= CORRECT ================= */

  const getCorrectAnswer = (gapId: string) => {
    for (const q of data.questions) {
      const match = q.answers.find((a) => a.id === gapId);
      if (match) return match.value;
    }
    return "";
  };

  /* ================= UI ================= */

  const handleCheck = () => {
    setSelectedOption("");
    setChecking(true);
  };

  const handleReset = () => {
    setChecking(false);
    setFilled({});
    setSelectedOption("");
  };

  return (
    <div>
      <h1 className="mb-4 font-bold">{instructionMap[data.type]}</h1>

      <div className="text-sm">
        <WordBank words={shuffledOptions} selectedId={selectedOption} usedIds={usedOptions} onSelect={handleSelectOption} disabled={checking} />
        <CheckAnswersButton {...{checking, handleCheck, handleReset}} />
        <ol className="list-[lower-alpha] pr-4 pl-8">
          {data.questions.map((question, i) => (
            <Question
              key={i}
              i={i}
              question={question}
              filled={filled}
              checking={checking}
              onGapClick={handleGapClick}
              getCorrectAnswer={getCorrectAnswer}
              options={options}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ================= WORD BANK ================= */

type WordBankProps = {
  words: {id: string; value: string}[];
  selectedId: string;
  usedIds: string[];
  onSelect: (id: string) => void;
  disabled: boolean;
};

const WordBank = ({words, selectedId, usedIds, onSelect, disabled}: WordBankProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {words.map((word) => {
        const isUsed = usedIds.includes(word.id);
        const isSelected = selectedId === word.id;

        return (
          <div
            key={word.id}
            onClick={() => {
              if (disabled || isUsed) return;
              onSelect(word.id);
            }}
            className={cn(
              "cursor-pointer rounded-2xl border px-4 py-2 transition",
              isSelected && "border-blue-600 bg-blue-300 dark:bg-blue-900/30",
              (isUsed || disabled) && "pointer-events-none cursor-not-allowed opacity-40",
            )}
          >
            {word.value}
          </div>
        );
      })}
    </div>
  );
};

/* ================= QUESTION ================= */

type QuestionProps = {
  i: number;
  question: FillGapExercise["questions"][number];
  filled: Record<string, string>;
  checking: boolean;
  onGapClick: (gapId: string) => void;
  getCorrectAnswer: (gapId: string) => string;
  options: {id: string; value: string}[];
};

const Question = ({i, question, filled, checking, onGapClick, getCorrectAnswer, options}: QuestionProps) => {
  return (
    <li className="leading-8">
      {question.parts.map((part, j) => {
        const key = `q-${i}-p-${j}`;

        if (part.type === "text") {
          return (
            <span key={key} className="text-gray-800 dark:text-gray-200">
              {part.value}
            </span>
          );
        }

        const valueId = filled[part.id];
        const value = options.find((o) => o.id === valueId)?.value;

        const correct = getCorrectAnswer(part.id);

        const isCorrect = checking && value === correct;
        const isWrong = checking && value !== correct;

        return (
          <span key={key}>
            <button
              onClick={() => onGapClick(part.id)}
              disabled={checking}
              className={cn(
                "mx-1 min-w-10 cursor-pointer border-b-2 border-dashed py-0 text-center transition",
                isCorrect && "border-green-500 text-green-600 dark:text-green-300",
                isWrong && "border-red-500 text-red-500 dark:text-red-300",
                !checking && "text-blue-500 dark:text-blue-300",
                checking && "cursor-not-allowed font-bold",
              )}
            >
              {checking && isWrong ? correct : (value ?? "\u00A0")}
            </button>
          </span>
        );
      })}
    </li>
  );
};
