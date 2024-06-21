import { Link } from "react-router-dom";
import logo from "../assets/WebSandbox-crop.png";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 text-white p-3 flex justify-between items-center">
      <div className="flex gap-4">
        <img src={logo} alt="" className="w-10 pl-2 " />
        <Link to="/">
          <h1 className="flex justify-center items-center text-xl font-mono font-bold select-none">
            WebSandbox
          </h1>
        </Link>
      </div>
      <ul className="flex gap-4">
        <li>
          <ModeToggle />
        </li>
        <li>
          <Link to="/compiler">
            <Button variant="outline" className="">
              Compiler
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
