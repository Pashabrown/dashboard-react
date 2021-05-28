import React from "react";
import "./styles.css";

//IMPORTING MY COMPONENTS
import Reviews from "./components/Reviews"
import Average from "./components/AverageRating"
import Web from "./components/WebsiteVisitors"
import Sentiment from "./components/SentimentAnalysis"
import DashBoardMenu from "./components/DashBoardMenu";

export default function App() {
  return (
    <>
  <div className="App">
    <DashBoardMenu />
    <Reviews />
    <Average />
    <Sentiment />
    <Web />
    

  </div>
  </>
  );
}


