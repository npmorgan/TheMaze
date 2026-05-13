// ══════════════════════════════════════════════════════════════════════════════
// GAME TREE — rebuilt from flowchart
//
// Scenes are defined bottom-up (leaves first) so every `next` reference
// already exists by the time it's used.
//
// Circular back-edges are wired AFTER construction (marked "← wired below").
//
// New scenes added by the flowchart that need artwork are marked: // TODO
// ══════════════════════════════════════════════════════════════════════════════


// ── Dead ends ─────────────────────────────────────────────────────────────────

// const dontChaseDead = {
//  text: "don't chase",
//  img: 'media/dont-chase.jpg',
//  dead: true,
//  deathText: "don't chase",
// };

// const ignoreDeadEnd = {
//   text: 'ignore - dead end',
//img: 'media/dead-end.jpg',
//  dead: true,
//  deathText: 'ignore - dead end',
//};


// ── n19: THE END ──────────────────────────────────────────────────────────────

const theEnd = {
  text: 'all the creatures hanging out together with your baby having a good time THE END',
  img: 'media/the-end.jpg',
  win: true,
  winText: 'all the creatures hanging out together with your baby having a good time THE END',
};


// ── n18 → n19 ─────────────────────────────────────────────────────────────────

const eggOpening = {
  text: 'little animation of the egg opening to reveal the gender congrats, your baby is awesome',
  img: 'media/egg.jpg',
  hotspots: [
    { label: 'Continue', region: [30, 70, 40, 20], next: theEnd },
  ],
};


// ── n17 → n18 ─────────────────────────────────────────────────────────────────

const genderPops = {
  text: "baby gender pops out of goblin's back pocket, click on it",
  img: 'media/strangle.jpg',
  hotspots: [
    {
      label: "baby gender pops out of goblin's back pocket, click on it",
      region: [40, 40, 20, 20],
      next: eggOpening,
    },
  ],
};


// ── n16: wizard strangles → n17 ───────────────────────────────────────────────

const wizardStrangles = {
  text: "wizard strangles the goblin bart style\nhand over the baby gender cretin",
  img: 'media/strangle.jpg',
  hotspots: [
    { label: 'Continue', region: [30, 40, 40, 30], next: genderPops },
  ],
};


// ── n15: no just strangle him bart style → n16 ────────────────────────────────

const strangleChoice = {
  text: 'no just strangle him bart style',
  img: 'media/poison-snack.jpg',
  hotspots: [
    { label: 'Continue', region: [30, 40, 40, 30], next: wizardStrangles },
  ],
};


// ── V: oh shit should we murder this goblin → n15 ────────────────────────────

const murderScene = {
  text: 'oh shit, should we murder this goblin right now?',
  img: 'media/poison-snack.jpg',
  hotspots: [
    { label: 'no just strangle him bart style', region: [20, 40, 60, 30], next: strangleChoice },
  ],
};


// ── U: blow away dust → V ────────────────────────────────────────────────────

const blowDustScene = {
  text: 'blow away dust, reveal POISON goblin snack',
  img: 'media/IMG_0215_1.PNG',
  hotspots: [
    { label: 'blow away dust, reveal POISON goblin snack', region: [20, 30, 60, 40], next: murderScene },
  ],
};


// ── T: wizard wait → U ────────────────────────────────────────────────────────

const wizardWait = {
  text: "Wait! looks like there's some dust on that goblin snack bag.",
  img: 'media/IMG_0214_2.PNG',
  hotspots: [
    { label: 'blow away dust', region: [20, 30, 60, 40], next: blowDustScene },
  ],
};

const snacksOffer = {
  text: "omg get a load of this guy",
  img: 'media/IMG_0214_1.PNG',
  hotspots: [
    { label: 'Continue', region: [30, 40, 40, 30], next: wizardWait },
  ],
};

const goblinSpeech = {
  text: "omg get a load of this guy",
  img: 'media/IMG_0213.PNG',
  hotspots: [
    { label: 'Produce goblin snacks', region: [30, 40, 40, 30], next: snacksOffer },
  ],
};

const goblinCabinet2 = {
  text: 'Hey! There he is - hand over the gender, freak!',
  img: 'media/IMG_0212.PNG',
  hotspots: [
    {
      label: "continue",
      region: [10, 20, 80, 30],
      next: goblinSpeech,
    },
  ],
};
// ── R: goblin inside cabinet → S ──────────────────────────────────────────────

const goblinCabinet = {
  text: 'theres some rustling coming from this cabinet',
  img: 'media/IMG_0211.PNG',
  hotspots: [
    {
      label: "check it out",
      region: [10, 20, 80, 30],
      next: goblinCabinet2,
    },
  ],
};


