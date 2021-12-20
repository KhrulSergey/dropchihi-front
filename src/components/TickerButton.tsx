import Ticker from 'react-ticker';
import React, { MouseEvent } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import colors from '../styles/colors';

const useStyle = makeStyles((theme) => ({
  bigMintButton: {
    color: 'aliceblue',
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
      delay: 0,
    }),
    '& svg': {
      marginRight: theme.spacing(0.7),
      borderRadius: '50%',
      backgroundColor: '#282828',
    },
    '&:hover, &.active': {
      color: colors.blue,
    },
  },
  blackAndWhiteStyleButton: {
    color: 'aliceblue',
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeInOut,
      delay: 0,
    }),
    '& svg': {
      marginRight: theme.spacing(0.7),
      borderRadius: '50%',
      backgroundColor: '#282828',
    },
    '&:hover, &.active': {
      color: colors.blue,
    },
  },
}));

interface ITickerButtonProps {
  children?: JSX.Element | JSX.Element[] | string | null;
  to?: string;
  text: any;
  styleTheme: 'bigMintStyle' | 'blackAndWhiteStyle';
  onClick?: (e: MouseEvent) => void;
}

const TickerButton = (props: ITickerButtonProps) => {
  const classes = useStyle();
  const styleName =
    props.styleTheme == 'blackAndWhiteStyle'
      ? classes.blackAndWhiteStyleButton
      : classes.bigMintButton;
  return (
    <Button className={styleName} {...props}>
      <div
        className="absolute bottom-0 inset-x-0 bg-primary-light text-black font-orb"
        style={{
          height: '50px',
          width: '200px',
          verticalAlign: 'baseline',
        }}
      >
        <Ticker move={true}>{(index) => <span>{props.text}</span>}</Ticker>
      </div>
    </Button>
  );
};

export default TickerButton;
