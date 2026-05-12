const tree = {
  text: 'Start: Cupcake.',
  img: 'media/cupcake.jpg',
  hotspots: [
    {
      label: 'Investigate the cupcake',
      region: [35, 35, 30, 30],
      next: {
        text: 'A goblin bursts out of the cupcake and runs away.',
        img: 'media/goblin-run.jpg',
        hotspots: [
          {
            label: 'Chase the goblin',
            region: [55, 30, 30, 50],
            next: {
              text: 'You enter a dark hall.',
              img: 'media/dark-hall.jpg',
              hotspots: [
                {
                  label: 'Take the torch',
                  region: [40, 25, 20, 50],
                  next: {
                    text: 'The room ahead is illuminated.',
                    img: 'media/illuminated-room.jpg',
                    hotspots: [
                      {
                        label: 'Climb the ladder',
                        region: [10, 15, 30, 70],
                        next: {
                          text: 'You enter the mouse party room.',
                          img: 'media/mouse-party.jpg',
                          hotspots: [
                            {
                              label: 'Return to illuminated room',
                              region: [60, 20, 25, 60],
                              next: {
                                text: 'Back in the illuminated room.',
                                img: 'media/illuminated-room.jpg',
                                hotspots: [
                                  {
                                    label: 'Go through doorway',
                                    region: [60, 25, 25, 60],
                                    next: wizardRoom(),
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        label: 'Go through doorway',
                        region: [60, 25, 25, 60],
                        next: wizardRoom(),
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            label: "Don't chase",
            region: [5, 35, 30, 40],
            next: {
              text: 'You let the goblin escape forever.',
              img: 'media/dead-end.jpg',
              dead: true,
              deathText: 'The goblin escapes with the baby gender forever.',
            },
          },
        ],
      },
    },
  ],
};

function wizardRoom() {
  return {
    text: 'You enter the wizard room.',
    img: 'media/wizard-room.jpg',
    hotspots: [
      {
        label: 'Read spell book',
        region: [20, 20, 30, 50],
        next: {
          text:
            "A wizard appears. 'Hey! Don't touch my stuff.' Oh wow — it's the famous two-headed nonbinary wizard.",
          img: 'media/wizard.jpg',
          hotspots: [
            {
              label: 'Ask for help',
              region: [30, 30, 40, 40],
              next: {
                text:
                  "'Don't worry about it. Everybody makes mistakes. Anyways, what can I help you with?'",
                img: 'media/wizard-talk.jpg',
                hotspots: [
                  {
                    label: 'Ask about your baby gender',
                    region: [25, 25, 50, 50],
                    next: {
                      text:
                        'The wizard suggests checking the trap door.',
                      img: 'media/trap-door.jpg',
                      hotspots: [
                        {
                          label: 'Jump down trap door',
                          region: [35, 40, 30, 30],
                          next: kitchenRoom(),
                        },
                      ],
                    },
                  },
                  {
                    label: 'Ignore wizard',
                    region: [5, 70, 30, 20],
                    next: {
                      text: 'You awkwardly leave without solving anything.',
                      img: 'media/dead-end.jpg',
                      dead: true,
                      deathText:
                        'You leave without finding the baby gender.',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: 'Open wizard closet',
        region: [65, 20, 20, 60],
        next: {
          text: 'Wizard closet. No goblins here.',
          img: 'media/closet.jpg',
          hotspots: [
            {
              label: 'Return to wizard room',
              region: [5, 25, 20, 50],
              next: wizardRoom(),
            },
          ],
        },
      },
    ],
  };
}

function kitchenRoom() {
  return {
    text: 'You land in the kitchen.',
    img: 'media/kitchen.jpg',
    hotspots: [
      {
        label: 'Look in fridge',
        region: [10, 20, 30, 60],
        next: {
          text: 'Cats are eating a huge fish.',
          img: 'media/cats.jpg',
          hotspots: [
            {
              label: 'Back to kitchen',
              region: [5, 30, 20, 40],
              next: kitchenRoom(),
            },
          ],
        },
      },
      {
        label: 'Open cabinet',
        region: [60, 20, 25, 60],
        next: {
          text:
            "A goblin is hiding inside. 'LOL I'll never hand over the gender... unless you have any goblin snacks?'",
          img: 'media/goblin-cabinet.jpg',
          hotspots: [
            {
              label: 'Offer goblin snack',
              region: [30, 30, 40, 40],
              next: {
                text:
                  "The wizard notices dust on the snack bag. It's POISON goblin snack.",
                img: 'media/poison-snack.jpg',
                hotspots: [
                  {
                    label: 'Use poison snack',
                    region: [55, 25, 30, 50],
                    next: {
                      text:
                        'The goblin immediately dies from poison. The baby gender falls out of its pocket.',
                      img: 'media/goblin-dead.jpg',
                      hotspots: [
                        {
                          label: 'Open the gender egg',
                          region: [35, 35, 30, 30],
                          next: {
                            text:
                              'The egg opens. Congrats — your baby is awesome.',
                            img: 'media/gender-reveal.jpg',
                            win: true,
                            winText:
                              'All the creatures celebrate together with your baby. THE END.',
                          },
                        },
                      ],
                    },
                  },
                  {
                    label: 'Strangle goblin Bart style',
                    region: [10, 25, 30, 50],
                    next: {
                      text:
                        "The wizard strangles the goblin Bart style. 'Hand over the baby gender, cretin.'",
                      img: 'media/bart-style.jpg',
                      hotspots: [
                        {
                          label: 'Take the baby gender',
                          region: [40, 35, 25, 30],
                          next: {
                            text:
                              'The baby gender pops out of the goblin’s back pocket.',
                            img: 'media/gender-egg.jpg',
                            hotspots: [
                              {
                                label: 'Open the egg',
                                region: [35, 35, 30, 30],
                                next: {
                                  text:
                                    'The egg opens to reveal the gender. Congrats — your baby is awesome.',
                                  img: 'media/gender-reveal.jpg',
                                  win: true,
                                  winText:
                                    'All the creatures hang out together with your baby. THE END.',
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
  };
}