// ── P: cats eating a big fish → kitchen (wired below) ────────────────────────

const catsFish = {
  text: 'thats pretty cute but lets not get distracted',
  img: 'media/IMG_0210.PNG',
  hotspots: [
    { label: 'Back to kitchen', region: [30, 70, 40, 20], next: null }, // ← wired below
  ],
};


// ── n14: kitchen ──────────────────────────────────────────────────────────────

const kitchen = {
  text: 'kitchen',
  img: 'media/IMG_0209.PNG',
  hotspots: [
    { label: 'Look in fridge', region: [5, 20, 40, 60],  next: catsFish },      // O → P
    { label: 'Open cabinet',   region: [55, 20, 35, 60], next: goblinCabinet }, // Q → R
  ],
};

// Wire cats-fish back to kitchen (P → n14)
catsFish.hotspots[0].next = kitchen;


// ── N: jump down trap door → kitchen ──────────────────────────────────────────

const trapDoor = {
  text: '',
  img: 'media/IMG_0208.PNG',
  hotspots: [
    { label: 'jump down trap door', region: [30, 40, 40, 30], next: kitchen },
  ],
};

const wizardHelp3 = {
  text: "",
  img: 'media/IMG_0207.PNG',
  hotspots: [
    {
      label: "continue",
      region: [10, 20, 80, 30],
      next: trapDoor,      // n11 → N
    },
  ],
};


const wizardHelp2 = {
  text: "",
  img: 'media/IMG_0204_2.PNG',
  hotspots: [
    {
      label: "lets do it",
      region: [10, 20, 80, 30],
      next: wizardHelp3,      // n11 → N
    },
  ],
};

// ── Wizard room subtree (n10 → M → L → K → J) ────────────────────────────────

// n10: wizard — what can I help you with?
const wizardHelp = {
  text: "",
  img: 'media/IMG_0204_1.PNG',
  hotspots: [
    {
      label: "ignore the irony of asking this two headed nonbinary wizard for help finding your baby's gender?",
      region: [10, 20, 80, 30],
      next: wizardHelp2,      // n11 → N
    },
  ],
};

// M: oh wow it's the two headed nonbinary wizard
const famousWizard = {
  text: "oh wow it's the two headed nonbinary wizard. they're famous in this part of town",
  img: 'media/IMG_0201_2.PNG',
  hotspots: [
    { label: 'Apologize', region: [30, 40, 40, 30], next: wizardHelp },
  ],
};

// L: wizard appears — Hey! don't touch my stuff
const wizardAppears = {
  text: "Hey! don't touch my stuff",
  img: 'media/IMG_0201_1.PNG',
  hotspots: [
    { label: 'Continue', region: [30, 40, 40, 30], next: famousWizard },
  ],
};


const wizardCloset = {
  text: 'no goblins in here',
  img: 'media/IMG_0199.PNG',
  hotspots: [
    { label: 'back to the wizard room', region: [30, 40, 40, 30], next: null }
  ],
};

// J: wizard room (n9 closet loop wired below)
const wizardRoom = {
  text: 'whoa this room is kind of cool',
  img: 'media/IMG_0198.PNG',
  hotspots: [
    { label: 'Research goblin catching spells', region: [20, 20, 40, 50], next: wizardAppears }, // K
    { label: 'wizard closet - no goblins here', region: [65, 20, 25, 60], next: wizardCloset },          // n9 ← wired below
  ],
};
wizardCloset.hotspots[0].next = wizardRoom;
// Wire wizard closet back to wizard room (n9 → J)
//wizardRoom.hotspots[1].next = wizardRoom;


// ── n8: doorway → wizard room ─────────────────────────────────────────────────

const doorwayToWizard = {
  text: 'oh a door',
  img: 'media/IMG_0197.PNG', // TODO
  hotspots: [
    { label: 'Enter the wizard room', region: [30, 40, 40, 30], next: wizardRoom },
  ],
};


// ── n7: take goblin snack → n8 ───────────────────────────────────────────────

const takeGoblinSnack = {
  text: 'thanks!',
  img: 'media/IMG_0196.PNG', // TODO
  hotspots: [
    { label: 'Continue', region: [30, 40, 40, 30], next: doorwayToWizard },
  ],
};


// ── n6: closeup on goblin snack → n7 ─────────────────────────────────────────

