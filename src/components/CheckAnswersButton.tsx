type ButtonProps = {
  handleCheck: () => void;
  handleReset: () => void;
  checking: boolean;
};

export default function CheckAnswersButton({checking, handleCheck, handleReset}: ButtonProps) {
  return (
    <button
      onClick={!checking ? handleCheck : handleReset}
      className="m-auto my-3 w-full max-w-96 cursor-pointer rounded-3xl bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 md:m-0 md:max-w-48"
    >
      {!checking ? "Check Answers" : "Try Again"}
    </button>
  );
}
