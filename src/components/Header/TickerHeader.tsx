import Ticker from 'react-ticker';
import React from 'react';

import BananaSvg from '../../assets/icons/banana.svg';
import BitcoinSvg from '../../assets/icons/bitcoin.svg';
import BrainSvg from '../../assets/icons/brain.svg';
import SolanaSvg from '../../assets/icons/solana.svg';
import TomatoSvg from '../../assets/icons/tomato.svg';

const TickerHeader = () => {
  return (
    <div className="p-5 h-16 bg-ebony">
      <Ticker move={true} height={30}>
        {(index) => (
          <>
            <div className="flex content-center items-center w-96 ml-8">
              <img src={BitcoinSvg} className="rotate-16.72 ml-8" alt="" />
              <img src={BitcoinSvg} className="rotate-5.6 ml-1.5" alt="" />
              <img src={BananaSvg} className="rotate-13.22 mx-10" alt="" />
              <img src={SolanaSvg} className="rotate-16.72" alt="" />
              <img src={SolanaSvg} className="rotate-5.6  ml-1.5" alt="" />
              <img src={BrainSvg} className="rotate-11.33 mx-10" alt="" />
              <img src={BananaSvg} className="rotate-90 mr-10" alt="" />
              <img src={TomatoSvg} className="rotate-60" alt="" />
              <img src={TomatoSvg} className="ml-2" alt="" />
            </div>
          </>
        )}
      </Ticker>
    </div>
  );
};

export default TickerHeader;
