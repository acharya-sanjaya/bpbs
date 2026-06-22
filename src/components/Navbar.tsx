import {useNavigate, useLocation} from "react-router-dom";
import usePageTitle from "@/hooks/usePageTitle";
import Icon from "@/Icons";

export default function Navbar() {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const title = usePageTitle();

  const showBack = pathname !== "/";

  return (
    <div className="sticky top-0 z-50 flex h-16 w-full items-center border-b-2 border-black bg-black/5 px-4 backdrop-blur-md dark:border-white dark:bg-white/10">
      {/* Back button */}
      <div onClick={() => showBack && navigate(-1)} className="flex size-8 items-center justify-center">
        {showBack && <Icon iconName="arrowLeft" className="size-6" thickness={3} />}
      </div>
      {/* Title */}
      <div className="text-lg\ grow truncate p-3 text-center font-bold">{title}</div>
      {/* Spacer */}
      <div className="size-8" />
    </div>
  );
}
