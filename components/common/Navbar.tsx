import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Navbar() {
  return (
    <MaxWidthWrapper>
      <header>
        <nav className="flex w-full justify-between">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />

          <div>
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/articles">Article</Link>
              </li>
              <li>
                <Link href="/peoples">People</Link>
              </li>
              <li>
                <Link href="/learning">Learning</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ThemeToggler />
      </header>
    </MaxWidthWrapper>
  );
}
