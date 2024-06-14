import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { Menu } from "lucide-react";

export function BurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left"></SheetContent>
    </Sheet>
  );
}
