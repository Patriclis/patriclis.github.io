type Flower = {
  name: string,
  set: ArtifactSet,
  mainstat: Stat.HP,
  substatOne: SubStat,
  substatTwo: SubStat,
  substatThree: SubStat,
  substatFour: SubStat,
}

type Feather = {
  name: string,
  set: ArtifactSet,
  mainstat: Stat.Attack,
  substatOne: SubStat,
  substatTwo: SubStat,
  substatThree: SubStat,
  substatFour: SubStat,
}

type Sands = {
  name: string,
  set: ArtifactSet,
  mainstat: SandsStat,
  substatOne: SubStat,
  substatTwo: SubStat,
  substatThree: SubStat,
  substatFour: SubStat,
}

type Goblet = {
  name: string,
  set: ArtifactSet,
  mainstat: GobletStat,
  substatOne: SubStat,
  substatTwo: SubStat,
  substatThree: SubStat,
  substatFour: SubStat,
}

type Crown = {
  name: string,
  set: ArtifactSet,
  mainstat: CrownStat,
  substatOne: SubStat,
  substatTwo: SubStat,
  substatThree: SubStat,
  substatFour: SubStat,
}

type ArtifactSet = {
  name: string,
  domain: Domain,
  twoPiece: string,
  fourPiece: string
}

type Domain = {
  name: string
}

type Build = {
  name: string,
  character: Character,
  SetOne: ArtifactSet,
  SetTwo: ArtifactSet,
  Substats: Array<SubStat>,
  SandsStat: SandsStat,
  GobletStat: GobletStat,
  CrownStat: CrownStat
}

type Character = {
  name: string
}
