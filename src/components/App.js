import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([]);
  const [moneyLeft, setMoneyLeft] = useState(100);
  const [totalEmptyPlates, setTotalEmptyPlates] = useState([]);
  useEffect(() => {
    fetch(`${API}`)
      .then((response) => response.json())
      .then((data) => setSushi(data));
  }, []);
  function addEmptyPlate() {
    setTotalEmptyPlates([...totalEmptyPlates, "New Plate"]);
  }
  return (
    <div className="app">
      <SushiContainer
        sushiList={sushi}
        moneyLeft={moneyLeft}
        setMoney={setMoneyLeft}
        addEmptyPlate={addEmptyPlate}
      />
      <Table plates={totalEmptyPlates} money={moneyLeft} />
    </div>
  );
}

export default App;
