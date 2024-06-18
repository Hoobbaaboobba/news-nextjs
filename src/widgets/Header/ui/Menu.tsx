"use client";

import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { useQuery } from "@tanstack/react-query";
import {
  Atom,
  GlobeLock,
  Grid2X2,
  Laptop,
  Palette,
  Router,
} from "lucide-react";
import Link from "next/link";

export function Menu() {
  const { isPending, error, data } = useQuery({
    queryKey: ["newsCategories"],
    queryFn: () =>
      fetch(`https://api.currentsapi.services/v1/available/categories`).then(
        (res) => res.json(),
      ),
  });

  if (error) return "Error";

  return (
    <ul className="flex">
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
      <li>
        <Button className="text-lg" variant="ghost" asChild>
          <Link className="flex gap-2" href={`/fashion`}>
            <Palette />
            <span>Мода</span>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
