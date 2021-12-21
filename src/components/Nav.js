import { useState } from 'react';
import { Link, useLocation } from '@reach/router';

import TickerHeader from './Header/TickerHeader';

import Discord from '../assets/icons/discord.svg';
import Twitter from '../assets/icons/twitter.svg';
import BananaSvg from '../assets/icons/banana.svg';
import HeaderDropdown from '../assets/icons/headerDropdown.svg';
import CloseIconDropdown from '../assets/icons/closeIcon.svg';

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
      <header className="text-white bg-black z-20 top-0 inset-x-0 lg:hidden">
        <TickerHeader></TickerHeader>
        <div onClick={() => setMenuOpen((st) => !st)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        {/* <img
          src={HeaderDropdown}
          className="absolute right-0 top-3 mr-4 mt-16 z-10 lg:hidden"
          alt=""
        ></img> */}
        <nav
          className={`mt-5 text-sm font-orb h-screen overflow-y-hidden  pb-6 font-medium ${
            menuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col py-4 gap-10 justify-center">
            <li className="mx-auto">
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
            <li className="mx-auto">
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
            <li className="mx-auto">
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
            <li className="mx-auto">
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
        </nav>
      </header>
    </>
  );
}

export default Nav;

export const Logo = () => <img src={LogoImage} alt="Logo" />;

const MenuIcon = () => (
  <img
    src={HeaderDropdown}
    className="absolute right-0 top-3 mr-4 mt-16 z-10 lg:hidden"
    alt="MenuIcon"
  ></img>
);

const CloseIcon = () => (
  <img
    src={CloseIconDropdown}
    className="absolute right-0 top-3 mr-4 mt-16 z-10 lg:hidden"
    alt="CloseIcon"
  ></img>
);
