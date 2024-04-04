import Container from "@/app/_components/container";
import { SectionSeparator } from "./section-separator";

export function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <hr className="border-neutral-200 mt-28 mb-4" />
        <span className="block text-sm text-gray-500 text-left dark:text-gray-400 mb-4">
          © {YEAR} Eric Anastas
        </span>
      </Container>
    </footer>
  );
}

export default Footer;
