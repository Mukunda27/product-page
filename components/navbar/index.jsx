import Image from "next/image";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import Menu from "../../assets/icon-menu.svg";
import Close from "../../assets/icon-close.svg";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(true);

  const menu = (
    <div className="inset-0 bg-gray-600 fixed  bg-opacity-80 z-30">
      <div className="min-h-full w-2/3 bg-white p-4">
        <Image
          src={Close}
          alt="Close"
          onClick={() => {
            setShowMenu(false);
          }}
        />
        <ul className=" font-bold flex flex-col lg:hidden gap-4 z-40 mt-16">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="px-4 lg:px-0 py-4 flex items-center justify-between">
        <span className="flex items-center gap-4">
          <span className="block lg:hidden">
            <Image
              src={Menu}
              alt="Menu"
              onClick={() => {
                setShowMenu(true);
              }}
            />
          </span>
          <Image src={Logo} alt="sneakers" />
        </span>
        <ul className="flex-1 ml-16 text-gray-600 hidden lg:flex">
          <li className="mx-4 ml-0">Collections</li>
          <li className="mx-4">Men</li>
          <li className="mx-4">Women</li>
          <li className="mx-4">About</li>
          <li className="mx-4 mr-0">Contact</li>
        </ul>
        <span className="flex items-center gap-4">
          <Image src={Cart} alt="Cart" />
          <Image src={Avatar} alt="Avatar" width={48} height={48} />
        </span>
      </div>
      <span className="h-1 min-w-full hidden lg:block bg-gray-100"></span>
      {showMenu && menu}
    </>
  );
}

export default Navbar;
