import Link from "next/link";
import { NavBar } from "./nav-bar";

const Header = () => {
  return (
    <header className="flex mb-8 mt-8 items-center">
      <h2 className="flex-none text-2xl md:text-4xl font-bold tracking-tighter">
        <Link href="/" className="hover:underline">
          Eric Anastas
        </Link>
      </h2>

      <div className="grow flex justify-end">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
