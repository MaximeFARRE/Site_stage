import Link from "next/link";

import Container from "./container";
import { navigation } from "@/data/navigation";
import { personalInfo } from "@/data/personal-info";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          {personalInfo.fullName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}