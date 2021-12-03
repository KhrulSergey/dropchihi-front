import React, {useRef, useState} from 'react';

// import GLOBE from "vanta/dist/vanta.globe.min";
import {Link, RouteComponentProps} from '@reach/router';

import Nav from '../components/Nav';

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
      <Nav/>
      <div ref={effectRef}
           className="bg-black text-white w-full h-screen flex items-center px-10 py-14 lg:px-30 lg:py-40 relative">
        <SparkleBackground speed={'slow'} />
        <div className="max-w-5xl">
          <div className="relative">
            <div className="bg-black opacity-25 absolute inset-0 filter blur lg:hidden"></div>
            <h1
              className="lg:text-7xl text-4xl font-black italic transform transition-all opacity-0 -translate-x-6 duration-900 ease-out"
              ref={headingRef}
            >
              1st COMMUNITY-OWNED{' '}
              <span
                className="text-primary-light relative delay-700 duration-500"
                ref={headGlow}
              >
                SCI-FI MEDIA HOUSE{' '}
              </span>{' '}
              🔭 BUILT ON SOLANA
            </h1>
          </div>

          <div className="mt-10 lg:space-x-5  space-y-4  lg:space-y-0 font-orb  mx-auto">
            <Link to="/nft" className="btn-primary font-black">
              GEN-1 NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bB"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black"
            >
              JOIN DISCORD
            </a>
          </div>
          <TickerButton text={"message button"} styleTheme={'bigMintStyle'} onClick={() => {console.log("click")}}/>
        </div>

      </div>

      <div
        className="lg:h-screen" id="landing-section-1">
        <GallerySlick/>
      </div>
      <div className="lg:h-screen" id="landing-section-1">
        <FLBookTest/>
      </div>
      <div
        className="h-screen bg-center bg-cover flex items-center lg:px-30 px-10 relative bg-gray-dark"
        id="landing-section-2">
        <div className="w-full">
          <h1 className="text-primary-light lg:text-5xl text-4xl font-black italic glow lg:text-center">
            AHOY
          </h1>
          <div
            className="font-orb font-black lg:text-3xl text-2xl lg:text-center text-white mt-10 space-y-2 uppercase">
            <p>
              Welcome To{' '}
              <span className="text-primary-dark glow">
                Control
              </span>{' '}
              room.
            </p>
            <p>
              Here <span className="font-medium">You</span> will{' '}
              <span className="font-medium">find</span> everything to{' '}
              <span className="font-medium">get started</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:h-screen bg-center bg-cover relative lg:pb-28 lg:pt-44 lg:pl-36 px-10 pt-20 pb-16"
           id="vision">
        <div className="lg:grid lg:grid-cols-2">
          <div className="text-white">
            <h1 className="text-primary-light glow lg:text-5xl text-4xl font-black italic uppercase">
              Vision
            </h1>
            <div className="uppercase font-orb lg:text-3xl text-2xl mt-10 font-black">
              <p>
                Community owned from the start.
              </p>
            </div>
          </div>
          <img
            src={Spaceship}
            alt="spaceship"
            className="justify-self-end w-5/6 hidden lg:block"
          />
        </div>
        <div>
          <p className="mt-10 text-white lg:text-3xl text-2xl font-orb uppercase font-black">
            Intellectual property DROPs planned:
            <br/>
            <span className="text-primary-dark glow">
              GENSIS 10k Gen-1
            </span>
          </p>

          <div className="mt-10 lg:space-x-3 lg:space-y-0 space-y-3 font-orb">
            <Link to="/nft" className="btn-primary font-black">
              GEN-1 NFT DROP
            </Link>
            <a
              href="https://discord.com/invite/bBeHK5"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary font-black"
            >
              JOIN DISCORD
            </a>
          </div>
        </div>
      </div>
      <div className="lg:h-screen bg-center bg-cover lg:pt-40 px-10  pt-36 pb-16 relative" id="team">
        <div className="bg-black bg-opacity-40 h-full absolute inset-0 z-0"></div>
        <div className="relative z-10">
          <h1 className="uppercase text-primary-light glow font-black italic lg:text-5xl text-4xl text-center">
            Druids of Chichi Universe
          </h1>
          <div className="max-w-4xl mx-auto hidden lg:block">
            <div className="grid grid-cols-4 font-orb text-white mt-20">
              <TeamMemberCard name={"Grandpa Dropchichi"} description={"founder of believers community"}/>
              <TeamMemberCard name={"Uncle Dropchichi"} description={"monk for financial affairs"}/>
              <TeamMemberCard name={"Stepbrother Dropchichi"} description={"mastermind of color solutions"}/>
              <TeamMemberCard name={"Nephew Dropchichi"} description={"begetter of technical masterpieces"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
