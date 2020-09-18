import React from "react";
import newTire from "../../img/newTire.jpg";
import oldTire from "../../img/oldTire.jpg";
import "./VisualisationField.css"


export default function VisualisationField(props) {

    let radiusOld = `${props.oldTire.radius}" ${parseInt(props.oldTire.radius * 25.4)} mm`;
    let radiusNew = `${props.newTire.radius}" ${parseInt(props.newTire.radius * 25.4)} mm`;
    let heightOld = `${props.oldTire.height}% ${parseInt(props.oldTire.width * props.oldTire.height / 100)} mm`;
    let heightNew = `${props.newTire.height}% ${parseInt(props.newTire.width * props.newTire.height / 100)} mm`;


    return (
        <div className="visualizationTire">
            <div className="oldTireView">
                <p className="width">{props.oldTire.width} mm</p>
                <p className="height">{heightOld}</p>
                <p className="radius">{radiusOld}</p>
                <img src={oldTire} alt="old Tire"></img>
            </div>
            <div className="newTireView">
                <p className="width">{props.newTire.width} mm</p>
                <p className="height">{heightNew}</p>
                <p className="radius">{radiusNew}</p>
                <img src={newTire} alt="new Tire"></img>
            </div>
        </div>
    )
}