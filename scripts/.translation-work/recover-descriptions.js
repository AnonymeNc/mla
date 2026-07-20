// Recovery script: my earlier cleanup pass discarded real ability description text
// that had been mis-scraped into the `types` array (as `|description=...` junk),
// because it only recovered `skill-type-N=` entries. This restores that lost text
// using the exact strings captured earlier in this session (before the destructive
// edit), matched back to the correct hero/ability by name mention + empty-slot check.
const fs = require('fs');

const recovered = [
  "Aeon Rista inflicts Cursed Rose on an enemy, prioritizing those without Cursed Rose. Cursed Rose immediately deals damage equal to 100% of her Attack to the enemy and triggers the damage effect again after 8s. Each trigger reduces the interval of the next trigger by 1s, down to a minimum of 4s, and can be stacked up to 3 tims. When the bearer of Cursed Rose dies, Aeon Rista's servant gains 1 arm.",
  "Ais Wallenstein's Basic Attacks deal damage equal to 100% of her Attack to enemies in the front area multiple times.",
  "All allied heroes gain a shield equal to 460% of Lionheart Sekhet's Attack. Lionheart Sekhet gains 1 extra stack of shield equal to 400% of her Attack. All heroes 20% of the damage they individually deal within 10s into their own shields, lasting for 10s. When an ally with this shield takes damage, they deal damage equal to 10% of their Attack to the attacker and silence them for 2s. This effect is triggered up to 1 time per Ultimate for each ally.When the silence effect inflicted by Lionheart Sekhet is negated by immunity, it reduces the enemy's Energy by 100 instead. When silence is inflicted repeatedly on the same unit, the duration stacks.",
  "As long as Natalia is alive, increases the allies' Crit Rate every 5s based on the number of surviving allied heroes. For each surviving allied hero, all allies gain 1% more Crit Rate and Natalia gains 1% more Crit Damage. The effect can stack up to 20% extra Crit Rate and 20% extra Crit Damage.",
  "At the beginning of the battle, Crocell cannot be targeted until 6s later or any enemy dies.",
  "Aurora releases 3 ice projectiles to attack an enemy, dealing damage equal to 120% of her Attack.",
  "Aurora summons a frost meteor to strike enemies in the target area, dealing damage equal to 550% of her Attack.",
  "Bestows a blessing upon the ally with the highest Attack, increasing their Attack by 20% for 5s. If the target's current HP is higher than 80%, then also gain 200 points of Energy.",
  "Casts Elemental Magic towards the nearest enemy hero to Arcus Miya and summons two magnetic crystals for 12s, having 40% of the target's max HP as their HP and the same Defense as the target's Basic Defense. The enemy hero takes 50% less damage, but when the crystals take damage, the target takes the same amount of damage as well, and the control effects the crystals take will work on the enemy hero.",
  "Casts spell for 5s, restoring HP equal to 170% of Naiad Rafaela's Attack to all allies. Every 0.5s, restores HP equal to 180% of Naiad Rafaela's Attack to the ally with the lowest HP. While casting this skill, Naiad Rafaela becomes immune to most control effects.",
  "Creates an Anionic Trap under the nearest enemy hero that lasts for 4s. Then it will explode, dealing damage equal to 30% of the damage the enemy has taken in the trap plus 400% of Arcus Miya's Attack to all enemies in range.",
  "Deals damage equal to 450% of his Attack to enemies in front. Deals more extra damage with more HP percentage remaining, stacking up to 100%.",
  "Deals damage equal to 50% Attack 6 times to enemies in a large area, stunning enemy attacked (sic) 5 times for 1s.",
  "Each time Bell Cranel restores 10% of his Max HP (excess HP included), he gains 3% extra Attack, stacking up to 50%.",
  "Edith gains 4% damage reduction for every 20% damage absorbed by all her shields. Lasts 5s and stacks up to 5 times.",
  "Enemies selected as targets by Aurora's Skill have a 20% chance to fall into a frozen state for 2s.",
  "Ethereal Zhuxin summons a lantern, dealing damage equal to 110% of Attack to all enemies within range every second and inflicting 1 stack(s) of Soul Snare for 6s. When an enemy has 8 stacks of Soul Snare, 8 stacks are consumed to knock them airborne for 1s. Upon landing, the enemy takes damage equal to 20% of their Max HP. The damage won't exceed 3000% of Ethereal Zhuxin's Attack.",
  "Every time Hwang Jini uses her skill, Melody increases by 2 stack(s), and each of her Basic Attacks increases Melody by 1 stack(s).",
  "Every time she puts an enemy to sleep, Odette will temporarily obtain 20% of the enemy's Attack for 4s.",
  "Grants all allied heroes 3 stack(s) of Umbral Aegis. When cast, for each stack of Umbral Aegis on the target, restores HP equal to 200% of Darksteel Dullahan's Attack for them, and increases their Attack by 5% for 15s.Umbral Aegis: Can stack up to 3 times. Each time the aegis bearer takes damage exceeding 15% of their Max HP from enemies, 1 stack of Umbral Aegis is consumed to reduce the damage taken by 90% and the bearer restores HP equal to 100% of Darksteel Dullahan's Attack.",
  "Hwang Jini fires 2 sound wave projectiles that bounce between enemies, dealing damage equal to 145% of her Attack, and each sound wave projectile bounces 2 times.",
  "Hylos creates a pathway, allies on the path will have their Attack increased by 8%.",
  "Hylos releases the power of the centaurs to summon a Ring of Punishment, dealing damage equal to 19% of his Attack to surrounding enemies every 2s.",
  "Increase mecha shield by 8% of each nearby enemy unit's max HP. Shield granted from each enemy cannot exceed 50% of her max HP.",
  "Increases all allies' received healing and shields by 12%.",
  "Kalea grabs an enemy and slams them into the area with the highest enemy density, dealing damage equal to 400% of her Attack to all enemies in the area and knocking other enemies airborne. Kalea also taunts all enemies in the battlefield for 4s.The grab effect ignores most CC immune effects, and Kalea gains immunity to most control effects during the cast.###LV2###When a Water Zone appears, it reduces the Attack of enemies within it by 20% and their Agility by 100 for 5s.",
  "Lolita deals damage equal 400% of her Attack to the target.",
  "Lolita raises her shield to block all incoming projectiles.",
  "Lune enhances Amara's power after the battle starts. When her HP falls under 50%, restores 30% of her HP and knocks back all enemies around her. The enhancement effect fades once triggered.",
  "Noumenon Energy Core charges over time. For every 10s, the core will generate a shield equal to 215% of Lolita's Attack for Lolita.",
  "Odette channels and surrounds herself with energy, then releases a magic orb that bounces among enemies 4 times, each bounce dealing damage equal to 230% of her Attack to the enemies in the area. Damage dealt by Odette will not awaken the enemies asleep.",
  "Odette sends sound wave to the enemy unit with the highest Attack, dealing damage equal to 220% of her Attack and putting them to sleep for 4s.",
  "Odette unleashes a magic orb forward, dealing damage equal to 115% of her Attack to the target. The magic orb then split into two and they will deal the same amount of damage to the enemies around. This Skill also comes with 50% of Lifesteal effect.",
  "Reduces damage taken by the two allies with the least HP percentages by 4% of Hestia's Attack for 6s, stacking up to 30%.",
  "Silvanna gains a Shield equal to 1200% of her Attack when the battle starts. When she no longer has any Shield, she will stop attacking for a short period and rebuild the Shield, during which she will be immune to all damage. This effect can be triggered once every 25s.",
  "Silvanna releases the Hawk of Light, which flies towards the ally with the most Attack and grants the ally a Shield equal to 250% of Silvanna's Attack. Before returning to Silvanna in 4s, it offers her a Shield equal to 80% of the damage dealt by the ally in the 4s.",
  "Silvanna waves her lance, dealing damage equal to 75% of her Attack to enemy units in front multiple times.",
  "Summons a common support character for 12s, who inherits 100% basic attack and 50% basic HP from Sipra. Up to 3 common support characters can exist at the same time.",
  "Sword Energy gathers and falls like rain. Deals damage equal to 130% of Attack to enemies within a large area 3 times, inflicting a stack of Sword Energy on them. Additionally, deals extra damage equal to 4% of the target's Max HP per stack to enemies with Sword Energy. The total extra damage cannot exceed 2000% of Feng's Attack.Each stack of Sword Energy deals damage equal to 1% of the target's Max HP every 2s, up to 100% of Feng's Attack. It can stack up to 5 times.",
  "Unleashes Nightmare Energy to attack the enemy with the highest Attack, dealing damage equal to 225% of her Attack and making the target take 20% more damage for 6s.",
  "When Arcus Miya's Basic Attack hits, the two ion cannons behind her each have a 50% chance to use an extra laser attack, dealing True Damage equal to 8% of the target's Max HP but less than 1200% of Arcus Miva's Attack.",
  "When HP is above 60%, Ais Wallenstein gains 40% extra Damage Reduction and 70 extra Agility.",
  "When an enemy is defeated, both Nonas recover 30% of their Max HP and convert 30% of their overheal into Morpheus' healing.",
  "When there's a support hero, all support heroes and support characters gain 30% attack and defense, stacking up to 3 times.When there's no support hero, Sipra gains 200 points of Energy.",
  "While on the pathway, Hylos regenerates HP equal to 19% of his Attack.",
  "Yu Zhong's Reverse Scale and his Dragon Blood grant him a strong body. Reverse Scale: When Yu Zhong takes damage, he has a 20% chance to reflect the same amount of damage to the damage dealer. Dragon Blood: When Yu Zhong's HP falls under 80%, Yu Zhong will heal himself for an amount of HP equal to 2% of his Max HP every second."
];

