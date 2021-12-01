/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';
import {Button, CircularProgress, Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Nav, {Logo} from '../components/Nav';
import {Link, RouteComponentProps} from '@reach/router';

import * as anchor from '@project-serum/anchor';

import {LAMPORTS_PER_SOL} from '@solana/web3.js';

import {useWallet} from '@solana/wallet-adapter-react';
import {WalletDialogButton, WalletDisconnectButton} from '@solana/wallet-adapter-material-ui';

//images
import ss1 from '../assets/mint/ss1.png';
import ss2 from '../assets/mint/ss2.png';
import ss3 from '../assets/mint/ss3.png';
import types_of_wallets from '../assets/mint/types_of_wallets.png';

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  getCandyMachineStateViaPrivateKey,
  mintOneToken,
  shortenAddress,
} from '../lib/candy-machine';

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const MintContent = (props: {homeProps: HomeProps, routerProps: RouteComponentProps}) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [totalItemsRemaining, setTotalItemsRemaining] = useState<number>();
  const [solPrice, setSolPrice] = useState<number>();
  const [totalItems, setTotalItems] = useState<number>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.homeProps.startDate));

  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.homeProps.config,
          wallet.publicKey,
          props.homeProps.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.homeProps.txTimeout,
          props.homeProps.connection,
          'singleGossip',
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      if (wallet?.publicKey) {
        const balance = await props.homeProps.connection.getBalance(wallet?.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await props.homeProps.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.homeProps.connection]);

  useEffect(() => {
    (async () => {
      if (
        !wallet ||
        !wallet.publicKey ||
        !wallet.signAllTransactions ||
        !wallet.signTransaction
      ) {
        return;
      }

      const anchorWallet = {
        publicKey: wallet.publicKey,
        signAllTransactions: wallet.signAllTransactions,
        signTransaction: wallet.signTransaction,
      } as anchor.Wallet;

      const {
        candyMachine,
        goLiveDate,
        itemsRemaining
      } =
        await getCandyMachineState(
          anchorWallet,
          props.homeProps.candyMachineId,
          props.homeProps.connection
        );

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, props.homeProps.candyMachineId, props.homeProps.connection]);

  //TODO: create useEffect to liveDate, mints remaining & mint price info without connecting to a wallet address
  useEffect(() => {
    (async () => {
      const info = await getCandyMachineStateViaPrivateKey(
        props.homeProps.candyMachineId,
        props.homeProps.connection
      );
      setTotalItemsRemaining(info.itemsRemaining);
      setTotalItems(info.itemsAvailable);
      setSolPrice(info.price);
      // console.log('info', info);
    })();
  }, [props.homeProps.candyMachineId, props.homeProps.connection]);

  console.log('isActive', isActive);
  return (
    <div className="min-h-screen pb-30" style={{background: '#101010'}}>
      <Nav/>
      <main>
        <header
          className="text-white bg-black absolute top-0 inset-x-0 h-16 z-10 flex justify-between items-center px-16">
          <div className="flex items-center space-x-10">
            <div>
              <Link to="/">
                <Logo/>
              </Link>
            </div>
          </div>
          <div className="flex space-x-7 text-2xl">
            <div className="flex flex-col justify-center">
              {wallet.connected && (
                <p className="text-sm">
                  Address: {shortenAddress(wallet.publicKey?.toBase58() || '')}
                </p>
              )}

              {wallet.connected && (
                <p className="text-sm">
                  Balance: {(balance || 0).toLocaleString()} SOL
                </p>
              )}
            </div>
            <div>
              {!wallet.connected ? (
                <ConnectButton
                  style={{
                    backgroundColor: '#101010',
                    color: 'white',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: '4px solid white',
                  }}
                >
                  Connect Wallet
                </ConnectButton>
              ) : (
                <WalletDisconnectButton
                  startIcon={undefined}
                  style={{
                    backgroundColor: '#101010',
                    color: 'white',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: '4px solid white',
                  }}
                >
                  Disconnect
                </WalletDisconnectButton>
              )}
            </div>
          </div>
        </header>
        <div>
          <div
            className="h-screen bg-center bg-cover grid items-center relative "
            id="landing-section-2"
          >
            <div>
              <div className="text-center">
                <h1 className="text-primary-light text-5xl font-black italic glow">
                  Act-1 Dropchichi MINT
                </h1>
              </div>
              <div className="flex flex-row justify-evenly">
                <div>
                  <p className="font-orb text-1xl text-white mt-10 space-y-2 uppercase">
                    {isActive ? 'MINTING STARTS' : 'MINTING STARTS IN'}
                  </p>
                  <p className="font-orb text-3xl text-white mt-1 space-y-2 uppercase bold">
                    <Countdown
                      date={startDate}
                      onMount={({completed}) => completed && setIsActive(true)}
                      onComplete={() => setIsActive(true)}
                      renderer={renderCounter}
                    />
                  </p>
                  {!isActive && (
                    <button>
                      {/* TODO: insert google calender invite here(+ Add reminder) */}
                    </button>
                  )}
                </div>
                <div>
                  <p className="font-orb text-1xl text-white mt-10 space-y-2 uppercase">
                    DROPCHICHI AVAILABLE
                  </p>
                  <p className="font-orb text-3xl text-white mt-1 space-y-2 uppercase bold">
                    {totalItemsRemaining} / {totalItems}
                  </p>
                </div>
                <div>
                  <p className="font-orb text-1xl text-white mt-10 space-y-2 uppercase">
                    MINT PRICE
                  </p>
                  <p className="font-orb text-3xl text-white mt-1 space-y-2 uppercase bold">
                    {solPrice} SOL
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <MintContainer>
                  {!wallet.connected ? (
                    <ConnectButton
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#101010',
                        color: 'white',
                        fontSize: '16px',
                        padding: '12px 54px',
                        borderRadius: '6px',
                        border: '4px solid white',
                      }}
                    >
                      Connect Wallet
                    </ConnectButton>
                  ) : (
                    <MintButton
                      style={{
                        display: 'inline-block',
                        backgroundColor: '#101010',
                        color: 'white',
                        fontSize: '16px',
                        padding: '12px 54px',
                        borderRadius: '6px',
                        border: '4px solid white',
                      }}
                      disabled={isSoldOut || isMinting || !isActive}
                      onClick={onMint}
                      variant="contained"
                    >
                      {isSoldOut ? (
                        'SOLD OUT'
                      ) : isActive ? (
                        isMinting ? (
                          <CircularProgress/>
                        ) : (
                          'MINT DROPCHICHI'
                        )
                      ) : (
                        'MINT DROPCHICHI (SOON)'
                      )}
                    </MintButton>
                  )}
                </MintContainer>
              </div>
            </div>
          </div>
        </div>
        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({
            ...alertState,
            open: false
          })}
        >
          <Alert
            onClose={() => setAlertState({
              ...alertState,
              open: false
            })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </main>
    </div>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error' | undefined;
}

const renderCounter = ({
                         days,
                         hours,
                         minutes,
                         seconds,
                         completed
                       }: any) => {
  return completed ? (
    'Now!'
  ) : (
    <CounterText>
      <p>
        {hours} : {minutes} : {seconds}
      </p>
    </CounterText>
  );
};

export default MintContent;
