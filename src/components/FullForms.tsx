import Icon from "@/Icons";
import {cn} from "@/lib/utils";
import forms from "@data/FullForms";
import {useEffect, useRef, useState} from "react";

export default function FullForms() {
  const [signal, setSignal] = useState({status: false, count: 0});
  const [search, setSearch] = useState("");

  const sendSignal = (s: boolean) => {
    setSignal((p) => ({status: s, count: p.count + 1}));
  };

  const filteredForms = forms.filter((form) => form.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="m-4 flex items-center rounded-lg border px-3 py-2 transition-colors focus-within:border-blue-500">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          spellCheck={false}
          className="w-full outline-none"
        />

        {search && <Icon onClick={() => setSearch("")} iconName="close" className="size-6 active:stroke-red-500" />}
      </div>
      <div className="flex justify-between gap-4 p-4">
        <Button label="Show All" onClick={() => sendSignal(true)} />
        <Button label="Hide All" onClick={() => sendSignal(false)} />
      </div>

      <div className="space-y-1 p-4">
        {filteredForms.map((form) => (
          <FullForm key={`fullform-${form.title}`} signal={signal} title={form.title} fullForm={form.fullForm} />
        ))}
      </div>
    </div>
  );
}

type Props = {title: string; fullForm: string; signal: {status: boolean; count: number}};

export function FullForm({signal, title, fullForm}: Props) {
  const [show, setShow] = useState(false);
  const prevSignalCount = useRef(0);
  useEffect(() => {
    if (signal.count == prevSignalCount.current) {
      return;
    }
    prevSignalCount.current = signal.count;
    setShow(signal.status);
  }, [signal]);
  return (
    <div onClick={() => setShow((prev) => !prev)} className="my-2 flex cursor-pointer flex-col bg-black/5 p-4 dark:bg-white/5">
      <div className={cn("flex items-center", show && "font-bold text-blue-500 dark:text-blue-300")}>{title}</div>
      {show && <div>{fullForm}</div>}
    </div>
  );
}

const Button = ({label, onClick}: {label: string; onClick: () => void}) => (
  <button className="cursor-pointer rounded-3xl bg-blue-500 px-6 py-2 text-white active:scale-95" onClick={onClick}>
    {label}
  </button>
);
