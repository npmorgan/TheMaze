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
  text: 'THE END',
  img: 'media/IMG_0232.PNG',
  win: true,
  winText: 'THE END',
};


// ── n18 → n19 ─────────────────────────────────────────────────────────────────

const eggOpening = {
  text: 'Congrats, your baby is awesome.',
  img: 'media/IMG_0232.PNG',
  hotspots: [
    { label: 'Continue', region: [0, 0, 100, 100], next: theEnd },
  ],
};
const genderFind8 = {
  text: '!!!!!!!!!!!!!!!!',
  img: 'media/IMG_0231.PNG',
  hotspots: [
    { label: 'click', region: [0, 0, 100, 100], next: eggOpening },
  ],
  };
const genderFind7 = {
  text: '',
  img: 'media/IMG_0230.PNG',
  hotspots: [
    { label: '???????????????', region: [66, 40, 11, 23], next: genderFind8 },
  ],
  };
const genderFind6 = {
  text: '',
  img: 'media/IMG_0229.PNG',
  hotspots: [
    { label: '!!!!!!!!!!', region: [60, 41, 17, 26], next: genderFind7 },
  ],
  };
const genderFind5_5 = {
  text: 'there it is!',
  img: 'media/IMG_0228.PNG',
  hotspots: [
    { label: '!!!!!!', region: [11, 40, 77, 46], next: genderFind6 },
  ],
  };
const genderFind5 = {
  text: 'there it is!',
  img: 'media/IMG_0227.PNG',
  hotspots: [
    { label: 'keep going!', region: [51, 41, 34, 39], next: genderFind5_5 },
  ],
  };
const genderFind4 = {
  text: 'there it is!',
  img: 'media/IMG_0226.PNG',
  hotspots: [
    { label: 'almost there', region: [51, 41, 34, 39], next: genderFind5 },
  ],
  };
const genderFind3 = {
  text: 'there it is!',
  img: 'media/IMG_0225.PNG',
  hotspots: [
    { label: 'investigate some more', region: [51, 41, 34, 39], next: genderFind4 },
  ],
  };
const genderFind2 = {
  text: 'there it is!',
  img: 'media/IMG_0224.PNG',
  hotspots: [
    { label: 'keep investigating', region: [51, 41, 34, 39], next: genderFind3 },
  ],
  };
const genderFind = {
  text: 'there it is!',
  img: 'media/IMG_0223.PNG',
  hotspots: [
    { label: 'investigate', region: [51, 41, 34, 39], next: genderFind2 },
  ],
  };


// ── V: oh shit should we murder this goblin → n15 ────────────────────────────
const murderScene4 = {
  text: '',
  img: 'media/IMG_0221_2.PNG',
  hotspots: [
    { label: 'investigate', region: [59, 5, 14, 13], next: genderFind },
  ],
};
const murderScene3 = {
  text: '',
  img: 'media/IMG_0221_1.PNG',
  hotspots: [
    { label: 'flick!', region: [56, 45, 27, 34], next: murderScene4 },
  ],
};
const murderScene2 = {
  text: 'gimme that gender goddamit',
  img: 'media/IMG_0220.PNG',
  hotspots: [
    { label: 'give that goblin the business', region: [34, 16, 43, 83], next: murderScene3 },
  ],
};

const murderScene = {
  text: '',
  img: 'media/IMG_0219.PNG',
  hotspots: [
    { label: 'get him!', region: [36, 0, 48, 21], next: murderScene2 },
  ],
};
const blowDustScene4 = {
  text: 'oh shit should we murder this goblin right now',
  img: 'media/IMG_0212.PNG',
  hotspots: [
    { label: 'no just strangle him bart style', region: [36, 0, 48, 21], next: murderScene },
  ],
};

// ── U: blow away dust → V ────────────────────────────────────────────────────
const blowDustScene3 = {
  text: 'oh shit should we murder this goblin right now',
  img: 'media/IMG_0215_3.PNG',
  hotspots: [
    { label: 'continue', region: [20, 30, 60, 40], next: blowDustScene4 },
  ],
};

