import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Atom, GlobeLock, Menu, Router } from "lucide-react";
import Link from "next/link";

export function BurgerMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent className="flex w-[80%] flex-col items-start justify-start px-2 pt-4">
          <SheetClose asChild>
            <Button className="text-md" variant="ghost" asChild>
              <Link className="flex gap-2" href={`/general`}>
                <Atom />
                <span>Общее</span>
              </Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="text-md" variant="ghost" asChild>
              <Link className="flex gap-2" href={`/software`}>
                <Router />
                <span>Программное обеспечение</span>
              </Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button className="text-md" variant="ghost" asChild>
              <Link className="flex gap-2" href={`/security`}>
                <GlobeLock />
                <span>Безопасность</span>
              </Link>
            </Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
}
