type Item = {
  id: number
  name: string,
  group: string,
  cl: number,
  slot: Slot,
  price: number,
  weight: number,
  description: string,
  craftingRequirements: string,
  source: SourceBook,
}

type WondrousItem = Item & {
  base: Item,
  auraStrength: AuraStrength,
  auraSchool: Array<MagicSchool>,
  destruction: string,
  artifact: number,
}

type IntelligentItem = WondrousItem & {
  alignment: Alignment,
  intelligence: number,
  wisdom: number,
  charisma: number,
  ego: number,
  communication: string,
  senses: string,
  powers: string,
}

type Senses = {
  id: number
  name: string
}

type Alignment = {
  id: number
  name: string
}

type Aura = {
  id: number
  strength: string,
}

type MagicSchool = {
  id: number
  name: string
}

type Slot = {
  id: number
  name: string
}

type ItemGroup = {
  id: number
  name: string
}

type SourceBook = {
  id: number
  name: string,
  author: string,
  thirdParty: boolean
}