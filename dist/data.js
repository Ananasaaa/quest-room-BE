"use strict";
const cardsQuest = [
    {
        id: 1,
        type: 'Horror',
        name: 'Crypt',
        countPeople: '2-5 people',
        level: 'Hard',
        time: '120 min',
        description: 'In the eerie depths of an old cemetery lies a mysterious crypt, shrouded in legends and secrets. It once belonged to an ancient lineage whose name has been erased from history. They say that those who dared to enter never returned. Ancient mechanisms, ominous whispers, and hidden traps make this place a true test for the brave. Your team must uncover the crypts secrets, evade dangers, and solve ancient riddles to escape. But be careful—time is running out, and the shadows of the past are already watching you...'
    },
    {
        id: 2,
        type: 'Horror',
        name: 'Maniac',
        countPeople: '3-6 people',
        level: 'Advanced',
        time: '90 min',
        description: 'In a dimly lit room, several strangers slowly regain consciousness. No one remembers what happened the night before. Their hands and feet are bound, but one of them has managed to break free. On the wall, a terrifying timer is counting down—60 minutes remain. Can you keep your cool under pressure, help the others, uncover the truth, and escape the room?'
    },
    {
        id: 3,
        type: 'Mysticism',
        name: 'Ritual',
        countPeople: '3-5 people',
        level: 'Easy',
        time: '120 min',
        description: 'The heavy air weighs down on you as you find yourself locked in a damp room with other bewildered victims. Through a narrow gap in the door, you see a hooded figure preparing what appears to be a ritual site for a mysterious ceremony. Will you manage to escape before you become the next sacrifice?'
    },
    {
        id: 4,
        type: 'Sci-Fi',
        name: 'Mars-2056',
        countPeople: '2-4 people',
        level: 'Easy',
        time: '90 min',
        description: 'Welcome to the year 2056! Humanity has conquered Mars, establishing the first colony, but peaceful life on the Red Planet was short-lived. After a mysterious signal from a research station, all communication with its crew was lost. Your team—an elite group of astronauts—has been sent on a rescue mission. You must uncover what happened, restore the station’s operations, and prevent a disaster. But stay alert: Mars holds more secrets than it seems, and the fate of the entire colony depends on your actions. Time is running out, oxygen is depleting, and the unknown is calling you beyond the limits of possibility!'
    },
    {
        id: 5,
        type: 'Adventure',
        name: 'Secrets of the old mansion',
        countPeople: '2-5 people',
        level: 'Easy',
        time: '120 min',
        description: 'Immerse yourself in the atmosphere of backstage service rooms, where countless secrets and mysteries are hidden. You will find yourself in an old mansion and uncover everything concealed within its winding corridors.'
    },
    {
        id: 6,
        type: 'Mysticism',
        name: 'Hut in the woods',
        countPeople: '4-7 people',
        level: 'Advanced',
        time: '100 min',
        description: 'A dense forest, lost far from civilization, hides a sinister cabin shrouded in eerie rumors. They say those who lived here once studied dark rituals, and their home still bears the traces of mysterious events. Your team has stumbled upon this place by chance, but escaping the forest is becoming increasingly difficult—the cabin seems to have a life of its own. Creaking floors, cryptic symbols, and unsettling sounds push you to seek answers. Find the key to the cabin’s secrets before it’s too late. But remember—not everything in this house wants you to leave...'
    },
    {
        id: 7,
        type: 'Detective',
        name: 'Fatal experiment',
        countPeople: '5-8 people',
        level: 'Hard',
        time: '120 min',
        description: 'You stand on the brink of a groundbreaking scientific discovery that could change the fate of humanity. But something goes wrong— the nuclear reactor, running at full capacity, signals an imminent failure. Can you repair it in time and prevent a catastrophe, or will this fateful experiment end in disaster?'
    },
    {
        id: 8,
        type: 'Adventure',
        name: 'Metro 2023',
        countPeople: '6-8 people',
        level: 'Advanced',
        time: '130 min',
        description: 'The year is 2023. After a global catastrophe, the remnants of humanity have taken refuge deep within the underground metro. Among abandoned stations and dark tunnels, life has become a relentless struggle for survival. Your team— a group of explorers— ventures into the most dangerous parts of the metro to find resources and uncover the secrets of a vanished expedition. But the underground hides more than just the ruins of the past— something far more terrifying lurks in the shadows. Time is against you: flashlight batteries are dying, oxygen is running low, and the sound of footsteps draws closer. Will you escape this labyrinth and save the world above?'
    },
    {
        id: 9,
        type: 'Detective',
        name: 'Old attic',
        countPeople: '2-3 people',
        level: 'Easy',
        time: '90 min',
        description: 'An old house, cloaked in the dust of time, guards its secrets in the attic— a place no one has dared to enter for decades. Legends tell of people who vanished here, and whispers from the past still echo in the dark corners. Your team sets out to uncover what lies behind the locked doors and crumbling walls. Creaking floorboards, mysterious objects, and ancient notes will guide your way to the truth. But be careful— the attic holds more than just memories; something lingers here, something that does not want to be disturbed. Can you unravel the mystery and escape before history repeats itself?'
    }
];
module.exports = { cardsQuest };
