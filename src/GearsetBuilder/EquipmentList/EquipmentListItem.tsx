import './EquipmentListItem.scss';

type props = {
    item: Item,
    selectEquipment: Function
}

const EquipmentListItem = (props: props) => {
    return (
        <li className="equipment-list-item" key={props.item.id} value={props.item.id} onClick={(e) => { props.selectEquipment(props.item) }}>
            <div className="display-wrapper">
                <p>{props.item.name}</p>
                <p className="subtext level-line">Lv {props.item.level}{props.item.item_level ? " / ILvl " + props.item.item_level : ""}{props.item.superior_level ? " / Su" + props.item.superior_level : ""}</p>
            </div>
        </li>
    );

}

export default EquipmentListItem;