const blowDustScene2 = {
  text: '',
  img: 'media/IMG_0215_2.PNG',
  hotspots: [
    { label: 'continue', region: [0, 0, 100, 100], next: blowDustScene3 },
  ],
};

const blowDustScene = {
  text: '',
  img: 'media/IMG_0215_1.PNG',
  hotspots: [
    { label: 'continue', region: [0, 0, 100, 100], next: blowDustScene2 },
  ],
};


// ── T: wizard wait → U ────────────────────────────────────────────────────────

const wizardWait = {
  text: "",
  img: 'media/IMG_0214_2.PNG',
  hotspots: [
    { label: 'blow away dust', region: [71, 45, 18, 32], next: blowDustScene },
  ],
};

const snacksOffer = {
  text: "good thing you picked these up earlier",
  img: 'media/IMG_0214_1.PNG',
  hotspots: [
    { label: 'give the snacks', region: [54, 43, 16, 32], next: wizardWait },
  ],
};

const goblinSpeech = {
  text: "omg get a load of this guy",
  img: 'media/IMG_0213.PNG',
  hotspots: [
    { label: 'Produce goblin snacks', region: [34, 0, 51, 22], next: snacksOffer },
  ],
};

const goblinCabinet2 = {
  text: 'Hey! There he is - hand over the gender, freak!',
  img: 'media/IMG_0212.PNG',
  hotspots: [
    {
      label: "continue",
      region: [34, 0, 51, 22],
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
      region: [34, 0, 51, 22],
      next: goblinCabinet2,
    },
  ],
};


// ── P: cats eating a big fish → kitchen (wired below) ────────────────────────

const catsFish = {
  text: 'thats pretty cute but lets not get distracted',
  img: 'media/IMG_0210.PNG',
  hotspots: [
    { label: 'Back to kitchen', region: [0, 0, 100, 100], next: null }, // ← wired below
  ],
};


// ── n14: kitchen ──────────────────────────────────────────────────────────────

const kitchen = {
  text: 'kitchen',
  img: 'media/IMG_0209.PNG',
  hotspots: [
    { label: 'Look in fridge', region: [2, 9, 29, 77],  next: catsFish },      // O → P
    { label: 'Check cabinet',   region: [34, 0, 51, 22], next: goblinCabinet }, // Q → R
  ],
};

// Wire cats-fish back to kitchen (P → n14)
catsFish.hotspots[0].next = kitchen;


// ── N: jump down trap door → kitchen ──────────────────────────────────────────

const trapDoor = {
  text: '',
  img: 'media/IMG_0208.PNG',
  hotspots: [
    { label: 'jump down trap door', region: [5, 73, 33, 13], next: kitchen },
  ],
};

const wizardHelp3 = {
  text: "",
  img: 'media/IMG_0207.PNG',
  hotspots: [
    {
      label: "continue",
      region: [0, 0, 100, 100],
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
      region: [0, 0, 100, 100],
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
      label: "ignore the irony of asking this \n two headed nonbinary wizard for help \n finding your baby's gender?",
      region: [0, 0, 100, 100],
      next: wizardHelp2,      // n11 → N
    },
  ],
};

// M: oh wow it's the two headed nonbinary wizard
const famousWizard = {
  text: "oh wow it's the two headed nonbinary wizard. they're famous in this part of town",
  img: 'media/IMG_0201_2.PNG',
  hotspots: [
    { label: 'Apologize', region: [0, 0, 100, 100], next: wizardHelp },
  ],
};

// L: wizard appears — Hey! don't touch my stuff
const wizardAppears = {
  text: "oh wow it's the two headed nonbinary wizard. they're famous in this part of town",
  img: 'media/IMG_0201_1.PNG',
  hotspots: [
    { label: 'Continue', region: [0, 0, 100, 100], next: famousWizard },
  ],
};


const wizardCloset = {
  text: 'no goblins in here',
  img: 'media/IMG_0199.PNG',
  hotspots: [
    { label: 'back to the wizard room', region: [0, 0, 100, 100], next: null }
  ],
};

