export interface Hero {
  name: string;
  imageUrl: string;
  faction: string;
  race: string;
  description: string;
}

export const Heroes: Hero[] = [
  {
    name: 'Garrosh Hellscream',
    imageUrl: 'assets/img/horde/garrosh.jpeg',
    race: 'Orc',
    faction: 'Horde',
    description:
      'Garrosh Hellscream was a former Warchief of the Horde chosen by Thrall to replace him in the wake of the Cataclysm.',
  },
  {
    name: 'Baine Bloodhoof',
    imageUrl: 'assets/img/horde/baine.jpg',
    faction: 'Horde',
    race: 'Tauren',
    description:
      'Baine Bloodhoof is the High Chieftain of the tauren tribes of Mulgore and leader of Thunder Bluff.',
  },
  {
    name: 'Cairne Bloodhoof',
    imageUrl: 'assets/img/horde/cairne.jpg',
    faction: 'Horde',
    race: 'Tauren',
    description:
      'Cairne Bloodhoof was the Chief of the united tribes of the tauren, chieftain of the Bloodhoof, and leader of Thunder Bluff.',
  },
  {
    name: 'Anduin Wrynn',
    imageUrl: 'assets/img/alliance/anduin.jpg',
    faction: 'Alliance',
    race: 'Human',
    description:
      'Anduin Llane Wrynn is the King of Stormwind, High King of the Alliance, and commander of all Alliance forces.',
  },
  {
    name: 'Archmage Antonidas',
    imageUrl: 'assets/img/alliance/antonidas.jpg',
    faction: 'Alliance',
    race: 'Human',
    description:
      'Antonidas was a powerful mage of great influence and the leader of the Kirin Tor of Dalaran.',
  },
  {
    name: 'Varian Wrynn',
    imageUrl: 'assets/img/alliance/varian.jpg',
    faction: 'Alliance',
    race: 'Human',
    description:
      'Varian Wrynn, the son of the late King Llane Wrynn, was the acting leader of the Alliance, and former king of Stormwind. ',
  },
  {
    name: 'Cenarius',
    imageUrl: 'assets/img/alliance/varian.jpg',
    faction: 'Alliance',
    race: 'Wild God',
    description:
      'Cenarius, Lord of the Forest and patron of many druids, is one of the most powerful and influential demigods of Azeroth.',
  },
  {
    name: 'Tirion Fordring',
    imageUrl: 'assets/img/alliance/tirion.jpg',
    faction: 'Alliance',
    race: 'Human',
    description:
      'Highlord Tirion Fordring was the Supreme Commander of the Argent Crusade and the bearer of the Ashbringer. ',
  },
  {
    name: 'Prophet Velen',
    imageUrl: 'assets/img/alliance/velen.jpg',
    faction: 'Alliance',
    race: 'Draenei',
    description:
      'Velen has been the leader of the draenei people since their flight from Argus 13,000 years before the first orcish invasion.',
  },
  {
    name: 'Leeroy Jenkins',
    imageUrl: 'assets/img/other/leeroy.jpg',
    faction: 'Other',
    race: 'Human',
    description:
      'Leeroy Jenkins is a character name for a player character created by Ben Schulz.',
  },
  {
    name: 'Deathwing',
    imageUrl: 'assets/img/other/deathwing.jpg',
    faction: 'Other',
    race: 'Dragon',
    description:
      'Deathwing the Destroyer, formerly known as Neltharion, was one of the five Dragon Aspects and leader of the black dragonflight.',
  },
  {
    name: 'Nat Pagle',
    imageUrl: 'assets/img/other/nat.jpg',
    faction: 'Other',
    race: 'Human',
    description:
      'Nat Pagle is one of the most famous fishermen in all of Azeroth.',
  },
  {
    name: 'Lord Jaraxxus',
    imageUrl: 'assets/img/other/jarraxus.jpg',
    faction: 'Other',
    race: 'Eredar Demon',
    description: 'Lord Jaraxxus is an eredar lord of the Burning Legion.',
  },
  {
    name: 'King Mukla',
    imageUrl: 'assets/img/other/mukla.jpg',
    faction: 'Other',
    race: 'Skymane Gorilla',
    description:
      'King Mukla is an enormous level 42 skymane gorilla found on Jaguero Isle in Stranglethorn.',
  },
];
