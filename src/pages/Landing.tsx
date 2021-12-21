import React, { useRef, useState } from 'react';

// import GLOBE from "vanta/dist/vanta.globe.min";
import { Link, RouteComponentProps } from '@reach/router';

import Nav from '../components/Nav';

import LogoImage from '../assets/common/Logo.png';
import Discord from '../assets/icons/discord.svg';
import Twitter from '../assets/icons/twitter.svg';
import Girl from '../assets/landing/girl.svg';
import BananaNinja from '../assets/landing/bananaNinja.svg';
import Unknow from '../assets/landing/unknow.svg';
import Team from '../assets/landing/team.svg';
import Zombie from '../assets/landing/zombie.svg';
import GirlMobile from '../assets/landing/girlMobile.svg';
import BananaNinjaMobile from '../assets/landing/bananaNinjaMobile.svg';
import UnknowMobile from '../assets/landing/unknowMobile.svg';


import HoverTickerButton from '../components/Landing/HoverTickerButton';

import Spaceship from '../assets/landing/spaceship.svg';
import useScrollToTop from '../lib/useScrollToTop';
import FLBookTest from '../components/DemoBook/FLBookTest';
import TickerButton from '../components/TickerButton';
import GallerySlick from '../components/GallerySlick';
import TeamMemberCard from '../components/TeamMemberCard';
import SparkleBackground from '../components/SparkleBackground';

function Landing(props: RouteComponentProps) {
  const [effect, setEffect] = useState(null);
  const effectRef = useRef(null);
  const headingRef = useRef(null);
  const headGlow = useRef(null);

  useScrollToTop();
  return (
    <div className="relative overflow-x-hidden">
      <Nav />
      <div
        ref={effectRef}
        className="bg-wild-watermelon text-white w-full h-906 flex justify-center align-middle items-center px-10  py-14 lg:px-30 lg:py-60 relative"
      >
        <div className="flex-row justify-center align-middle ">
          <Link to="/">
            <Logo />
          </Link>
          <div className="text-center ">
            <div className="text-black uppercase mt-4 font-spot text-mobilexl lg:text-xl">
              Without them, <br /> you can’t{' '}
              <span className="text-white">be happy</span>
            </div>
            <div className="font-sans   mt-4 text-mobilesm lg:text-sm text-black">
              The random lottery for OG-members SOON
            </div>
            <HoverTickerButton
              text={'Follow project'}
              onClick={() => {
                console.log('click');
              }}
            ></HoverTickerButton>
          </div>
        </div>
        <div className="absolute m:flex m:top-3 m:left-4 lg:right-0 lg:mt-40 lg:mr-8">
          <a href="">
            <img className="m:w-50 m:h-50" src={Twitter} alt="" />
          </a>
          <a href="">
            <img
              className="m:w-50 m:h-50 m:ml-2 lg:mt-3"
              src={Discord}
              alt=""
            />
          </a>
        </div>
      </div>
      <img className=" absolute top-724.88px m:hidden" src={Girl} alt="" />
      <img
        className=" absolute top-867.25px lg:hidden"
        src={GirlMobile}
        alt=""
      />
      <img
        className="absolute top-567.08px m:hidden"
        src={BananaNinja}
        alt=""
      />
      <img
        className="absolute m:left-85.55px top-782.08px lg:hidden"
        src={BananaNinjaMobile}
        alt=""
      />
      <img
        className=" absolute top-749px left-328.76px  m:hidden"
        src={Unknow}
        alt=""
      />
      <img
        className=" absolute top-882px left-244.76px lg:hidden"
        src={UnknowMobile}
        alt=""
      />
      <img
        className=" absolute top-681.25px lg:right-0 mr-48 hidden lg:block"
        src={Team}
        alt=""
      />
      <img
        className=" absolute top-558.89px lg:right-0 hidden lg:block"
        src={Zombie}
        alt=""
      />
      

      <div className="w-screen h-screen bg-ebony"></div>
    </div>
  );
}

export default Landing;

export const Logo = () => (
  <img className="mx-auto" src={LogoImage} alt="Logo" />
);
