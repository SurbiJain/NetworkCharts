import { useEffect } from "react";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <header className="">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden"></div>
        <div className="flex flex-1 justify-end">
          <a href="#" className="text-sm font-semibold leading-6">
            Home
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
