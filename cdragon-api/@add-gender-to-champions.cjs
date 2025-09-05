"use strict";
const fs = require("fs");

const CHAMPION_GENDERS = {
  "Aatrox": "male",
  "Akshan": "male",
  "Alistar": "male",
  "Amumu": "male",
  "Aphelios": "male",
  "Azir": "male",
  "Bard": "male",
  "Blitzcrank": "male",
  "Brand": "male",
  "Braum": "male",
  "Cho'Gath": "male",
  "Corki": "male",
  "Darius": "male",
  "Dr. Mundo": "male",
  "Draven": "male",
  "Ekko": "male",
  "Ezreal": "male",
  "Fizz": "male",
  "Galio": "male",
  "Gangplank": "male",
  "Garen": "male",
  "Gnar": "male",
  "Gragas": "male",
  "Graves": "male",
  "Hecarim": "male",
  "Heimerdinger": "male",
  "Hwei": "male",
  "Ivern": "male",
  "Jarvan IV": "male",
  "Jax": "male",
  "Jayce": "male",
  "Jhin": "male",
  "K'Sante": "male",
  "Karthus": "male",
  "Kassadin": "male",
  "Kayn": "male",
  "Kennen": "male",
  "Kha'Zix": "male",
  "Kled": "male",
  "Kog'Maw": "male",
  "Lee Sin": "male",
  "Lucian": "male",
  "Malphite": "male",
  "Malzahar": "male",
  "Maokai": "male",
  "Master Yi": "male",
  "Milio": "male",
  "Mordekaiser": "male",
  "Nasus": "male",
  "Nautilus": "male",
  "Nocturne": "male",
  "Nunu & Willump": "male",
  "Olaf": "male",
  "Ornn": "male",
  "Pantheon": "male",
  "Pyke": "male",
  "Rakan": "male",
  "Rammus": "male",
  "Renekton": "male",
  "Rengar": "male",
  "Rumble": "male",
  "Ryze": "male",
  "Sett": "male",
  "Shaco": "male",
  "Shen": "male",
  "Singed": "male",
  "Sion": "male",
  "Skarner": "male",
  "Smolder": "male",
  "Swain": "male",
  "Sylas": "male",
  "Tahm Kench": "male",
  "Talon": "male",
  "Taric": "male",
  "Teemo": "male",
  "Thresh": "male",
  "Trundle": "male",
  "Tryndamere": "male",
  "Twisted Fate": "male",
  "Twitch": "male",
  "Udyr": "male",
  "Urgot": "male",
  "Varus": "male",
  "Veigar": "male",
  "Vel'Koz": "male",
  "Viego": "male",
  "Viktor": "male",
  "Vladimir": "male",
  "Volibear": "male",
  "Warwick": "male",
  "Wukong": "male",
  "Xerath": "male",
  "Xin Zhao": "male",
  "Yasuo": "male",
  "Yone": "male",
  "Yorick": "male",
  "Zac": "male",
  "Zed": "male",
  "Ziggs": "male",
  "Zilean": "male",

  "Ahri": "female",
  "Akali": "female",
  "Ambessa": "female",
  "Anivia": "female",
  "Annie": "female",
  "Ashe": "female",
  "Aurora": "female",
  "Bel'Veth": "female",
  "Briar": "female",
  "Caitlyn": "female",
  "Camille": "female",
  "Cassiopeia": "female",
  "Diana": "female",
  "Elise": "female",
  "Evelynn": "female",
  "Fiora": "female",
  "Gwen": "female",
  "Illaoi": "female",
  "Irelia": "female",
  "Janna": "female",
  "Jinx": "female",
  "Kai'Sa": "female",
  "Kalista": "female",
  "Karma": "female",
  "Katarina": "female",
  "Kayle": "female",
  "LeBlanc": "female",
  "Leona": "female",
  "Lillia": "female",
  "Lissandra": "female",
  "Lulu": "female",
  "Lux": "female",
  "Mel": "female",
  "Miss Fortune": "female",
  "Morgana": "female",
  "Naafiri": "female",
  "Nami": "female",
  "Neeko": "female",
  "Nidalee": "female",
  "Nilah": "female",
  "Orianna": "female",
  "Poppy": "female",
  "Qiyana": "female",
  "Quinn": "female",
  "Rek'Sai": "female",
  "Rell": "female",
  "Renata Glasc": "female",
  "Riven": "female",
  "Samira": "female",
  "Sejuani": "female",
  "Senna": "female",
  "Seraphine": "female",
  "Shyvana": "female",
  "Sivir": "female",
  "Sona": "female",
  "Soraka": "female",
  "Syndra": "female",
  "Taliyah": "female",
  "Tristana": "female",
  "Vayne": "female",
  "Vex": "female",
  "Vi": "female",
  "Xayah": "female",
  "Yunara": "female",
  "Yuumi": "female",
  "Zeri": "female",
  "Zoe": "female",
  "Zyra": "female",

  "Aurelion Sol": "other",
  "Fiddlesticks": "other",
  "Kindred": "other"
};

const rawData = fs.readFileSync("./champions_filtered.json", "utf-8");
const data = JSON.parse(rawData);

let updatedCount = 0;
const missingChampions = [];

const championsWithGender = data.champions.map(champion => {
  const championName = champion.name;

  const gender = CHAMPION_GENDERS[championName];

  if (gender) {
    console.log(`✓ Added gender '${gender}' for ${championName}`);
    updatedCount++;
    return { ...champion, gender };
  } else {
    missingChampions.push(championName);
    console.log(`⚠ Champion not found in mapping: ${championName} (set as 'other')`);
    updatedCount++;
    return { ...champion, gender: 'other' };
  }
});

const output = { champions: championsWithGender };

fs.writeFileSync("champions_with_gender.json", JSON.stringify(output, null, 2));

console.log(`\n✅ Successfully updated ${updatedCount} champions with gender information!`);
console.log(`📁 File created: champions_with_gender.json`);

const genderCounts = {};
championsWithGender.forEach(champion => {
  const gender = champion.gender;
  genderCounts[gender] = (genderCounts[gender] || 0) + 1;
});

console.log('\n📊 Gender distribution:');
Object.entries(genderCounts).forEach(([gender, count]) => {
  console.log(`  ${gender}: ${count} champions`);
});

if (missingChampions.length > 0) {
  console.log('\n⚠ Champions that were not in the mapping:');
  missingChampions.forEach(name => console.log(`  - ${name}`));
}
