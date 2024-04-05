import NavLink from "./nav-link";

export function NavBar() {
  return (
    <nav className="flex gap-4">
      <NavLink href="/projects" text="Projects" />
      <NavLink href="/tags" text="Tags" />
      <NavLink href="/resume" text="Resume" />
    </nav>
  );
}