global.window = {};
require('../../src/data/heroes.js');
const heroes = window.heroCatalogData;

function findHeroByMention(text) {
  const candidates = heroes.filter((h) => text.includes(h.name));
  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    // prefer the longest name match (most specific)
    candidates.sort((a, b) => b.name.length - a.name.length);
    return candidates[0];
  }
  return null;
}

const unmatched = [];
const applied = [];

recovered.forEach((raw) => {
  const [main, lv2] = raw.split('###LV2###');
  const hero = findHeroByMention(main);
  if (!hero) { unmatched.push(main); return; }
  const emptySlots = hero.abilities.filter((a) => !a.description);
  if (emptySlots.length === 0) { unmatched.push(`[${hero.id}] no empty slot for: ${main.slice(0, 60)}...`); return; }
  if (emptySlots.length > 1) { unmatched.push(`[${hero.id}] AMBIGUOUS (${emptySlots.length} empty slots) for: ${main.slice(0, 60)}...`); return; }
  const ability = emptySlots[0];
  ability.description = main;
  if (lv2) {
    const lvlEntry = (ability.levelDescriptions || []).find((l) => l.level === '2');
    if (lvlEntry && !lvlEntry.text) lvlEntry.text = lv2;
    else if (!lvlEntry) {
      ability.levelDescriptions = ability.levelDescriptions || [];
      ability.levelDescriptions.push({ level: '2', text: lv2 });
    }
  }
  applied.push(`${hero.id} :: ${ability.name}`);
});

console.log('APPLIED (' + applied.length + '):');
applied.forEach((a) => console.log('  ', a));
console.log('\\nUNMATCHED (' + unmatched.length + '):');
unmatched.forEach((u) => console.log('  ', u));

fs.writeFileSync('scripts/.translation-work/recovered-heroes-preview.json', JSON.stringify(heroes, null, 2));
console.log('\\nPreview written (not yet applied to src/data/heroes.js).');
