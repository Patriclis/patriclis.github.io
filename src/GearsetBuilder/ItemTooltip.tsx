import "./ItemTooltip.scss";

type props = {
    item: Item,
    visible: boolean
}

const ItemTooltip = (props: props) => {

    return (
        <div className="item-tooltip">
            {props.visible ?
                <div className="tooltip-content">
                    <div className="tooltip-line">
                        <h2>{props.item.name}</h2>
                    </div>
                    <div className="tooltip-line">

                    </div>

                    {props.item.item_level ? <div><label>Item Level: </label><label>{props.item.item_level}</label></div> : null}
                    {props.item.superior_level ? <div><label>Su: </label><label>{props.item.superior_level}</label></div> : null}

                    <div className="tooltip-line">
                        <div>{props.item.description}</div>
                    </div>

                    <div className="tooltip-line">
                        <label>LV </label><label>{props.item.level} {props.item.jobs.map((s: string, i: number, jobs: Array<string>) => {
                            if (i + 1 === jobs.length) {
                                return s;
                            } else {
                                return s + " ";
                            }
                        })}</label>
                    </div>



                </div>
                : <div />
            }
        </div>
    );
}

export default ItemTooltip;