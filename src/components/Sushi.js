import React, { useState } from "react";

function Sushi({
  sushiObj: { id, name, img_url, price },
  moneyLeft,
  setMoney,
  addEmptyPlate,
}) {
  const [sushiAte, setSushiAte] = useState(false);
  function handleSushiAte() {
    if (moneyLeft - price >= 0) {
      setSushiAte(true);
      addEmptyPlate();
      setMoney(moneyLeft - price);
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiAte}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiAte ? null : (
          <img src={img_url} alt={`${name} Sushi`} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
