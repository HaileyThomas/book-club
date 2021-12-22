const sequelize = require('../config/connection');
const { Book } = require('../models');

const bookData = [
  {
    title: 'The Way Of Kings',
    author: 'Brandon Sanderson',
    publication: 'August 31, 2010',
    description:
      'The Way of Kings is an epic fantasy novel written by American author Brandon Sanderson and the first book in The Stormlight Archive series. The novel was published on August 31, 2010, by Tor Books. The Way of Kings consists of one prelude, one prologue, 75 chapters, an epilogue and 9 interludes.',
    user_id: 1,
  },
  {
    title: 'Interview with the Vampire',
    author: 'Anne Rice',
    publication: 'May 5, 1976',
    description:
      'We are in a small room with the vampire, face to face, as he speaks--as he pours out the hypnotic, shocking, moving, and erotically charged confessions of his first two hundred years as one of the living dead. The time is now. We are in a small room with the vampire, face to face, as he speaks--as he pours out the hypnotic, shocking, moving, and erotically charged confessions of his first two hundred years as one of the living dead. . . He speaks quietly, plainly, even gently ... carrying us back to the night when he departed human existence as heir--young, romantic, cultivated--to a great Louisiana plantation, and was inducted by the radiant and sinister Lestat into the other, the "endless," life ... learning first to sustain himself on the blood of cocks and rats caught in the raffish...',
    user_id: 2,
  },
  {
    title: 'Forrest Gump',
    author: 'Winston Groom',
    publication: '1986',
    description:
      'Six foot six, 242 pounds, and possessed of a scant IQ of 70, Forrest Gump is the lovable, surprisingly savvy hero of this classic comic tale. His early life may seem inauspicious, but when the University of Alabamas football team drafts Forrest and makes him a star, it sets him on an unbelievable path that will transform him from Vietnam hero to world-class Ping-Pong player, from wrestler to entrepreneur. With a voice all his own, Forrest is telling all in a madcap romp through three decades of American history.',
    user_id: 2,
  },
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
