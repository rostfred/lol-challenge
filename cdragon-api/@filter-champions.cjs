"use strict";
const fs = require("fs");

const rawData = fs.readFileSync("./champions.json", "utf-8");
const data = JSON.parse(rawData);

const desiredFields = [
    "id",
    "name",
    "icon",
    "positions",
    "resource",
    "attackType",
    "releaseDate"
];

const champions = Object.values(data).map(champ => {
    const filtered = {};

    desiredFields.forEach(f => {
        if (champ[f] !== undefined) filtered[f] = champ[f];
    });

    if (champ.abilities) {
        filtered.abilities = [];
        ["P", "Q", "W", "E", "R"].forEach(key => {
            if (champ.abilities[key]) {
                champ.abilities[key].forEach(ability => {
                    filtered.abilities.push({
                        skill: key,
                        name: ability.name,
                        icon: ability.icon
                    });
                });
            }
        });
    }

    return filtered;
});

champions.sort((a, b) => a.name.localeCompare(b.name));

champions.forEach((champ, index) => {
    champ.id = index + 1;
});

const output = { champions };

fs.writeFileSync("champions_filtered.json", JSON.stringify(output, null, 2));
console.log("Filtered champions JSON created with champions array wrapped!");
