import { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import "./GearsetDisplay.scss";
import GearsetDisplayItem from './GearsetDisplayItem';

type props = {
    changeSlot: Function,
    slots: Array<Slot>
}

type statSummary = {
    [key: string]: number;
}

const GearsetDisplay = (props: props) => {
    var [stats, setStats] = useState<statSummary>({});
    var gearset = useAppSelector((state) => state.gearset.value);

    useEffect(() => {
        var _stats: statSummary = {};
        for (const [key, value] of Object.entries(gearset)) {
            if (value != undefined) {
                for (const [k, v] of Object.entries(value.stats as Item)) {
                    var num = parseInt(v.replace(/\d+% ?/g, ""));
                    if (_stats.hasOwnProperty(k)) {
                        _stats[k] += num;
                    } else {
                        _stats[k] = num;
                    }
                }
            }
        }
        setStats(_stats);
    }, [gearset])

    return (
        <div className="gearset-wrapper">
            <div className="stat-summary">
                <table className="stat-table">
                    <tbody>
                        {
                            Object.entries(stats).map((k) => {
                                return (<tr key={k[0]}><td>{k[0]}</td><td>{k[1]}</td></tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
            <table className="gearset-table">
                <tbody>
                    <tr>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.main} slotName="Main"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.sub} slotName="Sub"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.range} slotName="Range"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.ammo} slotName="Ammo"></GearsetDisplayItem>
                    </tr>
                    <tr>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.head} slotName="Head"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.neck} slotName="Neck"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.leftEar} slotName="Left Ear"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.rightEar} slotName="Right Ear"></GearsetDisplayItem>
                    </tr>
                    <tr>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.body} slotName="Body"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.hands} slotName="Hands"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.leftRing} slotName="Left Ring"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.rightRing} slotName="Right Ring"></GearsetDisplayItem>
                    </tr>
                    <tr>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.back} slotName="Back"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.waist} slotName="Waist"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.legs} slotName="Legs"></GearsetDisplayItem>
                        <GearsetDisplayItem changeSlot={props.changeSlot} item={gearset.feet} slotName="Feet"></GearsetDisplayItem>
                    </tr>
                </tbody>
            </table>
        </div>


    );
}

export default GearsetDisplay;