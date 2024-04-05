import Container from "@/app/_components/container";
import { SectionSeparator } from "./section-separator";

export function Footer() {
  const YEAR = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <hr className="border-neutral-200 mt-28 mb-4" />
        <div className="flex flex-row">
          <span className="block text-sm text-gray-500 text-left dark:text-gray-400 mb-4">
            © {YEAR} Eric Anastas
          </span>
          <div className="flex grow justify-end">
            <span className="block text-sm text-gray-500 text-left dark:text-gray-400 mb-4 italic">
              Built with{" "}
              <a className="hover:underline" href="https://nextjs.org/">
                Next.js
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
