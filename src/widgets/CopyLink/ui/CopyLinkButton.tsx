"use client";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Input } from "@/shared/ui/input";
import { Check, Copy, ExternalLink } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CopyLinkButtonProps {
  category: string;
  id: string;
}

export function CopyLinkButton({ category, id }: CopyLinkButtonProps) {
  const [isCopy, setIsCopy] = useState<boolean>();

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }
  });

  const link = `${window.location.origin}/${category}/${id}`;

  function onCopy() {
    navigator.clipboard.writeText(link);
    setIsCopy(true);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-6 w-6">
          <ExternalLink className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex gap-2">
        <Input value={link} />
        <Button onClick={onCopy} size="icon" className="w-11">
          {isCopy ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
