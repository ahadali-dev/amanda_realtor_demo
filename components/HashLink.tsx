"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

// <Link> to "/#section" that still scrolls when the URL already has that hash
// (Next skips navigation when the target URL equals the current one).
export function HashLink({ href, onClick, ...rest }: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    const [path, hash] = href.split("#");
    if (e.defaultPrevented || !hash || (path || "/") !== pathname) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const el = document.getElementById(hash);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    history.replaceState(null, "", `${pathname}#${hash}`);
  };

  return <Link href={href} onClick={handle} {...rest} />;
}
