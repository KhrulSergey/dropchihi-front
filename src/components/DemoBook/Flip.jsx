import './flip.css';
import React from 'react';

import FlipPage from 'react-flip-page';
import pageFlipSFX from '../../assets/flip.mp3';
import useSound from 'use-sound';

export default function Flip() {
  const flipbook = React.useRef(null);
  const [play] = useSound(pageFlipSFX);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
  <h2>Start editing to see some magic happen!</h2>
  <FlipPage
  style={{ border: "1px solid pink" }}
  ref={flipbook}
  showSwipeHint
  orientation="horizontal"
  width={700}
  height={450}
  // animationDuration={750}
  onPageChange={(pageIndex, direction) => {
    console.log(`pageIndex: ${pageIndex}`);
    console.log(`direction: ${direction}`);
    play();
  }}
>
  <div className="App-page App-page_red">0</div>
    <div className="App-page App-page_green">1</div>
    <div className="App-page App-page_blue">2</div>
    <div className="App-page App-page_orange">3</div>
    </FlipPage>
    </div>
);
}
