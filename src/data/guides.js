// Community-sourced game guides (FAQ, mechanics, glossary), bilingual EN/FR.
// Sourced from the community Discord's guide channel. Sets window.guidesData,
// consumed by src/components/guides.js. Append new guide objects to extend —
// each guide is self-contained (id, category, title, sections of blocks).
window.guideCategories = {
  beginner: { en: 'Beginner', fr: 'Débutant', order: 1 },
  systems: { en: 'Game Systems', fr: 'Systèmes de jeu', order: 2 },
  progression: { en: 'Hero Progression', fr: 'Progression des héros', order: 3 },
  economy: { en: 'Economy & Shops', fr: 'Économie & boutiques', order: 4 },
  account: { en: 'Account', fr: 'Compte', order: 5 }
};

window.guidesData = [
  {
    id: 'glossary',
    category: 'beginner',
    icon: '📖',
    title: { en: 'Glossary & Abbreviations', fr: 'Glossaire & Abréviations' },
    summary: {
      en: 'Common shorthand used across the community for events, upgrade systems, and hero progression.',
      fr: 'Les abréviations courantes utilisées par la communauté pour les événements, les systèmes d’amélioration et la progression des héros.'
    },
    sections: [
      {
        blocks: [
          {
            type: 'glossary',
            items: [
              { term: 'FL — Frontline', en: 'Guild vs. Guild PvP event where you fight over bases.', fr: 'Événement JcJ Guilde contre Guilde où vous combattez pour capturer des bases.' },
              { term: 'GBR — Guild Boss Rush', en: 'Guild PvE mode featuring a boss enemy that drops loot; you can compare your score to other players.', fr: 'Mode JcE de guilde avec un boss qui distribue du butin ; vous pouvez comparer votre score à celui des autres joueurs.' },
              { term: 'SO — Sacred Oath', en: 'Allows you to summon SSR and later UR heroes, found inside the Summoning Shrine.', fr: 'Permet d’invoquer des héros SSR puis UR, disponible dans le Sanctuaire d’Invocation.' },
              { term: 'SB — Sacred Blessing', en: 'Irregularly occurring event that rewards one Order/Chaos selection chest for every 100 Sacred Oath summons during the event.', fr: 'Événement occasionnel qui offre un coffre au choix Ordre/Chaos toutes les 100 invocations Sacred Oath effectuées pendant l’événement.' },
              { term: 'TM — Tinted Mirage', en: 'Event associated with a new hero release, typically a hybrid or Order/Chaos/Astral hero. Runs for about a month.', fr: 'Événement lié à la sortie d’un nouveau héros, généralement Hybride ou Ordre/Chaos/Astral. Dure environ un mois.' },
              { term: 'PZ — Primal Zone', en: 'Event associated with a new hero release, typically a UR hero. Opens 2 weeks after TM opens.', fr: 'Événement lié à la sortie d’un nouveau héros, généralement UR. S’ouvre 2 semaines après le début du TM.' },
              { term: 'EO — Eternal Otah', en: 'Summoning event linked with PZ. Allows you to summon any UR hero with better rates than Sacred Oath.', fr: 'Événement d’invocation lié au PZ. Permet d’invoquer n’importe quel héros UR avec de meilleurs taux que le Sacred Oath.' },
              { term: 'svXX — Soul Vessel level XX (sv10, sv20, sv30…)', en: 'Unlocks when the hero reaches 9 stars. Grants powerful abilities and can be upgraded up to level 30 (40 for Order & Chaos heroes). Every 10th level grants or upgrades a skill.', fr: 'Se débloque quand le héros atteint 9 étoiles. Confère des capacités puissantes et peut être amélioré jusqu’au niveau 30 (40 pour les héros Ordre & Chaos). Tous les 10 niveaux, une compétence est débloquée ou améliorée.' },
              { term: 'oX — Orlay Cards (o3, o6, o9…)', en: 'Every 3 cards unlock a new skill (e.g. o3 = 3 cards = first skill unlocked). Unlocks once the hero is Awakened and chapter 29 is beaten.', fr: 'Toutes les 3 cartes débloquent une nouvelle compétence (ex. o3 = 3 cartes = 1ère compétence débloquée). Se débloque une fois le héros Éveillé et le chapitre 29 terminé.' },
              { term: 'AT1–AT5 — Ancient Twilight', en: 'Level 1 unlocks around chapter 38-45, level 2 around 44-45, level 3 around 49-45 (levels 4 and 5 are for Order & Chaos heroes only). Used to upgrade the Soul Vessel further, at SV 10/20/30/35/40.', fr: 'Le niveau 1 se débloque vers le chapitre 38-45, le 2 vers 44-45, le 3 vers 49-45 (les niveaux 4 et 5 sont réservés aux héros Ordre & Chaos). Sert à améliorer encore le Vaisseau d’Âme, aux paliers SV 10/20/30/35/40.' },
              { term: 'GGX — Glory Gems (gg2, gg4, gg6, gg8, gg16…)', en: 'Unlocks once the hero is Awakened 2 and chapter 41-45 is beaten. Further upgrades come from Prismatic Glory Gems (Myriad Glory).', fr: 'Se débloque une fois le héros Éveillé 2 et le chapitre 41-45 terminé. Des améliorations supplémentaires viennent des Gemmes de Gloire Prismatiques (Gloire Multiple).' },
              { term: 'eX — Elevation Level (e1–e6)', en: 'Pets only. Unlocks once the pet\'s hero is Awakened 3.', fr: 'Réservé aux familiers (pets). Se débloque une fois le héros associé Éveillé 3.' },
              { term: 'AX — Awaken level (A0–A8)', en: 'Shorthand for a hero\'s Awaken rank, e.g. A3 means Awakened 3. Higher ranks need more duplicate copies and unlock further passives.', fr: 'Abréviation du rang d’Éveil d’un héros, par ex. A3 = Éveillé 3. Les rangs plus élevés demandent plus d’exemplaires en double et débloquent davantage de passifs.' },
              { term: 'NX — Nexus level', en: 'A further hero upgrade tier past Awakening (e.g. N10), pushed mainly with event rewards and chests over time rather than direct farming.', fr: 'Un palier d’amélioration supplémentaire au-delà de l’Éveil (ex. N10), que l’on fait surtout progresser avec le temps via les récompenses d’événements et les coffres plutôt qu’en le farmant directement.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'beginner-tips',
    category: 'beginner',
    icon: '🧭',
    title: { en: 'Beginner Tips', fr: 'Conseils pour débuter' },
    summary: {
      en: 'Team-building basics and why rerolling your account is generally a waste of time.',
      fr: 'Les bases pour construire une équipe, et pourquoi recommencer un compte (reroll) est généralement une perte de temps.'
    },
    sections: [
      {
        heading: { en: 'Forming a team', fr: 'Constituer une équipe' },
        blocks: [
          {
            type: 'ul',
            items: [
              { en: 'Form a balanced team: 1 Tank, 2 Damage Dealers (DPS), 2 Supports. If your Tank dies too fast, swap a Support for a second Tank.', fr: 'Formez une équipe équilibrée : 1 Tank, 2 Dégâts (DPS), 2 Soutiens. Si votre Tank meurt trop vite, remplacez un Soutien par un second Tank.' },
              { en: 'Use SSR heroes, not SR heroes — SR heroes have a lower level cap than SSR, and high-star SR are still weaker than low-star SSR.', fr: 'Utilisez des héros SSR, pas des héros SR — les héros SR ont un niveau maximum plus bas que les SSR, et un SR à haute étoile reste plus faible qu’un SSR à basse étoile.' },
              { en: 'Don’t waste time looking for the optimal setup — the “best” team changes with every new hero summoned. Push Campaign with whatever works until you get stuck, then revisit your hero choices.', fr: 'Ne perdez pas de temps à chercher la configuration optimale — la « meilleure » équipe change à chaque nouveau héros invoqué. Avancez dans la Campagne avec ce qui fonctionne jusqu’à être bloqué, puis reconsidérez vos choix.' },
              { en: 'Basic positioning: Tanks in front, Supports and DPS behind. Rotate positions to protect your weaker units from enemies that target the backline.', fr: 'Positionnement de base : Tanks devant, Soutiens et DPS derrière. Alternez les positions pour protéger vos unités fragiles contre les ennemis qui ciblent l’arrière-ligne.' },
              { en: 'Resonance buff: if possible, field three or more heroes of the same faction to get a 15%+ buff to ATK and HP.', fr: 'Bonus de Résonance : si possible, alignez trois héros ou plus de la même faction pour obtenir un bonus d’au moins 15% en Attaque et PV.' },
              { en: 'Do NOT sacrifice SSR heroes — only use SR heroes as fusion fodder to upgrade SSR heroes. You will eventually need multiple team lineups, and it takes 24 copies to fully max out one SSR hero.', fr: 'NE sacrifiez PAS vos héros SSR — n’utilisez que des héros SR comme matériaux de fusion pour améliorer un SSR. Vous aurez à terme besoin de plusieurs compositions d’équipe, et il faut 24 exemplaires pour monter un héros SSR au maximum.' }
            ]
          }
        ]
      },
      {
        heading: { en: 'Why rerolling is a waste of time', fr: 'Pourquoi recommencer un compte (reroll) est une perte de temps' },
        blocks: [
          {
            type: 'ul',
            items: [
              { en: 'Time-consuming: rerolling means creating multiple accounts and replaying the early stages repeatedly.', fr: 'Chronophage : recommencer implique de créer plusieurs comptes et de rejouer les premiers niveaux encore et encore.' },
              { en: 'CD-key limitations: promo codes are usually single-use and can’t be redeemed again on a new account, so rerolling doesn’t let you reuse them.', fr: 'Limites des codes promo : ils sont généralement à usage unique et ne peuvent pas être réutilisés sur un nouveau compte, donc recommencer ne vous permet pas d’en profiter à nouveau.' },
              { en: 'Uncertain rewards: you might spend a lot of time rerolling without getting the heroes or items you wanted. The Wishlist also unlocks very early, making rerolling even more pointless.', fr: 'Récompenses incertaines : vous pouvez passer beaucoup de temps à recommencer sans obtenir les héros ou objets voulus. La Liste de Souhaits se débloque de toute façon très tôt, rendant le reroll encore moins utile.' },
              { en: 'That time is better spent improving your main account, learning the game’s mechanics, and building up your roster.', fr: 'Ce temps est mieux investi à améliorer votre compte principal, apprendre les mécaniques du jeu et développer votre roster.' },
              { en: 'Sticking with one account lets you build a stronger presence in the community, join a stable guild, and make lasting connections with other players.', fr: 'Garder un seul compte vous permet de vous investir dans la communauté, de rejoindre une guilde stable et de tisser des liens durables avec les autres joueurs.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'feature-unlocks',
    category: 'systems',
    icon: '🔓',
    title: { en: 'Feature Unlocks by Chapter', fr: 'Déblocages par chapitre' },
    summary: {
      en: 'Which Campaign chapter unlocks which feature, event, or resource.',
      fr: 'Quel chapitre de Campagne débloque quelle fonctionnalité, événement ou ressource.'
    },
    sections: [
      {
        heading: { en: 'Early game', fr: 'Début de partie' },
        blocks: [
          { type: 'table', headers: [{ en: 'Chapter', fr: 'Chapitre' }, { en: 'Unlocks', fr: 'Débloque' }], rows: [
            ['2-20', { en: 'Guilds', fr: 'Guildes' }],
            ['6-20', { en: 'Holy Sanctuary', fr: 'Sanctuaire Sacré' }],
            ['9-10', { en: 'Friendship Hiring', fr: 'Recrutement entre amis' }],
            ['10-5', { en: 'Limited-time Summon, Tinted Mirage, Legendary Skin Events', fr: 'Invocation à durée limitée, Mirage Teinté, Événements de skins légendaires' }],
            ['11-20', { en: 'Akashic Ruins', fr: 'Ruines Akashiques' }],
            ['12-10', { en: 'Realm of Legends, Guild Wars, Frontline', fr: 'Royaume des Légendes, Guerres de Guilde, Frontline' }],
            ['18-15', { en: 'Temple of Oracle', fr: 'Temple de l’Oracle' }],
            ['19-15', { en: 'Brawl Arena', fr: 'Arène de Rixe' }]
          ] }
        ]
      },
      {
        heading: { en: 'Suburb', fr: 'Suburb' },
        blocks: [
          { type: 'table', headers: [{ en: 'Chapter', fr: 'Chapitre' }, { en: 'Unlocks', fr: 'Débloque' }], rows: [
            ['22-35', { en: 'Glorious Road, Prophecy Summon', fr: 'Voie Glorieuse, Invocation de Prophétie' }],
            ['23-35', { en: 'Battle of Fate, Auto-equip, Claim/Dispatch All, Claim All', fr: 'Bataille du Destin, Équipement automatique, Tout réclamer/envoyer, Tout réclamer' }],
            ['24-35', { en: 'World Tree, Tavern Expeditions', fr: 'Arbre-Monde, Expéditions de la Taverne' }],
            ['25-40', { en: 'Miracle Towers', fr: 'Tours Miracles' }],
            ['26-20', { en: 'Legends Revived', fr: 'Légendes Ressuscitées' }],
            ['26-40', { en: 'Sacred Oath', fr: 'Sacred Oath' }],
            ['29-45', { en: 'Route Aqua/Azure Skysail, Lunomancy, Stellar Invocation', fr: 'Route Aqua/Voilier Azur, Lunomancie, Invocation Stellaire' }],
            ['34-45', { en: 'Forest Treasure', fr: 'Trésor de la Forêt' }],
            ['37-45', { en: 'Relics, Chrono Crisis', fr: 'Reliques, Chrono Crisis' }],
            ['45-45', { en: 'Chaos, Order and Astral tower floors', fr: 'Étages de tour Chaos, Ordre et Astral' }],
            ['50-45', { en: 'Minos Trial', fr: 'Épreuve de Minos' }],
            ['52-45', { en: 'Apocalypse Dawn', fr: 'Aube de l’Apocalypse' }]
          ] }
        ]
      },
      {
        heading: { en: 'Campaign difficulty milestones', fr: 'Paliers de difficulté de la Campagne' },
        blocks: [
          { type: 'table', headers: [{ en: 'Chapter', fr: 'Chapitre' }, { en: 'Change', fr: 'Changement' }], rows: [
            ['43-45', { en: 'Overdrive Mode: boss stages fought in 2 teams', fr: 'Mode Surcharge : les niveaux de boss se combattent avec 2 équipes' }],
            ['46-45', { en: 'Boss stages fought in 3 teams', fr: 'Les niveaux de boss se combattent avec 3 équipes' }],
            ['49-45', { en: 'Boss stages fought in 4 teams', fr: 'Les niveaux de boss se combattent avec 4 équipes' }],
            ['53-45', { en: 'Boss stages fought in 5 teams', fr: 'Les niveaux de boss se combattent avec 5 équipes' }],
            ['60-5', { en: 'Enemies onward gain Soul Vessels', fr: 'Les ennemis obtiennent des Vaisseaux d’Âme' }],
            ['61-20', { en: 'Enemies onward gain Lunomancy', fr: 'Les ennemis obtiennent la Lunomancie' }],
            ['62-5', { en: 'Boss stages may contain Hybrid-type and Order/Chaos-type heroes', fr: 'Les niveaux de boss peuvent contenir des héros de type Hybride et Ordre/Chaos' }],
            ['65-45', { en: 'Boss stages no longer contain Order/Chaos-type heroes', fr: 'Les niveaux de boss ne contiennent plus de héros de type Ordre/Chaos' }],
            ['74-1', { en: 'Enemies may contain Order/Chaos-type heroes', fr: 'Les ennemis peuvent contenir des héros de type Ordre/Chaos' }],
            ['74-5', { en: 'Boss stages fought in 6 teams', fr: 'Les niveaux de boss se combattent avec 6 équipes' }],
            ['85-1', { en: 'Enemies may contain Astral-type and UR-rarity heroes', fr: 'Les ennemis peuvent contenir des héros de type Astral et de rareté UR' }]
          ] }
        ]
      },
      {
        heading: { en: 'Equipment unlocks', fr: 'Déblocages d’équipement' },
        blocks: [
          { type: 'table', headers: [{ en: 'Requirement', fr: 'Condition' }, { en: 'Unlocks', fr: 'Débloque' }], rows: [
            [{ en: 'Clear Stage 21-5', fr: 'Terminer le niveau 21-5' }, { en: 'Mythic gears in the Guild Shop', fr: 'Équipements Mythiques dans la Boutique de Guilde' }],
            [{ en: 'Clear Stage 27-25', fr: 'Terminer le niveau 27-25' }, { en: 'Mythic gears via Idle Rewards', fr: 'Équipements Mythiques via les récompenses inactives' }],
            [{ en: 'Clear Stage 34-1', fr: 'Terminer le niveau 34-1' }, { en: 'Mythic I Crystals in the Market', fr: 'Cristaux Mythiques I au Marché' }],
            [{ en: 'Clear Stage 34-30', fr: 'Terminer le niveau 34-30' }, { en: 'Mythic I Crystals in the Guild Shop and Idle', fr: 'Cristaux Mythiques I à la Boutique de Guilde et en inactif' }],
            [{ en: 'Clear Stage 42-1', fr: 'Terminer le niveau 42-1' }, { en: 'Mythic II Crystals in the Market', fr: 'Cristaux Mythiques II au Marché' }],
            [{ en: 'Clear Stage 42-45', fr: 'Terminer le niveau 42-45' }, { en: 'Mythic II Crystals in the Guild Shop and Idle', fr: 'Cristaux Mythiques II à la Boutique de Guilde et en inactif' }],
            [{ en: 'Clear Stage 47-45', fr: 'Terminer le niveau 47-45' }, { en: 'Mythic III Crystals in the Guild Shop and Idle', fr: 'Cristaux Mythiques III à la Boutique de Guilde et en inactif' }],
            [{ en: 'Clear Stage 56-45', fr: 'Terminer le niveau 56-45' }, { en: 'Mythic IV Crystals in the Guild Shop and Idle', fr: 'Cristaux Mythiques IV à la Boutique de Guilde et en inactif' }],
            [{ en: 'Clear Stage 63-45', fr: 'Terminer le niveau 63-45' }, { en: 'Mythic V Crystals (Stellar Fantasy) in the Guild Shop and Idle', fr: 'Cristaux Mythiques V (Fantaisie Stellaire) à la Boutique de Guilde et en inactif' }]
          ] }
        ]
      },
      {
        heading: { en: 'Soul Vessel / Ancient Twilight unlocks', fr: 'Déblocages Vaisseau d’Âme / Ancient Twilight' },
        blocks: [
          { type: 'table', headers: [{ en: 'Requirement', fr: 'Condition' }, { en: 'Unlocks', fr: 'Débloque' }], rows: [
            [{ en: 'Clear Chapter 29-45', fr: 'Terminer le chapitre 29-45' }, { en: 'Soul Shards via Idle Rewards', fr: 'Fragments d’Âme via les récompenses inactives' }],
            [{ en: 'Clear Chapter 30-45', fr: 'Terminer le chapitre 30-45' }, { en: 'Soul Core via Idle Rewards', fr: 'Noyau d’Âme via les récompenses inactives' }],
            [{ en: 'Clear Chapter 31-45', fr: 'Terminer le chapitre 31-45' }, { en: 'Soul Meteor via Idle Rewards', fr: 'Météore d’Âme via les récompenses inactives' }],
            [{ en: 'Clear Campaign 38-45', fr: 'Terminer la Campagne 38-45' }, { en: 'Ancient Crystal available in Market and Alchemy Shop', fr: 'Cristal Ancestral disponible au Marché et à la Boutique d’Alchimie' }],
            [{ en: 'Clear Campaign 39-45', fr: 'Terminer la Campagne 39-45' }, { en: 'Ancient Crystal via Idle Rewards', fr: 'Cristal Ancestral via les récompenses inactives' }],
            [{ en: 'Clear Campaign 44-45', fr: 'Terminer la Campagne 44-45' }, { en: 'Ancient Glass available in Market and Alchemy Shop', fr: 'Verre Ancestral disponible au Marché et à la Boutique d’Alchimie' }],
            [{ en: 'Clear Campaign 45-45', fr: 'Terminer la Campagne 45-45' }, { en: 'Ancient Glass via Idle Rewards', fr: 'Verre Ancestral via les récompenses inactives' }],
            [{ en: 'Clear Campaign 49-45', fr: 'Terminer la Campagne 49-45' }, { en: 'Ancient Lens available in Market and Alchemy Shop', fr: 'Lentille Ancestrale disponible au Marché et à la Boutique d’Alchimie' }],
            [{ en: 'Clear Campaign 50-45', fr: 'Terminer la Campagne 50-45' }, { en: 'Ancient Lens via Idle Rewards', fr: 'Lentille Ancestrale via les récompenses inactives' }]
          ] }
        ]
      }
    ]
  },
  {
    id: 'artifacts',
    category: 'systems',
    icon: '🗡️',
    title: { en: 'Artifacts Priority Guide', fr: 'Guide de priorité des artefacts' },
    summary: {
      en: 'Suggested development order for Basic, Holy, and Glory artifacts.',
      fr: 'Ordre de développement conseillé pour les artefacts Basiques, Sacrés et de Gloire.'
    },
    sections: [
      {
        heading: { en: 'Basic Artifacts', fr: 'Artefacts Basiques' },
        blocks: [
          { type: 'p', en: 'Develop your Basic Artifacts first — you can acquire resources for these from idle rewards, certain summoning events, and Tinted Mirage events.', fr: 'Développez d’abord vos Artefacts Basiques — leurs ressources s’obtiennent via les récompenses inactives, certains événements d’invocation et les événements Mirage Teinté.' },
          { type: 'p', en: 'When available in Tinted Mirage, prioritize fragments in this order:', fr: 'Quand ils sont disponibles pendant un Mirage Teinté, priorisez les fragments dans cet ordre :' },
          { type: 'ul', items: [
            { en: 'Dragon Jade / Potion of Nature', fr: 'Jade du Dragon / Potion de la Nature' },
            { en: 'Horn of Courage', fr: 'Cor du Courage' },
            { en: 'Staff of Aurora', fr: 'Bâton de l’Aurore' },
            { en: 'Frost Monolith / Bushido Machete', fr: 'Monolithe de Givre / Machette Bushido' }
          ] }
        ]
      },
      {
        heading: { en: 'Holy Artifacts', fr: 'Artefacts Sacrés' },
        blocks: [
          { type: 'p', en: 'After finishing your Basic Artifacts, start working on Holy Artifacts. Sand can be obtained from idle rewards (improved by your Hourglass level — upgrade it by completing Tower of Babel floors). Spirit Crystal can be obtained during Tinted Mirage events.', fr: 'Une fois vos Artefacts Basiques terminés, passez aux Artefacts Sacrés. Le Sable s’obtient via les récompenses inactives (amélioré par votre niveau de Sablier — à améliorer en terminant des étages de la Tour de Babel). Le Cristal d’Esprit s’obtient pendant les événements Mirage Teinté.' },
          { type: 'p', en: 'Prioritize your Holy Artifact development in this order:', fr: 'Priorisez le développement des Artefacts Sacrés dans cet ordre :' },
          { type: 'ul', items: [
            { en: 'Luna Bow / Enchanted Scroll (both are great)', fr: 'Arc de Luna / Parchemin Enchanté (les deux sont excellents)' },
            { en: 'Magic Codex', fr: 'Codex Magique' },
            { en: 'At this point you can move onto Glory Artifacts and return later — the Holy Artifacts below (Sword / Shield) are of lesser importance.', fr: 'À ce stade, vous pouvez passer aux Artefacts de Gloire et revenir plus tard — les Artefacts Sacrés ci-dessous (Épée / Bouclier) sont moins prioritaires.' },
            { en: 'Lion Sword', fr: 'Épée du Lion' },
            { en: 'Aegis Shield', fr: 'Bouclier Égide' }
          ] },
          { type: 'p', en: 'Holy Artifacts can also be upgraded up to 5 stars — this is very expensive and should be done once you’re done with the good Glory Artifacts. The best candidates for this upgrade are the Bow (great in GBR) or the Scroll (very powerful once upgraded). The Codex upgrade mostly matters for PvP. The Sword and Shield aren’t worth it.', fr: 'Les Artefacts Sacrés peuvent aussi être améliorés jusqu’à 5 étoiles — c’est très coûteux et à faire une fois les bons Artefacts de Gloire terminés. Les meilleurs candidats sont l’Arc (excellent en GBR) ou le Parchemin (très puissant une fois amélioré). L’amélioration du Codex compte surtout en JcJ. L’Épée et le Bouclier ne valent pas l’investissement.' }
        ]
      },
      {
        heading: { en: 'Glory Artifacts', fr: 'Artefacts de Gloire' },
        blocks: [
          { type: 'p', en: 'Once you finish the good Holy Artifacts, move onto Glory Artifacts. Sand comes from idle rewards (boosted by Hourglass level), Spirit Crystal from Tinted Mirage events.', fr: 'Une fois les bons Artefacts Sacrés terminés, passez aux Artefacts de Gloire. Le Sable vient des récompenses inactives (boosté par le niveau de Sablier), le Cristal d’Esprit des événements Mirage Teinté.' },
          { type: 'p', en: 'Good Glory Artifacts to develop first: Hawk’s Eye, Oracle’s Song, Titan Cuirass, Enigma Mark, Divine Essence. A case can be made for any of them, but you’ll likely want Hawk’s Eye or Oracle’s Song first due to their general usage.', fr: 'Bons Artefacts de Gloire à développer en premier : Œil du Faucon, Chant de l’Oracle, Cuirasse du Titan, Marque de l’Énigme, Essence Divine. Chacun a ses arguments, mais l’Œil du Faucon ou le Chant de l’Oracle sont généralement les meilleurs premiers choix de par leur polyvalence.' },
          { type: 'p', en: 'Not recommended early: Inquisition Scythe, Blaze Scale, Coronal Plume, Libra of Eternity, Crux of Mischief — in most cases a Basic Artifact like Jade or Horn performs better, and don’t waste resources on these early. Some of them are also just weak overall (Blaze Scale, Libra of Eternity).', fr: 'Non recommandés au début : Faux de l’Inquisition, Écaille de Braise, Plume Coronale, Balance de l’Éternité, Croix de la Malice — dans la plupart des cas, un Artefact Basique comme le Jade ou le Cor sera plus performant ; ne gaspillez pas de ressources dessus trop tôt. Certains sont aussi tout simplement faibles (Écaille de Braise, Balance de l’Éternité).' }
        ]
      }
    ]
  },
  {
    id: 'constellations',
    category: 'systems',
    icon: '✨',
    title: { en: 'Constellations Guide', fr: 'Guide des Constellations' },
    summary: {
      en: 'Milestones, leveling priority, and which rune stats to keep or exchange.',
      fr: 'Paliers, priorité de montée en niveau, et quelles statistiques de runes garder ou échanger.'
    },
    sections: [
      {
        blocks: [
          { type: 'p', en: 'It is recommended to save your pulls for Constellation events (keep checking the calendar).', fr: 'Il est recommandé de garder ses invocations pour les événements Constellation (surveillez le calendrier).' },
          { type: 'p', en: 'Your first goal should be to acquire a full legendary (yellow) then full mythic (red) set of runes in each constellation — filling out a constellation with legendary/mythic runes grants a bonus. Try to reach the next big milestone as fast as possible. Tank runes should be prioritized last — they’re generally safe to exchange for other class runes during exchange events.', fr: 'Votre premier objectif doit être d’obtenir un set complet de runes légendaires (jaunes) puis mythiques (rouges) dans chaque constellation — compléter une constellation avec des runes légendaires/mythiques accorde un bonus. Essayez d’atteindre le prochain grand palier le plus vite possible. Les runes de Tank doivent être traitées en dernier — elles peuvent généralement être échangées sans risque contre des runes d’autres classes pendant les événements d’échange.' },
          { type: 'ul', items: [
            { en: '4500 — first big milestone (“Cheat Death” passive)', fr: '4500 — premier grand palier (passif « Tromper la Mort »)' },
            { en: '7500 — second big milestone (“Cheat Death” usable twice)', fr: '7500 — second grand palier (« Tromper la Mort » utilisable 2 fois)' },
            { en: '10500 — third big milestone (“Cheat Death” usable three times)', fr: '10500 — troisième grand palier (« Tromper la Mort » utilisable 3 fois)' }
          ] },
          { type: 'p', en: 'As you progress, you’ll also unlock additional damage-boosting passives — it’s not only about the “Cheat Death” effects.', fr: 'En progressant, vous débloquerez aussi des passifs supplémentaires augmentant les dégâts — ce n’est pas uniquement une question de « Tromper la Mort ».' },
          { type: 'p', en: 'For leveling the 5 constellations (using XP from extra blue/epic/legendary runes), leveling all of them evenly seems wise, as the XP required rises steeply each time (focusing just one gets hard). Try to hit the 5-level milestone every time.', fr: 'Pour monter en niveau les 5 constellations (avec l’XP des runes bleues/épiques/légendaires en surplus), il est conseillé de toutes les monter équitablement, car l’XP requise augmente fortement à chaque palier (se concentrer sur une seule devient difficile). Essayez d’atteindre le palier de niveau 5 à chaque fois.' }
        ]
      },
      {
        heading: { en: 'Stats on red (mythic) runes', fr: 'Statistiques des runes rouges (mythiques)' },
        blocks: [
          { type: 'p', en: 'Avoid Dodge & Hit if possible — promote or exchange runes with these stats first. They’re generally low impact, because most damage your heroes take comes from spells (ultimates), which ignore Hit/Dodge rating. Your heroes will also naturally have enough Hit rate from gear upgrades, so extra Hit is wasted. Dodge offers only a weak defensive benefit, if any.', fr: 'Évitez Esquive et Précision si possible — promouvez ou échangez ces runes en priorité. Leur impact est généralement faible, car la majorité des dégâts subis viennent des sorts (ultimes), qui ignorent la Précision/Esquive. Vos héros auront de toute façon assez de Précision grâce à leur équipement, donc en avoir davantage est du gaspillage. L’Esquive n’offre qu’un bénéfice défensif faible, voire nul.' },
          { type: 'ul', items: [
            { en: 'Offensive-roll runes (Mystic Gaze, Lunar Flux): prioritize DMG Increase and Crit Damage, then Attack and Crit Rate.', fr: 'Runes à statistiques offensives (Regard Mystique, Flux Lunaire) : priorisez Augmentation des Dégâts et Dégâts Critiques, puis Attaque et Taux de Critique.' },
            { en: 'Hybrid-roll runes (Ether Ripple): look for Attack or Precision first, then any combination of defensive stats.', fr: 'Runes à statistiques hybrides (Onde d’Éther) : cherchez d’abord Attaque ou Précision, puis n’importe quelle combinaison de statistiques défensives.' },
            { en: 'Defensive-roll runes (Serene Order, Prism Nexus): look for DMG Reduction if possible, otherwise any combination of defensive stats works.', fr: 'Runes à statistiques défensives (Ordre Serein, Nexus Prisme) : cherchez Réduction des Dégâts si possible, sinon n’importe quelle combinaison de statistiques défensives convient.' }
          ] }
        ]
      }
    ]
  },
  {
    id: 'fusion',
    category: 'progression',
    icon: '⭐',
    title: { en: 'Hero Fusion & Star-Up', fr: 'Fusion de héros & montée en étoiles' },
    summary: {
      en: 'How star-up fusion works, and why you should never use SSR heroes as fusion fodder.',
      fr: 'Comment fonctionne la fusion pour monter en étoiles, et pourquoi ne jamais utiliser un héros SSR comme matériau.'
    },
    sections: [
      {
        blocks: [
          { type: 'p', en: 'Duplicate heroes fuse together to raise their star rating, moving up through the star tiers (for example 3★ → 4★ → 5★ → Awakened), with the material cost increasing at each tier. Higher rarities generally need higher-star fodder or dedicated fusion tokens/emblems rather than raw duplicates.', fr: 'Les héros en double se fusionnent pour augmenter leur nombre d’étoiles, en montant les paliers (par exemple 3★ → 4★ → 5★ → Éveillé), le coût en matériaux augmentant à chaque palier. Les raretés plus élevées demandent généralement des matériaux à étoiles plus hautes ou des jetons/emblèmes de fusion dédiés plutôt que de simples doublons.' },
          { type: 'p', en: 'It is NOT recommended to use any SSR heroes as fodder — use only SR heroes as fodder. This is because:', fr: 'Il n’est PAS recommandé d’utiliser des héros SSR comme matériaux — n’utilisez que des héros SR. En effet :' },
          { type: 'ul', items: [
            { en: 'Even bad SSR heroes are still valuable — they help raise your Sanctuary level cap after being awakened.', fr: 'Même un SSR médiocre reste précieux — il aide à augmenter le niveau maximum de votre Sanctuaire une fois éveillé.' },
            { en: 'You will eventually enter Overdrive Mode for Campaign and Tower of Babel (“multi-fight” stages) requiring more than one team lineup to pass — up to 6 teams.', fr: 'Vous finirez par atteindre le Mode Surcharge en Campagne et à la Tour de Babel (niveaux « multi-équipes ») qui nécessitent plusieurs compositions pour être franchis — jusqu’à 6 équipes.' },
            { en: 'Chapter 25 completion unlocks the Miracle Towers, which demand heroes from specific factions to clear. Even mediocre SSR heroes can find use there.', fr: 'Terminer le chapitre 25 débloque les Tours Miracles, qui demandent des héros de factions spécifiques pour être franchies. Même un SSR médiocre peut y trouver son utilité.' },
            { en: 'A total of 24 copies of a specific SSR hero is needed to reach Awaken-8, which also feeds progress on the Eagle Statue in the Gallery of Valor.', fr: 'Il faut un total de 24 exemplaires d’un même héros SSR pour atteindre Éveil-8, ce qui contribue aussi à la progression de la Statue de l’Aigle dans la Galerie de Bravoure.' }
          ] },
          { type: 'p', en: 'By using SSR heroes as fodder, you sacrifice long-term progression for a short-term gain, causing investment loss and delaying the points above.', fr: 'En utilisant des héros SSR comme matériaux, vous sacrifiez votre progression à long terme pour un gain à court terme, ce qui gaspille votre investissement et retarde tous les points ci-dessus.' },
          { type: 'note', en: 'A detailed star-fusion cost chart (exact material quantities per tier) was shared as an infographic but is difficult to transcribe precisely from a compressed screenshot. If you can share the exact numbers as text, they’ll be added here as a proper table.', fr: 'Un tableau détaillé des coûts de fusion (quantités exactes de matériaux par palier) a été partagé sous forme d’infographie, mais il est difficile à retranscrire fidèlement depuis une capture compressée. Si tu peux fournir les chiffres exacts sous forme de texte, ils seront ajoutés ici sous forme de tableau propre.' }
        ]
      },
      {
        heading: { en: 'Evolution requirement (per level)', fr: 'Condition d’évolution (par niveau)' },
        blocks: [
          { type: 'p', en: 'Approximate Essence cost by hero level, from community notes. The exact star-rating requirement per row is omitted here pending confirmation — it increases progressively with level, culminating in an Evolved/Awakened rating from level 200 onward.', fr: 'Coût approximatif en Essence par niveau de héros, d’après les notes de la communauté. La condition exacte de nombre d’étoiles par ligne est omise ici en attendant confirmation — elle augmente progressivement avec le niveau, jusqu’à une condition Évolué/Éveillé à partir du niveau 200.' },
          { type: 'table', headers: [{ en: 'Level', fr: 'Niveau' }, { en: 'Essence', fr: 'Essence' }], rows: [
            ['225', '40k'], ['200', '30k'], ['180', '25k'], ['160', '12k'], ['140', '6k'], ['120', '3k'], ['100', '1.2k'], ['80', '500'], ['60', '250'], ['40', '100'], ['20', '20'], ['10', '10']
          ] }
        ]
      }
    ]
  },
  {
    id: 'diamonds',
    category: 'economy',
    icon: '💎',
    title: { en: 'How to Use Your Diamonds', fr: 'Comment utiliser ses Diamants' },
    summary: {
      en: 'Where to spend Diamonds early and late game, and what to avoid.',
      fr: 'Où dépenser ses Diamants en début et fin de partie, et ce qu’il faut éviter.'
    },
    sections: [
      {
        blocks: [
          { type: 'p', en: 'Diamonds are best used for x10 Premium Summons during the early stages. This is recommended until you have 15 Awakened heroes. Don’t hoard your Diamonds while still early — it will only slow your progress.', fr: 'Les Diamants sont surtout utiles pour des Invocations Premium x10 en début de partie. C’est recommandé jusqu’à avoir 15 héros Éveillés. Ne thésaurisez pas vos Diamants trop tôt — cela ne fera que ralentir votre progression.' },
          { type: 'p', en: 'As you progress, Diamonds should first go to Prophecy Summon (unlocked after chapter 22-35), then Premium Summon once you’ve exhausted your Prophecy Summon chances.', fr: 'En progressant, privilégiez d’abord l’Invocation de Prophétie (débloquée après le chapitre 22-35), puis l’Invocation Premium une fois vos essais de Prophétie épuisés.' },
          { type: 'p', en: 'For early-game players, it’s generally not worth spending Diamonds on other things like Equipment, Mirage Heroes, or Sacred Oath.', fr: 'Pour les joueurs en début de partie, cela ne vaut généralement pas le coup de dépenser ses Diamants sur l’Équipement, les héros Mirage, ou le Sacred Oath.' },
          { type: 'p', en: 'Spending Diamonds on a newly released hero (Tinted Mirage hero) is very cost-inefficient and should only be done by end-game players who know what they’re doing — hyper-focusing on one hero starves your overall roster development, since you’ll eventually need multiple teams and multiple developed heroes. If you really want to, limit yourself to 50 summons on the new TM hero (to reach the 50-summon milestone, which has decent value).', fr: 'Dépenser ses Diamants sur un héros tout juste sorti (héros de Mirage Teinté) est très peu rentable et ne devrait être fait que par des joueurs de fin de partie qui savent ce qu’ils font — se focaliser sur un seul héros freine le développement global de votre roster, puisqu’il vous faudra à terme plusieurs équipes et plusieurs héros développés. Si vous y tenez vraiment, limitez-vous à 50 invocations sur le nouveau héros TM (pour atteindre le palier des 50 invocations, qui a une valeur correcte).' },
          { type: 'p', en: 'Spending Diamonds directly on Sacred Oath is not recommended and cost-inefficient (5000 Diamonds for 10 pulls). If you must, exchange Diamonds for Sacred Scrolls in the VIP shop or during Tinted Mirage popups while clearing stages (4000 Diamonds for 10 pulls). Diamonds are in high demand elsewhere, so you may prefer using saved Scrolls for Sacred Oath instead.', fr: 'Dépenser des Diamants directement sur le Sacred Oath n’est pas recommandé et peu rentable (5000 Diamants pour 10 tirages). Si nécessaire, échangez plutôt vos Diamants contre des Parchemins Sacrés à la boutique VIP ou lors des popups Mirage Teinté en terminant des niveaux (4000 Diamants pour 10 tirages). Les Diamants sont très demandés ailleurs, donc préférez utiliser des Parchemins mis de côté pour le Sacred Oath.' },
          { type: 'p', en: 'Spending Diamonds on Equipment, Omen Crystals, or similar items is never recommended — these can be acquired other ways that don’t require Diamonds, and equipment becomes abundant as you progress. No need to rush.', fr: 'Dépenser des Diamants sur l’Équipement, les Cristaux de Présage ou des objets similaires n’est jamais recommandé — ils s’obtiennent autrement sans Diamants, et l’équipement devient abondant en progressant. Pas besoin de se précipiter.' }
        ]
      }
    ]
  },
  {
    id: 'spending',
    category: 'economy',
    icon: '💳',
    title: { en: 'Real-Money Spending Guide', fr: 'Guide des achats en argent réel' },
    summary: {
      en: 'Which purchases give the best value if you choose to spend money on the game.',
      fr: 'Quels achats offrent le meilleur rapport qualité-prix si vous choisissez de dépenser de l’argent réel.'
    },
    sections: [
      {
        blocks: [
          { type: 'p', en: 'If you need to pick and choose what to buy, here is the efficiency ranking:', fr: 'Si vous devez faire un choix, voici le classement par rapport qualité-prix :' },
          { type: 'ul', items: [
            { en: 'Best value per $ spent: Diamond monthly passes, Lustre monthly pass, Fortuna and Dungeon pass, Diamond Fund, Surface Fund.', fr: 'Meilleur rapport qualité-prix : abonnements mensuels Diamants, abonnement mensuel Éclat, pass Fortuna et Donjon, Fonds Diamant, Fonds Surface.' },
            { en: 'Good value per $ spent: progression pop-ups (Campaign, Tower, Valor, Orlay). Generally good value, but consider whether you actually need the specific resources on offer.', fr: 'Bon rapport qualité-prix : popups de progression (Campagne, Tour, Bravoure, Orlay). Globalement un bon rapport, mais vérifiez que vous avez réellement besoin des ressources proposées.' },
            { en: 'Decent value per $ spent: Monthly Packs, especially the customizable Monthly Offers.', fr: 'Rapport correct : Packs Mensuels, en particulier les Offres Mensuelles personnalisables.' },
            { en: 'Borderline value per $ spent: Weekly Packs, Daily Packs, and time-limited Event Packs — except the customizable weekly offers or refreshable randomized daily offers, which are decent value.', fr: 'Rapport limite : Packs Hebdomadaires, Packs Quotidiens, et Packs d’Événement limités dans le temps — sauf les offres hebdomadaires personnalisables ou les offres quotidiennes aléatoires rafraîchissables, qui restent correctes.' },
            { en: 'Avoid: buying Diamonds/gems directly.', fr: 'À éviter : acheter des Diamants/gemmes directement.' }
          ] }
        ]
      }
    ]
  },
  {
    id: 'oca-build-order',
    category: 'progression',
    icon: '🌗',
    title: { en: 'Order / Chaos / Astral Build Order', fr: 'Ordre du bâti Ordre / Chaos / Astral' },
    summary: {
      en: 'Which Order, Chaos, and Astral (O/C/A) heroes to invest in, and in what order.',
      fr: 'Quels héros Ordre, Chaos et Astral (O/C/A) développer, et dans quel ordre.'
    },
    sections: [
      {
        heading: { en: 'Which O/C/A hero should I build?', fr: 'Quel héros O/C/A développer en premier ?' },
        blocks: [
          { type: 'ul', items: [
            { en: 'One ⭐ copy of Beatrice (Astral) and one ⭐ copy of Rista (Chaos) to help your early game.', fr: 'Un exemplaire ⭐ de Beatrice (Astral) et un exemplaire ⭐ de Rista (Chaos) pour vous aider en début de partie.' },
            { en: 'Akashic (Order) to A3.', fr: 'Akashic (Ordre) jusqu’à A3.' },
            { en: 'Agnes (Chaos) to A3.', fr: 'Agnes (Chaos) jusqu’à A3.' },
            { en: 'Feng (Order) to A3.', fr: 'Feng (Ordre) jusqu’à A3.' },
            { en: 'Florence (Chaos) to A3.', fr: 'Florence (Chaos) jusqu’à A3.' },
            { en: 'Estarith to A0 or A3.', fr: 'Estarith jusqu’à A0 ou A3.' },
            { en: 'Beatrice (Astral) to A0 or A3.', fr: 'Beatrice (Astral) jusqu’à A0 ou A3.' },
            { en: 'After this point, you may instead focus on UR heroes and build the remaining O/C heroes with Prophecy pulls and/or chests from Sacred Blessing.', fr: 'À partir de là, vous pouvez plutôt vous concentrer sur les héros UR et développer les héros O/C restants avec les tirages Prophétie et/ou les coffres du Sacred Blessing.' },
            { en: 'Sekhet (Chaos) to A3.', fr: 'Sekhet (Chaos) jusqu’à A3.' },
            { en: 'Crocell (Order) to A3.', fr: 'Crocell (Ordre) jusqu’à A3.' }
          ] },
          { type: 'p', en: 'You will also want to finish your Rista to A3 over time — this can and should be done with shops and chests.', fr: 'Vous voudrez aussi finir Rista jusqu’à A3 avec le temps — cela peut et doit se faire via les boutiques et les coffres.' },
          { type: 'p', en: 'Pushing your important heroes (like Akashic, Feng, Agnes, or Florence) to Nexus N10 is a luxury that can be done over time via event rewards and chests. However, it might be more economical to build a different character instead.', fr: 'Pousser vos héros importants (comme Akashic, Feng, Agnes ou Florence) jusqu’à Nexus N10 est un luxe qui peut se faire avec le temps via les récompenses d’événements et les coffres. Cela dit, il peut être plus rentable de développer un autre personnage à la place.' }
        ]
      }
    ]
  },
  {
    id: 'pets',
    category: 'progression',
    icon: '🐾',
    title: { en: 'Pets (Companions) Guide', fr: 'Guide des familiers (Compagnons)' },
    summary: {
      en: 'Which companion to pick per hero, and when Legendary pets are worth committing to.',
      fr: 'Quel compagnon choisir pour quel héros, et quand investir dans un familier Légendaire.'
    },
    sections: [
      {
        blocks: [
          { type: 'note', en: 'Do not spread partial Elevation investment across many heroes\' Griffins — this is highly inefficient. Focus on one hero at a time.', fr: 'Ne répartissez pas un investissement partiel d’Élévation sur les Griffons de plusieurs héros — c’est très inefficace. Concentrez-vous sur un héros à la fois.' }
        ]
      },
      {
        heading: { en: 'Which companion should I go for?', fr: 'Quel compagnon choisir ?' },
        blocks: [
          { type: 'p', en: 'For most heroes, you can use the Rare pet (Cat) or one of the Epic pets (Wolf, Sandram, Ferret). These pets can be freely swapped around (with a full refund) and the difference between them is fairly minimal.', fr: 'Pour la plupart des héros, vous pouvez utiliser le familier Rare (Chat) ou l’un des familiers Épiques (Loup, Sandram, Furet). Ces familiers peuvent être librement réattribués (avec remboursement complet) et la différence entre eux est assez minime.' },
          { type: 'p', en: 'Wolf is very universal and may go on pretty much anyone (usually damage dealers). Ferret has some synergy with support-type heroes. Sandram is an ok choice on frontliners.', fr: 'Le Loup est très polyvalent et convient à presque tout le monde (généralement les dégâts). Le Furet a une certaine synergie avec les héros de soutien. Sandram est un choix correct sur les héros de première ligne.' }
        ]
      },
      {
        heading: { en: 'Legendary pets', fr: 'Familiers Légendaires' },
        blocks: [
          { type: 'p', en: 'For Legendary pets, it is highly recommended you go only for Griffin. Stag and Ninetails are lacking in PvE content and are very situational. Griffin has priority on many high-tier heroes.', fr: 'Pour les familiers Légendaires, il est fortement recommandé de ne viser que le Griffon. Cerf and Renard-à-neuf-queues manquent de contenu JcE et restent très situationnels. Le Griffon est prioritaire sur beaucoup de héros de haut niveau.' },
          { type: 'p', en: 'Legendary pets cannot be downgraded back to Epic — you may only change them to another Legendary pet by sacrificing 20 orbs, making the choice of who gets your Legendary companion permanent.', fr: 'Les familiers Légendaires ne peuvent pas redescendre en Épique — vous pouvez seulement les échanger contre un autre familier Légendaire en sacrifiant 20 orbes, ce qui rend définitif le choix du porteur de votre compagnon Légendaire.' },
          { type: 'p', en: 'It is recommended you only equip Griffin once you can bring it straight to E4 (Elevation Level 4). Until then, it is strictly better to use an E6 Epic companion.', fr: 'Il est recommandé de n’équiper le Griffon qu’une fois capable de le monter directement à E4 (Niveau d’Élévation 4). En attendant, mieux vaut toujours utiliser un familier Épique en E6.' }
        ]
      }
    ]
  },
  {
    id: 'relics',
    category: 'progression',
    icon: '🔮',
    title: { en: 'Relics Guide', fr: 'Guide des Reliques' },
    summary: {
      en: 'What to pull for during Relic Wishlist events, and how Unique relics work.',
      fr: 'Quoi tirer pendant les événements Liste de Souhaits de Reliques, et comment fonctionnent les Reliques Uniques.'
    },
    sections: [
      {
        heading: { en: 'Epic relics', fr: 'Reliques Épiques' },
        blocks: [
          { type: 'note', en: 'Don\'t pull for relics outside a Wishlist event — you risk getting bad relics. Keep checking the event calendar for the next Relic Wishlist event.', fr: 'Ne tirez pas de reliques en dehors d’un événement Liste de Souhaits — vous risquez d’obtenir de mauvaises reliques. Surveillez le calendrier pour le prochain événement Liste de Souhaits de Reliques.' },
          { type: 'p', en: 'What relics should I pull for in the Wishlist event (PvE)?', fr: 'Quelles reliques choisir dans la Liste de Souhaits (JcE) ?' },
          { type: 'ul', items: [
            { en: '1st and 2nd slot: keep Lifeform 6 and Biophoton Reactor in your wishlist at all times — they are the best PvE-oriented relics.', fr: '1er et 2e emplacement : gardez toujours Forme de Vie 6 et Réacteur Biophotonique dans votre liste — ce sont les meilleures reliques orientées JcE.' },
            { en: '3rd slot: Organic Continuum or Dark Whisperer.', fr: '3e emplacement : Continuum Organique ou Murmureur des Ténèbres.' },
            { en: 'Other options for the 3rd slot: Leviathan Head, Microcosmos.', fr: 'Autres options pour le 3e emplacement : Tête de Léviathan, Microcosmos.' }
          ] }
        ]
      },
      {
        heading: { en: 'Unique relics', fr: 'Reliques Uniques' },
        blocks: [
          { type: 'p', en: 'These relics are special because you cannot actively deploy them in combat. Instead, they offer a passive stat increase that is always active for everyone.', fr: 'Ces reliques sont spéciales car vous ne pouvez pas les déployer activement au combat. Elles offrent à la place une augmentation de statistique passive, toujours active pour tout le monde.' },
          { type: 'p', en: 'It is recommended to get a copy of each one whenever you can. Each Unique relic has a different acquisition method — you can find out how to get them from the Relic gallery by tapping on them. More sources for these relics will supposedly be added over time.', fr: 'Il est recommandé d’en obtenir un exemplaire de chaque dès que possible. Chaque Relique Unique a une méthode d’acquisition différente — vous pouvez la découvrir dans la Galerie de Reliques en appuyant dessus. D’autres sources pour ces reliques seront a priori ajoutées avec le temps.' },
          { type: 'p', en: 'Once you have at least one copy of a Unique relic, you can further level up the bonus stat it gives by completing the daily mission specific to that relic — each relic has a different daily mission tied to it, described in the relic\'s own description.', fr: 'Une fois que vous avez au moins un exemplaire d’une Relique Unique, vous pouvez encore augmenter le bonus qu’elle procure en accomplissant sa mission quotidienne spécifique — chaque relique a une mission quotidienne différente, décrite dans sa propre fiche.' }
        ]
      }
    ]
  },
  {
    id: 'shops',
    category: 'economy',
    icon: '🛒',
    title: { en: 'Shop Priority Guide', fr: 'Guide de priorité des boutiques' },
    summary: {
      en: 'What to prioritize buying in each of the game\'s shops.',
      fr: 'Quoi prioriser dans chacune des boutiques du jeu.'
    },
    sections: [
      {
        blocks: [
          { type: 'table', headers: [{ en: 'Shop', fr: 'Boutique' }, { en: 'Priority', fr: 'Priorité' }], rows: [
            [{ en: 'Market', fr: 'Marché' }, { en: 'Buy anything that costs Gold (Battle Points). Items costing Diamonds are not worth it.', fr: 'Achetez tout ce qui coûte de l’Or (Points de Combat). Les objets coûtant des Diamants ne valent pas le coup.' }],
            [{ en: 'Guild Shop', fr: 'Boutique de Guilde' }, { en: 'Bloodstained Collar → Stellar Essence (M6) and Stellar Cloud (M5). With enough coins, also Oberon (recommended) or Anna.', fr: 'Collier Taché de Sang → Essence Stellaire (M6) et Nuage Stellaire (M5). Avec assez de pièces, aussi Oberon (recommandé) ou Anna.' }],
            [{ en: 'Dungeon Shop', fr: 'Boutique du Donjon' }, { en: 'Dungeon Coins → Angela. Nightmare Coins → Rista. Other options: Odette, Vexana, Irithel, Gord, Forsetti, Amaterasu, Karihmet. Red Meteor Chests only once you\'ve stopped building heroes here. Nightmare dungeon unlocks after 15 normal runs; Sweep unlocks after 25 normal runs (normal) / 15 nightmare runs (nightmare).', fr: 'Pièces de Donjon → Angela. Pièces de Cauchemar → Rista. Autres options : Odette, Vexana, Irithel, Gord, Forsetti, Amaterasu, Karihmet. Coffres Météore Rouge seulement une fois que vous ne développez plus de héros ici. Le Donjon Cauchemar se débloque après 15 runs normaux ; le Nettoyage auto après 25 runs normaux (normal) / 15 runs Cauchemar (cauchemar).' }],
            [{ en: 'Brawl Shop', fr: 'Boutique de Rixe' }, { en: 'Zhask (recommended) or Martis. Red Meteor Chests after finishing both.', fr: 'Zhask (recommandé) ou Martis. Coffres Météore Rouge une fois les deux terminés.' }],
            [{ en: 'Dawn Shop', fr: 'Boutique de l’Aube' }, { en: 'Red Meteor Chests, Ancient Lens, or Ultimate/Eternal Crystals.', fr: 'Coffres Météore Rouge, Lentille Ancestrale, ou Cristaux Ultimes/Éternels.' }],
            [{ en: 'Tavern Shop', fr: 'Boutique de la Taverne' }, { en: 'Aureate Rune Stone until you reach maximum Soul Root Level 34, then Hwang Jini, then Red Meteor Chests.', fr: 'Pierre-Rune Dorée jusqu’au niveau maximum de Racine d’Âme 34, puis Hwang Jini, puis Coffres Météore Rouge.' }],
            [{ en: 'Tael Shop', fr: 'Boutique Tael' }, { en: 'Weird Lucky Coin → Xeno (recommended) or Tia. Red Meteor Chests after finishing both.', fr: 'Étrange Pièce Porte-Bonheur → Xeno (recommandé) ou Tia. Coffres Météore Rouge une fois les deux terminés.' }],
            [{ en: 'Cloud Depot', fr: 'Dépôt Céleste' }, { en: 'Golden Feathers → Legendary/Epic Pet Selection Chest, then Energy Casket, Glory Boxes, or Red Meteor Chests. White Feathers → Sacred Scrolls, then Red Meteor Chests.', fr: 'Plumes Dorées → Coffre au choix de familier Légendaire/Épique, puis Coffret d’Énergie, Boîtes de Gloire ou Coffres Météore Rouge. Plumes Blanches → Parchemins Sacrés, puis Coffres Météore Rouge.' }],
            [{ en: 'Battle Supply', fr: 'Ravitaillement de Combat' }, { en: 'Morpheus and Sacred Scrolls. Other options: Apostae (skip if building from Alchemy Shop), Red Meteor Chests, Glory Box, Token of Valor, Advanced Essence, Ancient Lens.', fr: 'Morpheus et Parchemins Sacrés. Autres options : Apostae (à ignorer si développé via la Boutique d’Alchimie), Coffres Météore Rouge, Boîte de Gloire, Jeton de Bravoure, Essence Avancée, Lentille Ancestrale.' }],
            [{ en: 'Realm of Samsara (Tinted Mirage)', fr: 'Royaume du Samsara (Mirage Teinté)' }, { en: 'Purple currency: all FEATURED (new hero) fragments → Sacred Scrolls → cheap Spirit Sand packages → whatever else you need. Blue currency: Ether Stone for artifacts you haven\'t maxed (follow the artifact priority guide) → Spirit Crystal once everything offered is maxed.', fr: 'Monnaie violette : tous les fragments du héros VEDETTE (nouveau héros) → Parchemins Sacrés → packs de Sable d’Esprit bon marché → le reste selon vos besoins. Monnaie bleue : Pierre d’Éther pour les artefacts non maximisés (suivez le guide de priorité des artefacts) → Cristal d’Esprit une fois tout maximisé.' }],
            [{ en: 'Pioneer Shop', fr: 'Boutique du Pionnier' }, { en: 'Myriad Glory Gems → Legendary Pet Selection Chest → Chrono Entropy → Jadeite or Red Meteor Chests.', fr: 'Gemmes de Gloire Multiple → Coffre au choix de familier Légendaire → Chrono Entropie → Jadéite ou Coffres Météore Rouge.' }],
            [{ en: 'Honor Shop', fr: 'Boutique de Bravoure' }, { en: 'Fast Idle and Premium Scrolls.', fr: 'Ralenti Rapide et Parchemins Premium.' }],
            [{ en: 'Shrine Shop', fr: 'Boutique du Sanctuaire' }, { en: '5-Star Hero Fragments.', fr: 'Fragments de héros 5 étoiles.' }],
            [{ en: 'Cactus Shop', fr: 'Boutique Cactus' }, { en: 'Myriad Glory Gems → Sacred Scrolls. Hero shards aren\'t advised before you have another source of Myriad Glory.', fr: 'Gemmes de Gloire Multiple → Parchemins Sacrés. Les fragments de héros sont déconseillés tant que vous n’avez pas une autre source de Gloire Multiple.' }],
            [{ en: 'Alchemy Shop (Guild)', fr: 'Boutique d’Alchimie (Guilde)' }, { en: 'Construction Goods: Ancient Lens (red), Mythic Equipment if needed. Exchange Goods: Apostae (monthly) → Stellar Cloud (M5) Selection Chest → Ancient Lens.', fr: 'Biens de Construction : Lentille Ancestrale (rouge), Équipement Mythique si besoin. Biens d’Échange : Apostae (mensuel) → Coffre au choix Nuage Stellaire (M5) → Lentille Ancestrale.' }]
          ] }
        ]
      }
    ]
  },
  {
    id: 'server-swap',
    category: 'account',
    icon: '🔄',
    title: { en: 'How to Swap Servers', fr: 'Comment changer de serveur' },
    summary: {
      en: 'How to leave the Return Server and go back to your original account/division.',
      fr: 'Comment quitter le serveur de retour et revenir à votre compte/division d’origine.'
    },
    sections: [
      {
        blocks: [
          { type: 'ul', items: [
            { en: 'Click on your profile.', fr: 'Cliquez sur votre profil.' },
            { en: 'Go to Settings.', fr: 'Allez dans Paramètres.' },
            { en: 'Click on "Server".', fr: 'Cliquez sur « Server ».' },
            { en: 'Click the swap arrow icon in the top-left.', fr: 'Cliquez sur l’icône flèche d’échange en haut à gauche.' },
            { en: 'Choose another division (choose anything other than Division 10 if you wish to leave the Return Server).', fr: 'Choisissez une autre division (choisissez autre chose que la Division 10 si vous voulez quitter le serveur de retour).' },
            { en: 'Done.', fr: 'C’est terminé.' }
          ] },
          { type: 'note', en: 'Division 10 in the screenshots is the special "Return Server" pool — switching to a different division takes you back to a regular server.', fr: 'La Division 10 dans les captures est le pool spécial du « serveur de retour » — passer à une autre division vous ramène sur un serveur classique.' }
        ]
      }
    ]
  },
  {
    id: 'soul-vessel',
    category: 'progression',
    icon: '🫙',
    title: { en: 'Soul Vessel Upgrade Costs', fr: 'Coûts d’amélioration du Vaisseau d’Âme' },
    summary: {
      en: 'Resource cost per level from unlock (9★) up to level 40, plus the Ancient Twilight materials gating each bracket.',
      fr: 'Coût en ressources par niveau, du déblocage (9★) jusqu’au niveau 40, ainsi que les matériaux Ancient Twilight qui conditionnent chaque palier.'
    },
    sections: [
      {
        blocks: [
          { type: 'p', en: 'The Soul Vessel unlocks once a hero reaches 9 stars and can be leveled up to 40 (Order & Chaos heroes) using three resources in sequence: Soul Shard (levels 0-10), Soul Core (levels 11-20), and Soul Meteor (levels 21-40).', fr: 'Le Vaisseau d’Âme se débloque quand un héros atteint 9 étoiles et peut être monté jusqu’au niveau 40 (héros Ordre & Chaos) en utilisant trois ressources dans l’ordre : Fragment d’Âme (niveaux 0-10), Noyau d’Âme (niveaux 11-20), puis Météore d’Âme (niveaux 21-40).' },
          { type: 'note', en: 'Levels 31-40 costs can also be paid with Soul Meteor Jadeite instead of regular Soul Meteor.', fr: 'Les coûts des niveaux 31 à 40 peuvent aussi être payés avec du Météore d’Âme Jadéite à la place du Météore d’Âme classique.' },
          { type: 'table', headers: [{ en: 'Bracket', fr: 'Palier' }, { en: 'Material', fr: 'Matériau' }, { en: 'Total cost', fr: 'Coût total' }], rows: [
            ['0 → 10', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '220'],
            ['11 → 20', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '240'],
            ['21 → 30', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '300'],
            ['31 → 35', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '280'],
            ['36 → 40', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '770']
          ] },
          { type: 'note', en: 'Reaching SV10 / SV20 / SV30 / SV35 / SV40 also each require 10 units of the matching Ancient Twilight material (Ancient Crystal for AT1 at SV10, Ancient Glass for AT2 at SV20, Ancient Lens for AT3/4/5 at SV30/35/40) — see the Feature Unlocks guide for where each one drops.', fr: 'Atteindre SV10 / SV20 / SV30 / SV35 / SV40 demande aussi, à chaque fois, 10 unités du matériau Ancient Twilight correspondant (Cristal Ancestral pour AT1 à SV10, Verre Ancestral pour AT2 à SV20, Lentille Ancestrale pour AT3/4/5 à SV30/35/40) — voir le guide Déblocages par chapitre pour savoir où les obtenir.' },
          { type: 'p', en: 'Per-level breakdown:', fr: 'Détail par niveau :' },
          { type: 'table', headers: [{ en: 'Level', fr: 'Niveau' }, { en: 'Material', fr: 'Matériau' }, { en: 'Cost', fr: 'Coût' }], rows: [
            ['0 (unlock)', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '20'],
            ['1', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '10'], ['2', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '10'], ['3', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '10'], ['4', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '10'], ['5', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '15'], ['6', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '20'], ['7', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '20'], ['8', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '25'], ['9', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '30'], ['10', { en: 'Soul Shard', fr: 'Fragment d’Âme' }, '50'],
            ['11', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '10'], ['12', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '10'], ['13', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '15'], ['14', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '15'], ['15', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '20'], ['16', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '25'], ['17', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '25'], ['18', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '30'], ['19', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '40'], ['20', { en: 'Soul Core', fr: 'Noyau d’Âme' }, '50'],
            ['21', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '10'], ['22', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '20'], ['23', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '20'], ['24', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '20'], ['25', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '30'], ['26', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '30'], ['27', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '40'], ['28', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '40'], ['29', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '40'], ['30', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '50'],
            ['31', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '50'], ['32', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '50'], ['33', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '50'], ['34', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '60'], ['35', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '70'],
            ['36', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '80'], ['37', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '90'], ['38', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '120'], ['39', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '180'], ['40', { en: 'Soul Meteor', fr: 'Météore d’Âme' }, '300']
          ] }
        ]
      }
    ]
  },
  {
    id: 'sacred-oath-faq',
    category: 'systems',
    icon: '🕯️',
    title: { en: 'Sacred Oath & Sacred Blessing FAQ', fr: 'FAQ Sacred Oath & Sacred Blessing' },
    summary: {
      en: 'How Sacred Scrolls work, and what the Sacred Blessing event gives you.',
      fr: 'Comment fonctionnent les Parchemins Sacrés, et ce que rapporte l’événement Sacred Blessing.'
    },
    sections: [
      {
        blocks: [
          { type: 'p', en: 'Sacred Scrolls are used in the Wishing Shrine\'s Sacred Oath section, which unlocks after you beat Campaign Stage 26-40.', fr: 'Les Parchemins Sacrés s’utilisent dans la section Sacred Oath du Sanctuaire des Vœux, qui se débloque après avoir terminé le niveau 26-40 de la Campagne.' },
          { type: 'note', en: 'You should never use Diamonds directly on Sacred Oath — use only Sacred Scrolls. If you need to convert Diamonds to Sacred Scrolls, do it in the VIP shop or via popup deals during Tinted Mirage while clearing stages (4,000 Diamonds for 10 scrolls).', fr: 'Il ne faut jamais dépenser de Diamants directement sur le Sacred Oath — utilisez uniquement des Parchemins Sacrés. Si vous devez convertir des Diamants en Parchemins Sacrés, faites-le à la boutique VIP ou via les offres popup pendant le Mirage Teinté en terminant des niveaux (4 000 Diamants pour 10 parchemins).' },
          { type: 'p', en: 'What is Sacred Blessing?', fr: 'Qu’est-ce que le Sacred Blessing ?' },
          { type: 'p', en: 'It is an irregularly occurring event that rewards you with one Order/Chaos selection chest for every 100 Sacred Oath summons made during the event. The event typically lasts 7 days. Up to 5 selection chests can be obtained in total (500 summons during the event).', fr: 'C’est un événement qui survient de façon irrégulière et qui offre un coffre au choix Ordre/Chaos toutes les 100 invocations Sacred Oath effectuées pendant l’événement. L’événement dure généralement 7 jours. On peut obtenir jusqu’à 5 coffres au choix au total (500 invocations pendant l’événement).' },
          { type: 'p', en: 'When will Sacred Blessing come back?', fr: 'Quand le Sacred Blessing revient-il ?' },
          { type: 'p', en: 'There is no exact schedule, but it usually happens once every 2 to 3 months — this is up to the developers and subject to change. Keep checking the event calendar; it will eventually happen. Keep saving your Sacred Scrolls until then.', fr: 'Il n’y a pas de calendrier fixe, mais cela arrive généralement tous les 2 à 3 mois — c’est à la discrétion des développeurs et sujet à changement. Surveillez le calendrier des événements, ça finira par arriver. Gardez vos Parchemins Sacrés de côté en attendant.' }
        ]
      }
    ]
  },
  {
    id: 'summon-odds',
    category: 'economy',
    icon: '🎲',
    title: { en: 'Summon Costs & Odds', fr: 'Coûts et probabilités d’invocation' },
    summary: {
      en: 'Approximate gem/scroll cost per copy across each summon banner, based on published rates and average pulls.',
      fr: 'Coût approximatif en gemmes/parchemins par exemplaire pour chaque bannière d’invocation, basé sur les taux publiés et le nombre moyen de tirages.'
    },
    sections: [
      {
        blocks: [
          { type: 'table', headers: [{ en: 'Banner', fr: 'Bannière' }, { en: 'Odds', fr: 'Probabilité' }, { en: 'Cost per pull', fr: 'Coût par tirage' }, { en: 'Average cost per copy', fr: 'Coût moyen par exemplaire' }], rows: [
            [{ en: 'Sacred Oath — SSR', fr: 'Sacred Oath — SSR' }, '2%', { en: '500 gems (avg. 50 pulls)', fr: '500 gemmes (moy. 50 tirages)' }, { en: '~25,000 gems / ~50 Sacred Scrolls', fr: '~25 000 gemmes / ~50 Parchemins Sacrés' }],
            [{ en: 'Sacred Oath — UR', fr: 'Sacred Oath — UR' }, '1.4%', { en: '500 gems (avg. ~72 pulls)', fr: '500 gemmes (moy. ~72 tirages)' }, { en: '~36,000 gems / ~72 Sacred Scrolls', fr: '~36 000 gemmes / ~72 Parchemins Sacrés' }],
            [{ en: 'Eternal Oath', fr: 'Eternal Oath' }, '2%', { en: 'avg. 50 pulls', fr: 'moy. 50 tirages' }, { en: '~50 Eternal Scrolls', fr: '~50 Parchemins Éternels' }],
            [{ en: 'Premium Summon', fr: 'Invocation Premium' }, '4.61%', { en: '250 gems (avg. ~22 pulls)', fr: '250 gemmes (moy. ~22 tirages)' }, { en: '~5,500 gems per wishlist hero', fr: '~5 500 gemmes par héros de la liste de souhaits' }],
            [{ en: 'Prophecy Summon — SSR', fr: 'Invocation de Prophétie — SSR' }, '4.61%', { en: '280 gems (avg. ~22 pulls)', fr: '280 gemmes (moy. ~22 tirages)' }, { en: '~6,000 gems', fr: '~6 000 gemmes' }],
            [{ en: 'Prophecy Summon — Order/Chaos/Astral (?)', fr: 'Invocation de Prophétie — Ordre/Chaos/Astral (?)' }, '4.61%', { en: '400 gems (avg. ~22 pulls)', fr: '400 gemmes (moy. ~22 tirages)' }, { en: '~9,000 gems', fr: '~9 000 gemmes' }],
            [{ en: 'Limited Summon (excl. milestones)', fr: 'Invocation Limitée (hors paliers)' }, '2.2%', { en: '450 gems (avg. ~45 pulls)', fr: '450 gemmes (moy. ~45 tirages)' }, { en: '~20,000 gems', fr: '~20 000 gemmes' }]
          ] },
          { type: 'note', en: 'The "(?)" on Prophecy Summon Order/Chaos/Astral rate reflects uncertainty in the original community source — treat that specific figure as approximate.', fr: 'Le « (?) » sur le taux Ordre/Chaos/Astral de l’Invocation de Prophétie reflète une incertitude dans la source communautaire d’origine — considérez ce chiffre précis comme approximatif.' }
        ]
      }
    ]
  },
  {
    id: 'ur-build-order',
    category: 'progression',
    icon: '🌟',
    title: { en: 'UR Hero Build Order', fr: 'Ordre de développement des héros UR' },
    summary: {
      en: 'Which UR heroes to invest in first, tiered by overall value, plus which ones are worth grabbing at a single copy early.',
      fr: 'Quels héros UR développer en premier, classés par valeur globale, et lesquels valent le coup en un seul exemplaire dès le début.'
    },
    sections: [
      {
        blocks: [
          { type: 'note', en: 'Heroes within the same tier can be built in whichever order suits your roster — it is not recommended to build a lower-tier hero before finishing the tiers above it.', fr: 'Les héros d’un même palier peuvent être développés dans l’ordre qui vous arrange — il n’est pas recommandé de développer un héros d’un palier inférieur avant de finir les paliers au-dessus.' }
        ]
      },
      {
        heading: { en: 'Tier 1: Singularity Lunox / Skuld Norns', fr: 'Palier 1 : Singularity Lunox / Skuld Norns' },
        blocks: [
          { type: 'ul', items: [
            { en: 'Singularity Lunox (Slunox) is a versatile hero used in many modes, with a very strong Realm ability you want upgraded ASAP for fast revives.', fr: 'Singularity Lunox (Slunox) est un héros polyvalent utilisé dans de nombreux modes, avec une capacité de Royaume très puissante à améliorer au plus vite pour des résurrections rapides.' },
            { en: 'Skuld Norns is also used in many modes, with great durability and big damage potential — a very strong hero overall.', fr: 'Skuld Norns est aussi utilisée dans de nombreux modes, avec une grande durabilité et un fort potentiel de dégâts — un héros très solide dans l’ensemble.' }
          ] }
        ]
      },
      {
        heading: { en: 'Tier 2: Infinia Crocell / Heartcore Angela / Sentient Alina / Genesis Shar', fr: 'Palier 2 : Infinia Crocell / Heartcore Angela / Sentient Alina / Genesis Shar' },
        blocks: [
          { type: 'ul', items: [
            { en: 'Sentient Alina is a solid all-around hero with a very powerful Realm, best paired with burst damage heroes (like Infinia Crocell and Agnes).', fr: 'Sentient Alina est une héroïne solide et polyvalente avec un Royaume très puissant, idéale associée à des héros de dégâts en burst (comme Infinia Crocell et Agnes).' },
            { en: 'Infinia Crocell is a powerful carry for Campaign and towers — bonus points for being Astral if paired with Skuld — and also pairs very well with Alina.', fr: 'Infinia Crocell est un excellent carry pour la Campagne et les tours — un bonus d’être Astral si associée à Skuld — et se marie aussi très bien avec Alina.' },
            { en: 'Genesis Shar (Gshar) is highly useful in her respective towers, Campaign, and Tinted Mirage.', fr: 'Genesis Shar (Gshar) est très utile dans ses tours dédiées, en Campagne et pendant le Mirage Teinté.' },
            { en: 'Heartcore Angela (HAngela) is very durable and offers a very strong Realm ability — she can be left at 8★ and finished later.', fr: 'Heartcore Angela (HAngela) est très résistante et offre un Royaume très puissant — elle peut être laissée à 8★ et terminée plus tard.' }
          ] }
        ]
      },
      {
        heading: { en: 'Tier 3: Mystic Mystia / Everblight Shah / Apexis Cluster / Lionheart Sekhet / Omniversal Akashic / Aeon Rista', fr: 'Palier 3 : Mystic Mystia / Everblight Shah / Apexis Cluster / Lionheart Sekhet / Omniversal Akashic / Aeon Rista' },
        blocks: [
          { type: 'ul', items: [
            { en: 'Mystic Mystia offers great disruptive utility while keeping your team alive — usable in Guild Boss, overall a good support.', fr: 'Mystic Mystia offre un excellent contrôle perturbateur tout en maintenant son équipe en vie — utilisable au Boss de Guilde, bon soutien dans l’ensemble.' },
            { en: 'Lionheart Sekhet (LSekhet) is close to her SSR counterpart in performance, offering great protection for your team plus crowd control.', fr: 'Lionheart Sekhet (LSekhet) est proche de son équivalent SSR en performance, offrant une excellente protection pour l’équipe et du contrôle de foule.' },
            { en: 'Everblight Shah (EShah) has limited usefulness in PvE — generally 1 copy is enough.', fr: 'Everblight Shah (EShah) a une utilité limitée en JcE — un seul exemplaire suffit généralement.' },
            { en: 'Apexis Cluster does very well in Tinted Mirage if built, and can also be used for general PvE.', fr: 'Apexis Cluster excelle en Mirage Teinté une fois développée, et peut aussi servir en JcE général.' },
            { en: 'Omniversal Akashic (Omni Akashic) is great for Minos and some specific Campaign teams, but far less broadly used than his SSR counterpart to be worth pursuing early.', fr: 'Omniversal Akashic (Omni Akashic) est excellent pour Minos et certaines équipes de Campagne spécifiques, mais bien moins utilisé que son équivalent SSR pour justifier d’être développé tôt.' },
            { en: 'Aeon Rista (Arista) is incredible, but in most cases one copy (for GBR / Minos) — which you can and should get early — is enough; fully committing to her isn\'t strictly necessary before other heroes.', fr: 'Aeon Rista (Arista) est incroyable, mais dans la plupart des cas un seul exemplaire (pour le GBR / Minos) — que vous pouvez et devriez obtenir tôt — suffit ; s’y investir pleinement n’est pas strictement nécessaire avant les autres héros.' }
          ] }
        ]
      },
      {
        heading: { en: 'Tier 4: Noctis Tokinibara / Achlys Alice / Eos Silvanna / Kryos Sinmara', fr: 'Palier 4 : Noctis Tokinibara / Achlys Alice / Eos Silvanna / Kryos Sinmara' },
        blocks: [
          { type: 'ul', items: [
            { en: 'Noctis Tokinibara (NToki) does well in Minos, but 1 copy is enough and can be substituted for Tefnut.', fr: 'Noctis Tokinibara (NToki) est efficace à Minos, mais un seul exemplaire suffit et peut être remplacé par Tefnut.' },
            { en: 'Achlys Alice (AAlice) is not very impressive in PvE content as she needs a lot of support to work — she\'s fine in Dark Tower.', fr: 'Achlys Alice (AAlice) n’est pas très impressionnante en JcE car elle a besoin de beaucoup de soutien pour fonctionner — elle est correcte en Tour des Ténèbres.' },
            { en: 'Eos Silvanna is good for pushing towers and can be delayed — get 1 copy of her.', fr: 'Eos Silvanna est bonne pour pousser les tours et peut être retardée — prenez-en un exemplaire.' },
            { en: 'Kryos Sinmara is only worth considering for her (so far) unique Legion Skill that boosts global PvE damage — otherwise not a very useful hero (her Realm has some potential).', fr: 'Kryos Sinmara ne vaut le coup que pour sa Compétence de Légion unique (pour l’instant) qui augmente les dégâts JcE globaux — sinon ce n’est pas un héros très utile (son Royaume a un certain potentiel).' }
          ] }
        ]
      },
      {
        heading: { en: 'Tier 5: Ember Irithel / Helia Karihmet', fr: 'Palier 5 : Ember Irithel / Helia Karihmet' },
        blocks: [
          { type: 'ul', items: [
            { en: 'Both of these heroes can be slowly built from the Commerce Office — not recommended to summon for them directly.', fr: 'Ces deux héros peuvent être développés lentement via le Bureau du Commerce — il n’est pas recommandé d’invoquer directement pour eux.' },
            { en: 'Ember Irithel finds use in Miracle Towers and used to be good in Minos (could come back).', fr: 'Ember Irithel trouve une utilité dans les Tours Miracles et était autrefois bonne à Minos (pourrait revenir).' },
            { en: 'Helia Karihmet is really bad everywhere — get her only as your last UR, for Sanctuary/Eagle Statue levels.', fr: 'Helia Karihmet est vraiment mauvaise partout — ne la prenez qu’en dernier UR, pour les niveaux de Sanctuaire/Statue de l’Aigle.' }
          ] }
        ]
      },
      {
        heading: { en: 'Worth grabbing at a single copy early', fr: 'Valent le coup en un seul exemplaire dès le début' },
        blocks: [
          { type: 'p', en: 'These heroes can help even as a single copy in modes like Tower of Babel or Minos Trial, or are just generally useful — it\'s not a bad idea to grab one copy when you have the option.', fr: 'Ces héros peuvent aider même en un seul exemplaire dans des modes comme la Tour de Babel ou l’Épreuve de Minos, ou sont simplement utiles en général — ce n’est pas une mauvaise idée d’en prendre un exemplaire quand l’occasion se présente.' },
          { type: 'ul', items: [
            { en: 'High priority: Singularity Lunox, Skuld Norns, Aeon Rista.', fr: 'Haute priorité : Singularity Lunox, Skuld Norns, Aeon Rista.' },
            { en: 'Lower priority (not recommended unless you have a specific reason): Everblight Shah, Genesis Shar, Noctis Tokinibara, Eos Silvanna, Infinia Crocell, Heartcore Angela, Apexis Cluster, Omniversal Akashic.', fr: 'Priorité plus faible (déconseillé sauf raison particulière) : Everblight Shah, Genesis Shar, Noctis Tokinibara, Eos Silvanna, Infinia Crocell, Heartcore Angela, Apexis Cluster, Omniversal Akashic.' }
          ] }
        ]
      }
    ]
  }
];
