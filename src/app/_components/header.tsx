import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
        <Link href="/" className="hover:underline">
          Eric Anastas
        </Link>
      </h2>
    </header>
  );
};

export default Header;