// J: wizard room (n9 closet loop wired below)
const wizardRoom = {
  text: 'whoa this room is kind of cool',
  img: 'media/IMG_0198.PNG',
  hotspots: [
    { label: 'Research goblin catching spells', region: [32, 25, 11, 14], next: wizardAppears }, // K
    { label: 'wizard closet', region: [76, 8, 17, 66], next: wizardCloset },          // n9 ← wired below
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
    { label: 'Enter the wizard room', region: [72, 9, 19, 45], next: wizardRoom },
  ],
};


// ── n7: take goblin snack → n8 ───────────────────────────────────────────────

const takeGoblinSnack = {
  text: 'thanks!',
  img: 'media/IMG_0196.PNG', // TODO
  hotspots: [
    { label: 'Continue', region: [2, 0, 98, 100], next: doorwayToWizard },
  ],
};


// ── n6: closeup on goblin snack → n7 ─────────────────────────────────────────

const snackCloseup = {
  text: 'does that say goblin snack? hmm that could be useful',
  img: 'media/IMG_0195.PNG', // TODO
  hotspots: [
    { label: 'take goblin snack', region: [63, 14, 23, 31], next: takeGoblinSnack },
  ],
};


// ── n2: creature holding goblin snack → n6 ───────────────────────────────────

const creatureSnack = {
  text: 'oh hi little guy. whatcha got there?',
  img: 'media/IMG_0194.PNG', // TODO
  hotspots: [
    { label: 'Look closer', region: [18, 16, 41, 59], next: snackCloseup },
  ],
};


// ── H: mouse party room → D (wired below) ────────────────────────────────────

const mouseParty = {
  text: 'oops looks like theres a mouse party in here better head back',
  img: 'media/IMG_0193.PNG', // TODO
  hotspots: [
    { label: 'Leave', region: [2, 0, 98, 100], next: null }, // ← wired below
  ],
};



// ── D: illuminated room ───────────────────────────────────────────────────────

const illuminatedRoom = {
  text: 'Illuminated room',
  img: 'media/IMG_0192.PNG', // TODO
  hotspots: [
    { label: 'ladder',  region: [72, 0, 16, 82], next: mouseParty },        // G
    { label: 'doorway', region: [12, 20, 26, 54], next: creatureSnack },  // n1
  ],
};

// Wire mouse party room back to illuminated room (H → D)
mouseParty.hotspots[0].next = illuminatedRoom;


const torchScene3 = {
  text: 'oh, a door!',
  img: 'media/IMG_0191.PNG',
  hotspots: [
    { label: 'I sure hope this\n leads to an illuminated room', region: [80, 28, 12, 27], next: illuminatedRoom },
  ],
};

const torchScene2 = {
  text: 'this is a long tunnel',
  img: 'media/IMG_0190.PNG',
  hotspots: [
    { label: 'keep walking ig', region: [2, 0, 98, 100], next: torchScene3 },
  ],
};


// ── n4: torch → D ────────────────────────────────────────────────────────────

const torchScene = {
  text: 'you got a torch',
  img: 'media/IMG_0189.PNG',
  hotspots: [
    { label: 'fumble around', region: [38, 4, 61, 83], next: torchScene2 },
  ],
};


// ── n3: Dark Hall → n4 ───────────────────────────────────────────────────────

const darkHall = {
  text: 'whoa this hallway is pretty dark and creepy',
  img: 'media/IMG_0188.PNG',
  hotspots: [
    { label: 'find some light', region: [28, 12, 42, 73], next: torchScene },
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
    { label: 'heck no', region: [56, 12, 32, 50], next: darkHall },
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
    { label: 'Continue', region: [2, 0, 98, 100], next: whatDoTheyHave },
  ],
};


// ── B: investigate → n20 ─────────────────────────────────────────────────────

const investigateScene = {
  text: 'oh shit. theres a sneaky little goblin up in here!',
  img: 'media/IMG_0184.PNG',
  hotspots: [
    { label: 'continue', region: [2, 0, 98, 100], next: whoIsThat },
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
