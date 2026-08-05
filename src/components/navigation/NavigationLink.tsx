import type { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

export interface NavigationItem {
  label: string;
  href: `#${string}`;
  sectionId: string;
  desktop?: boolean;
}

interface NavigationLinkProps {
  item: NavigationItem;
  isActive: boolean;
  mobile?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function NavigationLink({
  item,
  isActive,
  mobile = false,
  onClick,
}: NavigationLinkProps) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      aria-current={isActive ? "location" : undefined}
      className={cn(
        "relative inline-flex min-h-11 cursor-pointer touch-manipulation items-center rounded-full font-medium text-white outline-none transition-[color,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950",
        mobile
          ? "w-full justify-between px-4 py-3 text-xl tracking-[-0.02em] sm:text-2xl"
          : "justify-center px-3 text-[13px] tracking-[-0.01em] xl:px-3.5 xl:text-sm",
        isActive
          ? "bg-white/[0.11] text-white"
          : "text-white/68 hover:bg-white/[0.06] hover:text-white",
      )}
    >
      <span>{item.label}</span>
      {mobile && (
        <span
          aria-hidden="true"
          className={cn(
            "size-1.5 rounded-full transition-colors duration-200",
            isActive ? "bg-cyan-300" : "bg-white/20",
          )}
        />
      )}
    </a>
  );
}
