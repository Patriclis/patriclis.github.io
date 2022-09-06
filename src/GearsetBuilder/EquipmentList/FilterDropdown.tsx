import { useState, useEffect } from 'react';
import './FilterDropdown.scss';

type filterDropdownType = {
    id: number,
    en: string,
}

type props = {
    data: Array<filterDropdownType>,
    value: number,
    updateValue: Function
}

export const FilterDropdown = (props: props) => {

    const ChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.updateValue(parseInt(e.target.value));
    }

    return (
        <div>
            <select className="filter-dropdown" name="job" id="job" onChange={e => ChangeValue(e)} value={props.value}>
                {
                    Object.values(props.data).map((v: filterDropdownType) => {
                        return <option key={v.id} value={v.id}>{v.en}</option>
                    })
                }
            </select>
        </div>
    );
}

type skillFilterProps = {
    skills: Array<Skill>,
    slots: Array<Slot>,
    skill: number,
    value: number,
    updateValue: Function,
    slot: number,
}

export const SkillFilterDropdown = (props: skillFilterProps) => {
    const [skillList, setSkillList] = useState<Array<filterDropdownType>>(props.skills as Array<filterDropdownType>);

    useEffect(() => {
        var list: Array<Skill> = [];
        var skillSlotPairings = {
            "Main": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            "Sub": [0, 2, 3, 5, 9, 11, 30],
            "Range": [27, 25, 26, 41, 42, 45, 48],
            "Ammo": [0, 25, 26, 41, 42, 48]
        };
        if (["Main", "Sub", "Range", "Ammo"].includes(props.slots[props.slot].en)) {
            skillSlotPairings[props.slots[props.slot].en as keyof typeof skillSlotPairings].forEach((x: number) => {
                list.push(props.skills[x]);
            });
            if (!skillSlotPairings[props.slots[props.slot].en as keyof typeof skillSlotPairings].includes(props.skill)) {
                props.updateValue(list[0].id);
            }            
        }
        setSkillList(list);
    }, [props.slot]);

    return (
        <div>
            {
                skillList.length > 0 ?
                    <FilterDropdown updateValue={props.updateValue} value={props.value} data={skillList} />
                    : <div />
            }
        </div>
    );
}
export default FilterDropdown;

