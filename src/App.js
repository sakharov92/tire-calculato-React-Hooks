import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from "./Components/InputField/InputField";
import VisualisationField from "./Components/VisualisationField/VisualisationField";
import ResultField from "./Components/ResultField/ResultField";

export default function App() {
  const [oldTire, setOldTire] = useState({
    width: 175,
    height: 75,
    radius: 13
  })
  const [newTire, setNewTire] = useState({
    width: 180,
    height: 70,
    radius: 14
  })
  const [circleData, setCircleData] = useState({
    cliarenceDifferents: 0,
    speedDifferents: 0
  })
  useEffect(() => {
    let oldTireFullRadius = ((oldTire.radius * 25.4 / 2) + (oldTire.width / 100) * oldTire.height);
    let newTireFullRadius = ((newTire.radius * 25.4 / 2) + (newTire.width / 100) * newTire.height);

    let lengthOfOldTireCircle = 2 * Math.PI * oldTireFullRadius;
    let lengthOfNewTireCircle = 2 * Math.PI * newTireFullRadius;

    let cliarenceDifferents = parseFloat(((newTireFullRadius - oldTireFullRadius) / 10).toFixed(1));
    let speedDifferents = parseFloat(((lengthOfNewTireCircle / lengthOfOldTireCircle) * 100 - 100).toFixed(1));

    setCircleData({
      cliarenceDifferents,
      speedDifferents
    })
  }, [oldTire, newTire])


  function setNewTireSize(e) {
    let parentBLock = e.target.parentElement.parentElement;
    let target = e.target;
    if (parentBLock.className === "oldTire") {
      let copyObj = { ...oldTire }
      copyObj[target.className] = parseInt(target.value)
      setOldTire(copyObj)
    } else {
      let copyObj = { ...newTire }
      copyObj[target.className] = parseInt(target.value)
      setNewTire(copyObj)
    }
  }


  return (
    <div className="App" >
      <div className="title"><h1>Tire Calculator</h1></div>
      <section className="main">
        <InputField oldTire={oldTire} newTire={newTire} setNewTireSize={setNewTireSize} />
        <VisualisationField oldTire={oldTire} newTire={newTire} />
      </section>
      <ResultField circleData={circleData} />
    </div>
  );
}
