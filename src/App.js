import React from "react"
import "./styles.css";
import AverageRating from "./components/AverageRating"
import DashBoardMenu from "./components/DashBoardMenu"
import Review from "./components/Review"
import SentimentAnalysis from "./components/SentimentAnalysis"
import WebsiteVisitors from "./components/WebsiteVisitors"
function App() {
  return (
    <div className="App">
      <DashBoardMenu styles="d" />
      <Review />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
