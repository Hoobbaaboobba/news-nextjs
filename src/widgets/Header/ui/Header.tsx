import { formatDate } from "@/shared/DateFormatter";
import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center">
      <div className="flex w-full max-w-[1400px] items-center gap-3 py-8">
        <BurgerMenu />
        <Logo />
      </div>
    </header>
  );
}
