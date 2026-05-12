// ─────────────────────────────────────────────────────────────────────────────
//  cupcake_maze.js  ·  Adapted from cupcake.pdf
// ─────────────────────────────────────────────────────────────────────────────

const tree = {
  icon: '',
  img: 'media/cupcake.jpg',
  leftImg: 'media/goblin.jpg',
  rightImg: 'media/dark_hall.jpg',

  text: 'What a delicious looking cupcake. I wonder if the gender of your baby is inside?',

  left: {
    icon: '',
    img: '',
    leftImg: '',
    rightImg: '',

    text: 'Oh shit. There’s a sneaky little goblin up in here!',

    right: {
      icon: '',
      img: '',
      leftImg: 'media/torch.jpg',
      rightImg: 'media/mouse_party.jpg',

      text: 'Dang that goblin just stole your baby’s gender. Are you gonna let him get away with that?',

      left: {
        icon: '',
        img: '',
        leftImg: 'media/illuminated_room.jpg',
        rightImg: 'media/dark_hall.jpg',

        text: 'Whoa this hallway is pretty dark and creepy.',

        left: {
          icon: '',
          img: '',
          leftImg: 'media/mouse_party.jpg',
          rightImg: 'media/wizard_room.jpg',

          text: 'The torch lights up the hallway. You can now see two paths ahead.',

          left: {
            icon: '',
            img: '',
            leftImg: '',
            rightImg: '',

            text: 'Oops looks like there’s a mouse party in here. Better head back.',

            dead: true,
            deathText:
              'The mouse party completely ignores your goblin emergency. You retreat in shame.',
          },

          right: {
            icon: '',
            img: '',
            leftImg: 'media/spell_book.jpg',
            rightImg: 'media/wizard.jpg',

            text: 'Whoa this room is kinda cool. No goblins in here.',

            left: {
              icon: '',
              img: '',
              leftImg: '',
              rightImg: '',

              text:
                'A wizard spell book? Maybe there’s a spell in here for catching goblins.',

              right: {
                icon: '',
                img: '',
                leftImg: '',
                rightImg: '',

                text:
                  '"Hey! Don’t touch my stuff!" Oh wow — it’s the two headed nonbinary wizard. They’re famous in this part of town.',

                right: {
                  icon: '',
                  img: '',
                  leftImg: '',
                  rightImg: '',

                  text:
                    'The wizard agrees to help you find your baby’s stolen gender.',

                  right: {
                    icon: '',
                    img: '',
                    leftImg: 'media/fridge.jpg',
                    rightImg: 'media/cabinet.jpg',

                    text:
                      'You follow the wizard through a trap door into a strange kitchen.',

                    left: {
                      icon: '',
                      img: '',
                      leftImg: '',
                      rightImg: '',

                      text:
                        'There are cats eating a huge fish in the fridge. Pretty cute, but let’s not get distracted.',

                      dead: true,
                      deathText:
                        'You spend too long watching the cats eat fish and the goblin escapes forever.',
                    },

                    right: {
                      icon: '',
                      img: '',
                      leftImg: 'media/goblin_inside_cabinet.jpg',
                      rightImg: 'media/goblin_snack.jpg',

                      text:
                        'There’s some rustling coming from this cabinet.',

                      left: {
                        icon: '',
                        img: '',
                        leftImg: '',
                        rightImg: '',

                        text:
                          'Hey! There he is! "Hand over the gender, sneak!"',

                        right: {
                          icon: '',
                          img: '',
                          leftImg: 'media/poison_goblin_snack.jpg',
                          rightImg: 'media/bart_style.jpg',

                          text:
                            'The goblin refuses to hand over the gender unless you have a goblin snack.',

                          left: {
                            icon: '',
                            img: '',
                            leftImg: '',
                            rightImg: '',

                            text:
                              'The wizard notices dust on the goblin snack bag. You blow it away and reveal it is actually POISON goblin snack.',

                            right: {
                              icon: '',
                              img: '',
                              leftImg: '',
                              rightImg: '',

                              text:
                                'The wizard strangles the goblin Bart style. "Hand over the baby gender, cretin."',


                              right: {
                                icon: '',
                                img: '',
                                leftImg: '',
                                rightImg: '',

                                text:
                                  'The baby gender pops out of the goblin’s back pocket.',

                                win: true,

                                winText:
                                  'Congrats, your baby is awesome. All the creatures hang out together happily. THE END.',
                              },
                            },
                          },
                        },
                      },

                      right: {
                        icon: '',
                        img: '',
                        leftImg: '',
                        rightImg: '',

                        text:
                          'You found a goblin snack. This could be useful.',

                        right: {
                          icon: '',
                          img: '',
                          leftImg: '',
                          rightImg: '',

                          text:
                            'You take the goblin snack and continue searching for the goblin.',

                          right: {
                            icon: '',
                            img: '',
                            leftImg: '',
                            rightImg: '',

                            text:
                              'You eventually reunite with the wizard in the kitchen and confront the goblin hiding in the cabinet.',

                            right: {
                              icon: '',
                              img: '',
                              leftImg: '',
                              rightImg: '',

                              text:
                                'The goblin demands a goblin snack in exchange for the stolen gender.',

                              right: {
                                icon: '',
                                img: '',
                                leftImg: '',
                                rightImg: '',

                                text:
                                  'The wizard discovers the goblin snack is poisoned.',

                                right: {
                                  icon: '',
                                  img: '',
                                  leftImg: '',
                                  rightImg: '',

                                  text:
                                    'The goblin is defeated and the baby gender is recovered.',

                                  win: true,

                                  winText:
                                    'Congrats, your baby is awesome. All the creatures hang out together happily. THE END.',
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },

        right: {
          icon: '',
          img: '',
          leftImg: '',
          rightImg: '',

          text:
            'You wander through the dark hallway without a torch and get hopelessly lost.',

          dead: true,

          deathText:
            'Without light, the goblin escapes and your baby’s gender is lost forever.',
        },
      },

      right: {
        icon: '',
        img: '',
        leftImg: '',
        rightImg: '',

        text: 'You decide not to chase the goblin.',

        dead: true,

        deathText:
          'The goblin disappears into the darkness with your baby’s gender.',
      },
    },
  },
};
