"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const routes = [
    { label: "Home", path: "/" },
    { label: "Articles", path: "/articles" },
    { label: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 backdrop-blur-xs rounded-full bg-white/50 border-slate-800 border shadow-lg/30 px-5 py-3 flex gap-6 text-sm">
      {routes.map((r) => (
        <Link
          key={r.path}
          href={r.path}
          className={`navbar no-underline ${pathname === r.path ? "opacity-100 font-bold" : "opacity-60 hover:opacity-100 duration-75"}`}
        >
          {r.label}
        </Link>
      ))}
    </nav>
  );
}
