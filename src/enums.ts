
export enum Slot {
  Flower = "Flower",
  Feather = "Feather",
  Sands = "Sands",
  Goblet = "Goblet",
  Crown = "Crown"
}

export enum Stat {
  AttackPercent = "ATK (%)",
  DefensePercent = "DEF (%)",
  HPPercent = "HP (%)",
  Attack = "ATK",
  Defense = "DEF",
  HP = "HP",
  ElementalMastery = "Elemental Mastery",
  EnergyRecharge = "Energy Recharge (%)",
  Anemo = "Anemo Damage Bonus (%)",
  Geo = "Geo Damage Bonus (%)",
  Electro = "Electro Damage Bonus (%)",
  Dendro = "Dendro Damage Bonus (%)",
  Hydro = "Hydro Damage Bonus (%)",
  Pyro = "Pyro Damage Bonus (%)",
  Cryo = "Cryo Damage Bonus (%)",
  Physical = "Physical Damage Bonus (%)",
  CritRate = "Crit Rate (%)",
  CritDamage = "Crit DMG (%)",
  HealingBonus = "Healing Bonus (%)"
}

export enum SandsStat {
  AttackPercent = Stat.AttackPercent,
  DefensePercent = Stat.DefensePercent,
  HPPercent = Stat.HPPercent,
  ElementalMastery = Stat.ElementalMastery,
  EnergyRecharge = Stat.EnergyRecharge,
}

export enum GobletStat {
  AttackPercent = Stat.AttackPercent,
  DefensePercent = Stat.DefensePercent,
  HPPercent = Stat.HPPercent,
  ElementalMastery = Stat.ElementalMastery,
  Anemo = Stat.Anemo,
  Geo = Stat.Geo,
  Electro = Stat.Electro,
  Dendro = Stat.Dendro,
  Hydro = Stat.Hydro,
  Pyro = Stat.Pyro,
  Cryo = Stat.Cryo,
  Physical = Stat.Physical,
}

export enum CrownStat {
  AttackPercent = Stat.AttackPercent,
  DefensePercent = Stat.DefensePercent,
  HPPercent = Stat.HPPercent,
  ElementalMastery = Stat.ElementalMastery,
  CritRate = Stat.CritRate,
  CritDamage = Stat.CritDamage,
  HealingBonus = Stat.HealingBonus
}

export enum SubStat {
  AttackPercent = Stat.AttackPercent,
  DefensePercent = Stat.DefensePercent,
  HPPercent = Stat.HPPercent,
  Attack = Stat.AttackPercent,
  Defense = Stat.Defense,
  HP = Stat.HP,
  ElementalMastery = Stat.ElementalMastery,
  EnergyRecharge = Stat.EnergyRecharge,
  CritRate = Stat.CritRate,
  CritDamage = Stat.CritDamage,
}