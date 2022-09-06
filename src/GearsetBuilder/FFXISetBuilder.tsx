import './FFXISetBuilder.scss'
import { useState, useEffect } from 'react';
import { FilterDropdown, SkillFilterDropdown } from './EquipmentList/FilterDropdown';
import EquipmentList from './EquipmentList/EquipmentList';
import GearsetDisplay from './GearsetDisplay/GearsetDisplay';

const jobs: Array<Job> = require('../data/jobs.json')[0];
const races: Array<Race> = require('../data/races.json')[0];
const genders: Array<Gender> = require('../data/genders.json')[0];
const slots: Array<Slot> = require('../data/slots.json')[0];
const skills: Array<Skill> = require('../data/skills.json')[0];

const FFXISetBuilder = () => {
  const [job, setJob] = useState(1);
  const [race, setRace] = useState(1);
  const [gender, setGender] = useState(1);
  const [slot, setSlot] = useState(0);
  const [skill, setSkill] = useState(0);
  const [minLevel, setMinLevel] = useState<number>(1);
  const [maxLevel, setMaxLevel] = useState<number>(99);
  const [equipment, setEquipment] = useState<Item | undefined>(undefined);
  const [gearset, setGearset] = useState<Gearset>({} as Gearset);

  const selectEquipment = (item: Item) => {
    setEquipment(item);
  }

  const addToSet = () => {
    var set = { ...gearset };
    set[slots[slot].gsName as keyof Gearset] = equipment;
    setGearset(set);
  }

  const changeSlot = (slotName: string) => {
    for (var i = 0; i < Object.keys(slots).length; i++) {
      if (slots[i].en === slotName) {
        setSlot(slots[i].id);
      }
    }
  }

  useEffect(() => {
    setEquipment(undefined);
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
        <GearsetDisplay gearset={gearset} changeSlot={changeSlot} slots={slots}/>
        <div className="description">
          {equipment !== undefined ? equipment.description : ""}
        </div>
        <button className="add-to-set-btn" onClick={addToSet}>Submit</button>
      </div>
    </div>
  );
}

export default FFXISetBuilder;