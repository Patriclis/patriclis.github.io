import { useState, useEffect } from 'react';
import EquipmentListItem from './EquipmentListItem';
import './EquipmentList.scss';

type props = {
    job: number,
    slot: number,
    race: number,
    gender: number,
    skill: number,
    minLevel: number,
    maxLevel: number,
    jobs: Array<Job>,
    slots: Array<Slot>,
    races: Array<Race>,
    genders: Array<Gender>,
    skills: Array<Skill>,
    selectEquipment: Function
};

const EquipmentList = (props: props) => {
    const data: Array<Item> = require('../../data/equipment/equipment.json');
    const [items, setItems] = useState(Array<Item>);

    const filterItems = () => {
        var _items = [];
        _items = data.filter(function (item) {
            if (item.jobs.includes(props.jobs[props.job].ens)
                && item.slots.includes(props.slots[props.slot].en)
                && item.races.includes(props.races[props.race].en)
                && item.genders.includes(props.genders[props.gender].en)
                && item.level >= props.minLevel && item.level <= props.maxLevel) {
                if (item.slots.some((r: string) => ["Main", "Sub", "Range", "Ammo"].includes(r))) {
                    if (item.skill === props.skills[props.skill].en) {
                        return true;
                    }
                } else {
                    return true;
                }
            }
            return false;
        });

        _items.sort((a, b) => b.level - a.level || b.item_level - a.item_level || a.name.localeCompare(b.name));
        setItems(_items);
    }


    useEffect(() => {
        filterItems();
    }, [props]);

    return (
        <div className="equipment-list-wrapper">
            <ul className="equipment-list">
                {
                    Object.values(items).map((v: Item) => {
                        return <EquipmentListItem key={v.id} item={v} selectEquipment={props.selectEquipment} />
                    })
                }
            </ul>
        </div>
    );


};

export default EquipmentList;