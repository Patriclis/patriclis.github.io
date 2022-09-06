import './FFXISetBuilder.scss'
import { useState, useEffect } from 'react';
import { FilterDropdown, SkillFilterDropdown } from './EquipmentList/FilterDropdown';
import EquipmentList from './EquipmentList/EquipmentList';
import GearsetDisplay from './GearsetDisplay/GearsetDisplay';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { addToGearset } from '../app/features/gearsetSlice';

const FFXISetBuilder = () => {
  const [job, setJob] = useState(1);
  const [race, setRace] = useState(1);
  const [gender, setGender] = useState(1);
  const [slot, setSlot] = useState(0);
  const [skill, setSkill] = useState(0);
  const [minLevel, setMinLevel] = useState<number>(1);
  const [maxLevel, setMaxLevel] = useState<number>(99);
  const [equipment, setEquipment] = useState<Item>({} as Item);
  const gearset = useAppSelector((state) => state.gearset.value);
  const jobs = useAppSelector((state) => state.jobs.value);
  const races = useAppSelector((state) => state.races.value);
  const genders = useAppSelector((state) => state.genders.value);
  const slots = useAppSelector((state) => state.slots.value);
  const skills = useAppSelector((state) => state.skills.value);
  const dispatch = useAppDispatch();

  const selectEquipment = (item: Item) => {
    setEquipment(item);
  }

  const changeSlot = (slotName: string) => {
    for (var i = 0; i < Object.keys(slots).length; i++) {
      if (slots[i].en === slotName) {
        setSlot(slots[i].id);
      }
    }
  }

  useEffect(() => {
    setEquipment({} as Item);
  }, [job, race, gender, slot]);

  return (
    <div className="ffxi-set-builder">
      <div className="sidebar">
        <FilterDropdown updateValue={setJob} value={job} data={jobs} />
        <FilterDropdown updateValue={setRace} value={race} data={races} />
        <FilterDropdown updateValue={setGender} value={gender} data={genders} />
        <FilterDropdown updateValue={setSlot} value={slot} data={slots} />
        <SkillFilterDropdown updateValue={setSkill} value={skill} skills={skills} slots={slots} slot={slot} skill={skill} />
        <div>
          <div><label>Level Range: </label> <input type="number" min="1" max="99" value={minLevel} onChange={e => setMinLevel(parseInt(e.target.value))} /> - <input type="number" min="1" max="99" value={maxLevel} onChange={e => setMaxLevel(parseInt(e.target.value))} /></div>
        </div>

        <EquipmentList job={job} race={race} gender={gender} slot={slot} skill={skill} minLevel={minLevel} maxLevel={maxLevel} jobs={jobs} races={races} genders={genders} slots={slots} skills={skills} selectEquipment={selectEquipment} />
      </div>

      <div className="gear-display">
        <GearsetDisplay changeSlot={changeSlot} slots={slots} />
        <div className="description">
          {equipment !== undefined ? equipment.description : ""}
        </div>
        <button className="add-to-set-btn" onClick={() => dispatch(addToGearset({ equipment: equipment, slotName: slots[slot].gsName as keyof Gearset }))}>Submit</button>
      </div>
    </div>
  );
}

export default FFXISetBuilder;