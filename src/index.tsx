import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";

import { Router } from "@reach/router";
import reportWebVitals from "./reportWebVitals";
import Roadmap from "./newstaff/pages/Roadmap";
import FAQ from "./pages/FAQ";
import Mint from './pages/Mint';
import Landing from './pages/Landing';
import Collection from './newstaff/pages/Collection';
import GalleryPage from './newstaff/pages/GalleryPage';


ReactDOM.render(
  <React.StrictMode>
    <div className="font-inter">
      <Router primary={false}>
        <Landing path="/" />
        <Roadmap path="roadmap" />
        <Mint path="mint" />
        <Collection path="collection"/>
        <GalleryPage path={"gallery"}/>
        <FAQ path="faq" />
      </Router>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
