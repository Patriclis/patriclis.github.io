import "./GearsetDisplayItem.scss";
import { useState } from 'react';
import ItemTooltip from "../ItemTooltip";

type props = {
    item: Item | undefined,
    slotName: string,
    changeSlot: Function
}

const GearsetDisplayItem = (props: props) => {
    const [tooltipVisible, setTooltipVisible] = useState(false);
    return (

        <td onClick={() => props.changeSlot(props.slotName)} className="gearset-display-item" >
            <div onMouseOver={() => { setTooltipVisible(true) }} onMouseOut={() => { setTooltipVisible(false) }}>
                {props.item === undefined ? <div className="slot-placeholder">{props.slotName}</div> : <img className="item-icon" src={"https://static.ffxiah.com/images/icon/" + props.item.id + ".png"} />}
            </div>
            {props.item === undefined ? "" : <ItemTooltip item={props.item} visible={tooltipVisible} />}
        </td>
    );
}

export default GearsetDisplayItem;