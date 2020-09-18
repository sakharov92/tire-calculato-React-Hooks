import React from "react";
import clearence from "../../img/clearence.jpg";
import speedOmetr from "../../img/speedOmetr.png";
import "./ResultField.css";



export default function ResultField(props) {





    return (
        <div className="resultField">
            <div className="clearance">
                <p>After changing wheels, clearens become
                {(props.circleData.cliarenceDifferents >= 0) ? " +" + props.circleData.cliarenceDifferents : props.circleData.cliarenceDifferents}
                cm</p>
                <div className="imageBlock">
                    <img src={clearence} alt="clearence" />
                </div>
            </div>
            <div className="speedOmetr">
                <p>After changing wheels, real speed will be
                {(props.circleData.speedDifferents >= 0) ? " +" + props.circleData.speedDifferents : props.circleData.speedDifferents}
                km/h than speedometer showing</p>
                <div className="imageBlock">
                    <img src={speedOmetr} alt="speedometr" />
                </div>
            </div>
        </div >
    )
}
