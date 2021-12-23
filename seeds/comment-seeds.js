const sequelize = require('../config/connection');
const { Comment } = require('../models');

const commentData = [
  {
    comment_text:
      'I thoroughly enjoyed this from beginning to end. This was pure gothic-vampire horror but presented in a way the characters all had human emotions and interpersonal problems. I really liked the descriptive imagery used throughout the entire story: from dark 1700s Louisiana to shadowy Old Country Europe. The tone contained all the elements of a good vampire/horror story: dark and gothic. These were real vampires that killed people; whether to feed or the thrill of the hunt.',
    user_id: 1,
    book_id: 2,
  },
  {
    comment_text:
      'WOW. Ok, so I actually cried during this book (it was a stressful day, but Im usually not a weeper). This book captures the epic grandiosity and scope that I remember as a kid reading Eddings and Feist and Jordan. I didnt know what was going on all the time, but I was keenly aware of the great plot, the secrets, and the depth of world building and character in this book. Yes, its REALLY long, and yes, it lags a bit from time to time under all the philosophy, but honestly I was just staggered by the scope of what this book is, and what the rest of this series has the potential to me. Ive read most of Sandersons books (save the Wheel of Time which NEED TO BE READ) but he has really outdone himself with this. BIG FAN TO SAY THE LEAST! If you like big epic fantasy you have to read this.',
    user_id: 2,
    book_id: 1,
  },
  {
    comment_text:
      'The title says it all. I. Became. Obsessed. Oh, you think Im kidding? Let me explain. I bought the physical copy of this book due to a suggestion from a friend after finishing all of the Song of Ice and Fire novels (that are currently out). I started to read the first part of the book with the Heralds and then the second first part of the book with Szeth..and I couldnt get into it. The magic didnt make sense, the fighting was weird, I just couldnt get into it...but I pushed on. I started to read about Kaladin, Shallan, Dalinar, Syl, and Jasnah. I started to learn more about them, more about what was driving them, who they were, what they were about, what was going on with them, and its like Ive said before, I became obsessed. I HAD to know more. I took the book with me, everywhere that I went, picking it up and reading a few pages during small bits of spare time. I would think about it driving to work, the magic system, what was happening with the characters, what was happening with the world all popped into my head at weird times. I started to miss the book while driving so I bought the audible version of the book, even though I hated Michael Kramer at first (he gets better the more you listen). I bought the Kindle version so I wouldnt have to lug around my physical copy anymore...and so I could read on my web browser in between patients at work. When the physical copy got destroyed by my 2 year old daughter, I went and bought the book for the 4th time! What Im trying to point out is that the book is THAT good. Good enough to purchase it 4 times on 3 different mediums. The world is incredibly well built, the characters are well thought out and they truly become your friends, you root for the invite everything that they do, other characters you will hate, love, and hate again. Sanderson is that good. The magic system is so convoluted and hard to grasp, there is so much to it, it truly is a wonder and really amazes me.that somebody could think this all up and keep it all straight while writing it.',
    user_id: 3,
    book_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
