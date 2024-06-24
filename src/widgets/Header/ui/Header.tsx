"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { BurgerMenu } from "./BurgerMenu";

export default function Header() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <header className="flex w-full items-center justify-center">
        <div className="flex w-full max-w-[1400px] items-center justify-between gap-3 px-4 py-8">
          <Logo />
          <Menu />
          <BurgerMenu />
        </div>
      </header>
    </QueryClientProvider>
  );
}
