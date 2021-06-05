import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
function SushiContainer({ sushiList, moneyLeft, setMoney, addEmptyPlate }) {
  const [sushiStartingIndex, setSushiStartingIndex] = useState(1);
  const currentDisplayedSushi = sushiList.filter((sushi) => {
    if (sushi.id >= sushiStartingIndex && sushi.id <= sushiStartingIndex + 3) {
      return true;
    }
    return false;
  });
  const renderSushi = currentDisplayedSushi.map((sushi) => (
    <Sushi
      key={sushi.id}
      sushiObj={sushi}
      moneyLeft={moneyLeft}
      setMoney={setMoney}
      addEmptyPlate={addEmptyPlate}
    />
  ));
  function handleMoreSushi() {
    setSushiStartingIndex((prev) => prev + 4);
  }
  return (
    <div className="belt">
      {renderSushi}
      <MoreButton moreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