const snackCloseup = {
  text: 'does that say goblin snack? hmm that could be useful',
  img: 'media/img_0195.PNG', // TODO
  hotspots: [
    { label: 'take goblin snack', region: [30, 30, 40, 40], next: takeGoblinSnack },
  ],
};


// ── n2: creature holding goblin snack → n6 ───────────────────────────────────

const creatureSnack = {
  text: 'oh hi little guy. whatcha got there?',
  img: 'media/img_0194.PNG', // TODO
  hotspots: [
    { label: 'Look closer', region: [30, 30, 40, 40], next: snackCloseup },
  ],
};


// ── H: mouse party room → D (wired below) ────────────────────────────────────

const mouseParty = {
  text: 'oops looks like theres a mouse party in here better head back',
  img: 'media/img_0193.PNG', // TODO
  hotspots: [
    { label: 'Leave', region: [30, 70, 40, 20], next: null }, // ← wired below
  ],
};



// ── D: illuminated room ───────────────────────────────────────────────────────

const illuminatedRoom = {
  text: 'Illuminated room',
  img: 'media/img_0192.PNG', // TODO
  hotspots: [
    { label: 'ladder',  region: [20, 30, 30, 40], next: mouseParty },        // G
    { label: 'doorway', region: [60, 30, 30, 40], next: creatureSnack },  // n1
  ],
};

// Wire mouse party room back to illuminated room (H → D)
mouseParty.hotspots[0].next = illuminatedRoom;


const torchScene3 = {
  text: 'oh, a door!',
  img: 'media/IMG_0191.PNG',
  hotspots: [
    { label: 'I sure hope this leads to an illuminated room', region: [30, 40, 40, 30], next: illuminatedRoom },
  ],
};

const torchScene2 = {
  text: 'this is a long tunnel',
  img: 'media/IMG_0190.PNG',
  hotspots: [
    { label: 'keep walking ig', region: [30, 40, 40, 30], next: torchScene3 },
  ],
};


// ── n4: torch → D ────────────────────────────────────────────────────────────

const torchScene = {
  text: 'you got a torch',
  img: 'media/IMG_0189.PNG',
  hotspots: [
    { label: 'fumble around', region: [30, 40, 40, 30], next: torchScene2 },
  ],
};


// ── n3: Dark Hall → n4 ───────────────────────────────────────────────────────

const darkHall = {
  text: 'whoa this hallway is pretty dark and creepy',
  img: 'media/IMG_0188.PNG',
  hotspots: [
    { label: 'find some light', region: [30, 40, 40, 30], next: torchScene },
  ],
};


// ── C: goblin runs ────────────────────────────────────────────────────────────

// const goblinRuns = {
//  text: 'goblin runs',
//  img: 'media/goblin-runs.jpg', // TODO
//  hotspots: [
//    { label: 'Chase into the Dark Hall', region: [5, 20, 40, 60],  next: darkHall },      // n3
//    { label: "don't chase",              region: [55, 20, 40, 60], next: dontChaseDead }, // n5
//  ],
//};


// ── n22: Get it! → C ─────────────────────────────────────────────────────────

const getItScene = {
  text: 'dang that goblin just stole your babys gender are you gonna let him get away with that?',
  img: 'media/IMG_0187.PNG',
  hotspots: [
    { label: 'heck no', region: [30, 40, 40, 30], next: darkHall },
  ],
};


// ── n21: What do they have? → n22 ────────────────────────────────────────────

const whatDoTheyHave = {
  text: 'What do they have there?',
  img: 'media/IMG_0186.PNG',
  hotspots: [
    { label: 'Get it!', region: [21, 27, 9, 12], next: getItScene },
  ],
};


// ── n20: Who is that? → n21 ──────────────────────────────────────────────────

const whoIsThat = {
  text: 'oh shit. theres a sneaky little goblin up in here!',
  img: 'media/IMG_0185.PNG',
  hotspots: [
    { label: 'Continue', region: [30, 50, 40, 30], next: whatDoTheyHave },
  ],
};


// ── B: investigate → n20 ─────────────────────────────────────────────────────

const investigateScene = {
  text: 'oh shit. theres a sneaky little goblin up in here!',
  img: 'media/IMG_0184.PNG',
  hotspots: [
    { label: 'continue', region: [20, 30, 60, 25], next: whoIsThat },
  ],
};


// ── A: Start / tree ───────────────────────────────────────────────────────────

const tree = {
  text: 'what a delicious looking cupcake. I wonder if the gender of your baby is inside?',
  img: 'media/IMG_0183.PNG',
  hotspots: [
    { label: 'investigate', region: [30, 30, 40, 40], next: investigateScene },
  ],
};

window.tree = tree;
