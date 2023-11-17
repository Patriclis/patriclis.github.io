import React from "react";
import { useAppSelector } from "../data/hooks";
import {Stat, SubStat, GobletStat, SandsStat, CrownStat} from "../enums";

export function TemporaryFrontEnd() {
    const sets = useAppSelector((state) => state.artifactSets.value);
    const builds = useAppSelector((state) => state.builds.value);
    const characters = useAppSelector((state) => state.characters.value);
    const domains = useAppSelector((state) => state.domains.value);

    var a : Feather = {
        name: "Gladiator's Feather",
        set: sets[0],
        mainstat: Stat.Attack,
        substatOne: SubStat.AttackPercent,
        substatTwo: SubStat.CritDamage,
        substatThree: SubStat.Defense,
        substatFour: SubStat.HP
    }

    builds.map((x) => {
        var check : Array<SubStat> = [a.substatOne, a.substatTwo, a.substatThree, a.substatFour];
        var value : number = 0;
        for (var i = 0; i < check.length; i++) {
            if (x.Substats.includes(check[i])) {
                value++;
            }
        }
    });

    return (
        <div>
            {}
        </div>);

}