import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

type Props = {
  href: string;
  text: string;
};

export default function NavLink({ href, text }: Props) {
  return (
    <Link
      href={href}
      className="rounded-md text-sm md:text-lg font-medium hover:underline"
    >
      {text}
    </Link>
  );
}
