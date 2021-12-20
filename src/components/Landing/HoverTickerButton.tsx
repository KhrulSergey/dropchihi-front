import Ticker from 'react-ticker';
import React, { MouseEvent, useState } from 'react';
import { Button } from '@material-ui/core';

interface ITickerButtonProps {
  children?: JSX.Element | JSX.Element[] | string | null;
  to?: string;
  text: any;
  onClick?: (e: MouseEvent) => void;
}

const HoverTickerButton = (props: ITickerButtonProps) => {
  const [isMove, setIsMove] = useState(false);

  return (
    <Button className="" {...props}>
      <div
        className="bg-black mt-8 text-white rounded-xl pt-7"
        style={{
          height: '89px',
          width: '428px',
          verticalAlign: 'baseline',
        }}
        onMouseEnter={() => setIsMove(true)}
        onMouseLeave={() => setIsMove(false)}
      >
        <Ticker move={isMove}>
          {(index) => (
            <span className="text-button text-white">{props.text}</span>
          )}
        </Ticker>
      </div>
    </Button>
  );
};

export default HoverTickerButton;
