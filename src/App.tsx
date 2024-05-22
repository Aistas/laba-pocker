import './App.css';
import Card from "./components/Cards/Card.tsx";

const App = () => {

  return (
      <div className="playingCards faceImages">
        <Card rank={"K"} suit={"diams"}/>
      </div>
  );
};

export default App;
