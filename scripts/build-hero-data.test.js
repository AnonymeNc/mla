const test = require('node:test');
const assert = require('node:assert/strict');
const { extractHeroPageData } = require('./build-hero-data');

test('extractHeroPageData parses description, capabilities and abilities from wiki content', () => {
  const content = `{{HeroTabs}}
{{Infobox heroes
|name=Achlys Alice
|title=The Executioner
|type=Hybrid
|equipment=Light
|class=Mage
|advanced_class=Warlock
|rarity=UR
}}

'''Achlys Alice''' is a hero.

==Description==
The Blood Queen is a menace.

== Capabilities ==
She can deal AoE damage.

== Story ==
A cruel archmage forged by the twilight.

==Abilities==
{{Ability
|skill-name=Eternal Darkness
|skill-tier=Ultimate
|skill-type-1=Heal
|description=Summons a circle that deals damage.
|description-lv2=Weakens enemies.
}}

{{Ability
|skill-name=Blood Fiesta
|skill-tier=Passive
|description=Gains lifesteal.
}}
`;

  const result = extractHeroPageData(content, 'Achlys Alice');
  assert.equal(result.description, 'The Blood Queen is a menace.');
  assert.equal(result.capabilities, 'She can deal AoE damage.');
  assert.equal(result.abilities.length, 2);
  assert.equal(result.abilities[0].name, 'Eternal Darkness');
  assert.equal(result.abilities[0].tier, 'Ultimate');
  assert.equal(result.abilities[0].description, 'Summons a circle that deals damage.');
  assert.equal(result.abilities[1].tier, 'Passive');
  assert.equal(result.story, 'A cruel archmage forged by the twilight.');
  assert.deepEqual(result.subFactions, []);
});
