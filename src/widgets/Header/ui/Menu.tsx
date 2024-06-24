import { Button } from "@/shared/ui/button";
import { Atom, GlobeLock, Router } from "lucide-react";
import Link from "next/link";

export function Menu() {
  return (
    <ul className="hidden md:flex">
      <li>
        <Button className="text-lg" variant="ghost" asChild>
          <Link className="flex gap-2" href={`/general`}>
            <Atom />
            <span>Общее</span>
          </Link>
        </Button>
      </li>
      <li>
        <Button className="text-lg" variant="ghost" asChild>
          <Link className="flex gap-2" href={`/software`}>
            <Router />
            <span>Программное обеспечение</span>
          </Link>
        </Button>
      </li>
      <li>
        <Button className="text-lg" variant="ghost" asChild>
          <Link className="flex gap-2" href={`/security`}>
            <GlobeLock />
            <span>Безопасность</span>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
