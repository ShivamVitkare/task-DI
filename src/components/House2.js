import React, { useState } from "react";

function House() {
  const [btnVisible, setBtnVisible] = useState(false);
  const [inputVal, setInputVal] = useState(10);
  const [level, setLevel] = useState(0);
  const [cost, setCost] = useState(5);
  const [rent, setRent] = useState(2);
  



  function handleAdd() {
    if (inputVal >= cost) {
      setLevel((prev) => prev + 1);
      setCost((prev) => prev + 0.25);
      setBtnVisible(true);
      setInputVal(inputVal - cost);
    } else {
      alert("low cost");
    }
  }

  function handleRent() {
    setInputVal((prev) => prev + rent);
  }

  function handleManage() {
    if (inputVal >= rent * 20) {
      const interval = setInterval(() => {
        setInputVal((prev) => prev + rent);
      }, 3000);

      return () => clearInterval(interval);
    } 
  }

  return (
    <div>
      <input
        style={{ marginBottom: "10px" }}
        type="number"
        readOnly
        value={inputVal}
        placeholder="Input value"
      />
      <button>Save</button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid green",
          width: "60%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div>
          <img
            style={{ width: "70px", height: "70px" }}
            src="https://react2eb4af6.onrender.com/imgs/00.png"
            alt="Studio"
          />
          <p>Studio Apartment</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p>Cost: {cost.toFixed(2)}, </p>
          <p>Level: {level}, </p>
          <p>Rent: {rent}, </p>
          <p>Time: 3</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <button onClick={handleAdd}>Buy</button>
          {btnVisible && (
            <>
              <button onClick={handleRent}> Rent</button>
              <button onClick={handleManage}> Management</button>
            </>
          )}
        </div>
      </div>

      <br />
   
    </div>
  );
}

export default House;
