const count = 7;
const gap = 20;
const h = 5;
const len = count * h + gap * (count + 1) - gap * 2;
const l = len / 2;
const styleMaper = {
  Left: "items-start",
  Center: "items-center",
  Right: "items-end",
  Justify: "flex-1",
};

export default function Icons() {
  return (
    <div className="m-4 h-fit w-fit border-4 border-red-500 bg-white p-4 text-5xl font-bold">
      <div className="flex" style={{gap: `${gap}px`}}>
        {["Left", "Center", "Right", "Justify"].map((align) => (
          <div className="">
            <div
              className={`flex w-fit flex-col border-[5px] border-black ${styleMaper[align as "Left" | "Center" | "Right" | "Justify"]}`}
              style={{
                padding: `${gap}px`,
                gap: `${gap}px`,
              }}
            >
              {Array(count)
                .fill("")
                .map((_, i) => (
                  <Line key={i} index={align === "Justify" ? 0 : i} />
                ))}
            </div>
            <div className="mt-4 py-0 text-center text-black">{align}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Line = ({index}: {index: number}) => (
  <div
    className="bg-black"
    style={{
      width: `${index % 2 === 0 ? len : l}px`,
      height: "5px",
    }}
  ></div>
);
