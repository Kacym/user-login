import { Link } from "react-router-dom";

export const Header = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Registration",
      href: "/registration",
    },
    {
      name: "Login",
      href: "/login",
    },
  ];
  return (
    <header>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
