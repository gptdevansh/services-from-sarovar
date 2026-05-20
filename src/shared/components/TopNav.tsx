"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TreePine, Car } from "lucide-react";

const navItems = [
  { href: "/safari", label: "Corbett Safari", Icon: TreePine },
  { href: "/cab-service", label: "Cab Service", Icon: Car },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <nav className="flex w-full flex-wrap justify-center gap-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-[color:var(--color-primary)] text-white shadow-sm"
                : "border border-[color:var(--color-primary)]/40 bg-white text-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/10"
            }`}
          >
            <item.Icon size={16} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}