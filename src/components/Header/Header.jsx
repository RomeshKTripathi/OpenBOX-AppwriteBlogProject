import Logo from "../utility/Logo";
import Button from "../utility/Button";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const links = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Tags",
    link: "/tags",
  },
  {
    text: "About",
    link: "/about",
  },
];

function Header() {
  return (
    <div className="sticky top-0 z-50 mx-auto flex w-full justify-between border-blue-700 bg-white py-4 *:self-center max-md:px-12 max-sm:p-4 lg:mb-5">
      <NavLink to="/">
        <Logo style={"text-3xl"} />
      </NavLink>
      <div className="ml-10 mr-auto flex gap-4 text-lg font-semibold max-sm:hidden">
        {links.map((linkObject) => (
          <span key={linkObject.text} className={`cursor-pointer duration-150`}>
            <NavLink
              to={linkObject.link}
              className={({ isActive }) => `${isActive ? "font-bold" : ""}`}
            >
              {linkObject.text}
            </NavLink>
          </span>
        ))}
      </div>
      {!useSelector((state) => state.user.loggedIn) ? (
        <Link to="/login">
          <Button text={"Login"} />
        </Link>
      ) : (
        <Profile />
      )}
    </div>
  );
}

export default Header;
