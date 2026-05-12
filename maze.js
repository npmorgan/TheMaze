const wizardRoom = {
  text: 'Wizard room',
  img: 'media/wizard-room.jpg',
  hotspots: [
    {
      label: 'Read spell book',
      region: [20, 20, 40, 50],
      next: {
        text: "wizard appears\nHey! don't touch my stuff",
        img: 'media/wizard-appears.jpg',
        hotspots: [
          {
            label: 'Continue',
            region: [30, 40, 40, 30],
            next: {
              text: "oh wow it’s the two headed nonbinary wizard. they’re famous in this part of town",
              img: 'media/two-headed-wizard.jpg',
              hotspots: [
                {
                  label: 'Continue',
                  region: [30, 40, 40, 30],
                  next: {
                    text: "wizard\ndon't worry about it. everybody makes mistakes. anyways what can I help you with?",
                    img: 'media/wizard-help.jpg',
                    hotspots: [
                      {
                        label: "ignore the irony of asking this two headed nonbinary wizard for help finding your baby’s gender?",
                        region: [10, 20, 80, 30],
                        next: {
                          text: 'jump down trap door',
                          img: 'media/trap-door.jpg',
                          hotspots: [
                            {
                              label: 'Go to kitchen',
                              region: [30, 40, 40, 30],
                              next: {
                                text: 'kitchen',
                                img: 'media/kitchen.jpg',
                                hotspots: [
                                  {
                                    label: 'Look in fridge',
                                    region: [5, 20, 40, 60],
                                    next: {
                                      text: 'cats eating a big fish',
                                      img: 'media/cats-fish.jpg',
                                      hotspots: [
                                        {
                                          label: 'Back to kitchen',
                                          region: [30, 70, 40, 20],
                                          next: null,
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    label: 'Open cabinet',
                                    region: [55, 20, 35, 60],
                                    next: {
                                      text: 'goblin inside cabinet',
                                      img: 'media/goblin-cabinet.jpg',
                                      hotspots: [
                                        {
                                          label: "goblin inside cabinet\nLOL I'll never hand over the gender. that is, unless you have any goblin snacks?",
                                          region: [10, 20, 80, 30],
                                          next: {
                                            text: "wizard\nWait! looks like there's some dust on that goblin snack bag.",
                                            img: 'media/wizard-dust.jpg',
                                            hotspots: [
                                              {
                                                label: 'blow away dust, reveal POISON goblin snack',
                                                region: [20, 30, 60, 40],
                                                next: {
                                                  text: 'oh shit, should we murder this goblin right now?',
                                                  img: 'media/poison-snack.jpg',
                                                  hotspots: [
                                                    {
                                                      label: 'no just strangle him bart style',
                                                      region: [20, 40, 60, 30],
                                                      next: {
                                                        text: "wizard strangles the goblin bart style\nhand over the baby gender cretin",
                                                        img: 'media/strangle.jpg',
                                                        hotspots: [
                                                          {
                                                            label: "baby gender pops out of goblin's back pocket, click on it",
                                                            region: [40, 40, 20, 20],
                                                            next: {
                                                              text: 'little animation of the egg opening to reveal the gender congrats, your baby is awesome',
                                                              img: 'media/egg.jpg',
                                                              hotspots: [
                                                                {
                                                                  label: 'Continue',
                                                                  region: [30, 70, 40, 20],
                                                                  next: {
                                                                    text: 'all the creatures hanging out together with your baby having a good time THE END',
                                                                    img: 'media/the-end.jpg',
                                                                    win: true,
                                                                    winText:
                                                                      'all the creatures hanging out together with your baby having a good time THE END',
                                                                  },
                                                                },
                                                              ],
                                                            },
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        label: 'ignore - dead end',
                        region: [10, 60, 80, 20],
                        next: {
                          text: 'ignore - dead end',
                          img: 'media/dead-end.jpg',
                          dead: true,
                          deathText: 'ignore - dead end',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      label: 'wizard closet - no goblins here',
      region: [65, 20, 25, 60],
      next: null,
    },
  ],
};

const kitchen = wizardRoom.hotspots[0]
  .next.hotspots[0]
  .next.hotspots[0]
  .next.hotspots[0]
  .next;

kitchen.hotspots[0].next.hotspots[0].next = kitchen;
wizardRoom.hotspots[1].next = wizardRoom;

const tree = {
  text: 'Start: Cupcake',
  img: 'media/cupcake.jpg',
  hotspots: [
    {
      label: 'goblin in cupcake',
      region: [30, 30, 40, 40],
      next: {
        text: 'goblin runs',
        img: 'media/goblin-runs.jpg',
        hotspots: [
          {
            label: 'Dark Hall',
            region: [5, 20, 40, 60],
            next: {
              text: 'torch',
              img: 'media/torch.jpg',
              hotspots: [
                {
                  label: 'Continue',
                  region: [30, 40, 40, 30],
                  next: {
                    text: 'illuminated room',
                    img: 'media/illuminated-room.jpg',
                    hotspots: [
                      {
                        label: 'ladder',
                        region: [10, 20, 30, 60],
                        next: {
                          text: 'Mouse party room',
                          img: 'media/mouse-party.jpg',
                          hotspots: [
                            {
                              label: 'Back to illuminated room',
                              region: [30, 70, 40, 20],
                              next: null,
                            },
                          ],
                        },
                      },
                      {
                        label: 'doorway',
                        region: [60, 20, 30, 60],
                        next: {
                          text: 'creature holding goblin snack',
                          img: 'media/creature-snack.jpg',
                          hotspots: [
                            {
                              label: 'closeup on goblin snack',
                              region: [30, 30, 40, 40],
                              next: {
                                text: 'take goblin snack',
                                img: 'media/take-snack.jpg',
                                hotspots: [
                                  {
                                    label: 'doorway',
                                    region: [30, 40, 40, 30],
                                    next: wizardRoom,
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "don't chase",
            region: [55, 20, 40, 60],
            next: {
              text: "don't chase",
              img: 'media/dont-chase.jpg',
              dead: true,
              deathText: "don't chase",
            },
          },
        ],
      },
    },
  ],
};

const illuminatedRoom =
  tree.hotspots[0]
    .next.hotspots[0]
    .next.hotspots[0]
    .next;

illuminatedRoom.hotspots[0].next.hotspots[0].next = illuminatedRoom;
