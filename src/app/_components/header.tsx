import Link from "next/link";
import { NavBar } from "./nav-bar";

type Props = {
  hideTitle?: boolean;
};

const Header = ({ hideTitle }: Props) => {
  return (
    <header>
      <div className="flex mb-2 mt-8 items-center">
        {!hideTitle && (
          <h2 className="flex-none text-2xl md:text-4xl font-bold">
            <Link href="/" className="hover:underline">
              Eric Anastas
            </Link>
          </h2>
        )}

        <div className="grow flex justify-end">
          <NavBar />
        </div>
      </div>
      <hr className="border-gray-400 mt-0 mb-4" />
    </header>
  );
};

export default Header;
