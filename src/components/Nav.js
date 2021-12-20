import { useState } from 'react';
import { Link, useLocation } from '@reach/router';

import TickerHeader from './Header/TickerHeader';

import Discord from '../assets/icons/discord.svg';
import Twitter from '../assets/icons/twitter.svg';
import BananaSvg from '../assets/icons/banana.svg';

import LogoImage from '../assets/common/Logo.png';

function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="text-white fixed z-20 top-0 inset-x-0 h-16 justify-between hidden lg:flex">
        <div className="h-13 w-screen ">
          <TickerHeader></TickerHeader>
          <div className="h-13 bg-black-navigation rounded-b-xl">
            <ul className="flex py-4 space-x-7 gap-30 justify-center align-middle">
              <li>
                <Link
                  to="/"
                  className={
                    pathname === '/' &&
                    'text-tangerine-yellow nav-glow flex gap-2.5'
                  }
                >
                  {pathname === '/' && <img src={BananaSvg} alt=""></img>}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/mint"
                  className={
                    pathname === '/mint' &&
                    'text-tangerine-yellow nav-glow flex gap-2.5'
                  }
                >
                  {pathname === '/mint' && <img src={BananaSvg} alt=""></img>}
                  Mint
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className={
                    pathname === '/collection' &&
                    'text-tangerine-yellow nav-glow flex gap-2.5'
                  }
                >
                  {pathname === '/collection' && (
                    <img src={BananaSvg} alt=""></img>
                  )}
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={
                    pathname === '/faq' &&
                    'text-tangerine-yellow nav-glow flex gap-2.5'
                  }
                >
                  {pathname === '/faq' && <img src={BananaSvg} alt=""></img>}
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="text-white bg-black fixed z-20 top-0 inset-x-0 px-5 lg:hidden"></header>
    </>
  );
}

export default Nav;

export const Logo = () => <img src={LogoImage} alt="Logo" />;

const MenuIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.25 8.125H22.75C23.647 8.125 24.375 7.397 24.375 6.5C24.375 5.603 23.647 4.875 22.75 4.875H3.25C2.353 4.875 1.625 5.603 1.625 6.5C1.625 7.397 2.353 8.125 3.25 8.125ZM22.75 11.375H3.25C2.353 11.375 1.625 12.103 1.625 13C1.625 13.897 2.353 14.625 3.25 14.625H22.75C23.647 14.625 24.375 13.897 24.375 13C24.375 12.103 23.647 11.375 22.75 11.375ZM22.75 17.875H3.25C2.353 17.875 1.625 18.603 1.625 19.5C1.625 20.397 2.353 21.125 3.25 21.125H22.75C23.647 21.125 24.375 20.397 24.375 19.5C24.375 18.603 23.647 17.875 22.75 17.875Z"
      fill="white"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1365 13.0004L21.822 6.31492C22.0593 6.07751 22.0593 5.69333 21.822 5.45599L20.5443 4.17776C20.4305 4.06403 20.2761 4 20.1149 4C19.9537 4 19.7993 4.06403 19.6855 4.17776L13 10.8637L6.31457 4.17776C6.20077 4.06403 6.04635 4 5.88513 4C5.72395 4 5.56949 4.06403 5.45573 4.17776L4.17805 5.45599C3.94065 5.69333 3.94065 6.07751 4.17805 6.31492L10.8635 13.0004L4.17871 19.6851C3.94143 19.9225 3.94143 20.3067 4.17871 20.544L5.45648 21.8222C5.57019 21.936 5.72466 22 5.88587 22C6.04709 22 6.20152 21.936 6.31535 21.8222L13 15.1371L19.6846 21.8222C19.7984 21.936 19.9529 22 20.1141 22C20.2753 22 20.4298 21.936 20.5435 21.8222L21.8212 20.544C22.0585 20.3067 22.0585 19.9225 21.8212 19.6851L15.1365 13.0004Z"
      fill="white"
    />
  </svg>
);
