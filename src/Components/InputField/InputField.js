import React from "react";
import "./InputField.css"

export default function InputField(props) {


    function fillSelect(from, to, step) {
        let arr = [];
        for (let i = from; i <= to; i += step) {
            arr.push(<option key={i}>{i}</option>)
        }
        return arr
    }

    return (
        <div className="inputBlock">
            <div className="oldTire">
                <p className="tireTitle">Old tire size</p>
                <div className="selectWrapper">
                    <select className="width" onChange={props.setNewTireSize} value={props.oldTire.width}>
                        {fillSelect(50, 250, 5)}
                    </select>
                /
                <select className="height" onChange={props.setNewTireSize} value={props.oldTire.height}>
                        {fillSelect(30, 120, 5)}
                    </select>
                /{" "}R
                <select className="radius" onChange={props.setNewTireSize} value={props.oldTire.radius}>
                        {fillSelect(8, 27, 1)}
                    </select>
                </div>
            </div>
            <div className="newTire">
                <div className="selectWrapper">
                    <p className="tireTitle">New tire size</p>
                    <select className="width" onChange={props.setNewTireSize} value={props.newTire.width}>
                        {fillSelect(50, 250, 5)}
                    </select>
                /
                <select className="height" onChange={props.setNewTireSize} value={props.newTire.height}>
                        {fillSelect(30, 120, 5)}
                    </select>
                /{" "}R
                <select className="radius" onChange={props.setNewTireSize} value={props.newTire.radius}>
                        {fillSelect(8, 27, 1)}
                    </select>
                </div>
            </div>
        </div>

    )
}