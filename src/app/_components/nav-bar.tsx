import NavLink from "./nav-link";

export function NavBar() {
  return (
    <nav className="flex gap-4">
      <NavLink href="/projects" text="Projects" />
      <NavLink href="/skills" text="Skills" />
      <NavLink href="/eric-anastas-resume.pdf" text="Resume" />
    </nav>
  );
}
