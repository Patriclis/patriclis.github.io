type Job = {
  ja: string,
  ens: string,
  id: number,
  jas: string,
  en: string,
}

type Gender = {
  id: number,
  en: string,
}

type Race = {
  id: number,
  ja: string,
  en: string,
}

type Slot = {
  id: number,
  en: string,
  gsName: string
}

type Skill = {
  id: number,
  en: string
}

type Item = {
  name: string,
  id: number,
  level: number,
  item_level: number,
  superior_level: number,
  slots: Array,
  jobs: Array,
  genders: Array,
  races: Array,
  description: string,
  skill: string,
  stats: Array
}

type Gearset = {
  main: Item | undefined,
  sub: Item | undefined,
  range: Item | undefined,
  ammo: Item | undefined,
  head: Item | undefined,
  neck: Item | undefined,
  leftEar: Item | undefined,
  rightEar: Item | undefined,
  body: Item | undefined,
  hands: Item | undefined,
  leftRing: Item | undefined,
  rightRing: Item | undefined,
  back: Item | undefined,
  waist: Item | undefined,
  legs: Item | undefined,
  feet: Item | undefined
}