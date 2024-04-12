const mongoose = require('mongoose');
const Module = require('./models/model')

mongoose.connect('mongodb+srv://chandhokhargun:kaJ39GHrMHTZ5WP2@straddle.yee8mpb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const data = [
  // Model 3
  {
    name: 'Module 1',
    topics: [
      {
        name: 'Topic 1',
        videos: [
          { title: 'Video 3.1.1', url: 'https://www.youtube.com/embed/sx8sBN2prAE?si=EOmuFs29jHAlfxS9' },
          { title: 'Video 3.1.2', url: 'https://www.youtube.com/embed/mm88r8jhrZs?si=6A0Umnu5GeK-Ul6I' },
          { title: 'Video 3.1.3', url: 'https://www.youtube.com/embed/r2LzjTUs3lo?si=typyTZmj9JTqX19E' },
          { title: 'Video 3.1.4', url: 'https://www.youtube.com/embed/aE9HrZT3Dmk?si=LGNCV3eDkc82nmk8' },
          { title: 'Video 3.1.5', url: 'https://www.youtube.com/embed/SoCTj459O6Y?si=9X1PwSLd580ObKd0' },
          { title: 'Video 3.1.6', url: 'https://www.youtube.com/embed/whe0B7hJJJ0?si=edZruPjRoicL_20R' },
        ],
      },
      {
        name: 'Topic 2',
        videos: [
          { title: 'Video 3.2.1', url: 'https://www.youtube.com/embed/gGTlvi3KyB0?si=z67nvZCikAEBjKPA' },
          { title: 'Video 3.2.2', url: 'https://www.youtube.com/embed/dP7Le1YdUXw?si=bhIL3bV35AZVPTFM' },
          { title: 'Video 3.2.3', url: 'https://www.youtube.com/embed/ulOQ09naRDc?si=KBd3WBwzNzPkQIgi' },
          { title: 'Video 3.2.4', url: 'https://www.youtube.com/embed/94Vph1miSYg?si=E0MzL3Z2Mv_b7n0r' },
        ],
      },
      {
        name: 'Topic 3',
        videos: [
          { title: 'Video 3.3.1', url: 'https://www.youtube.com/embed/IuCIjXMX1Ss?si=Fhb-6Vi4uet66usv' },
          { title: 'Video 3.3.2', url: 'https://www.youtube.com/embed/FB4F-6njl3E?si=BYe05icgUITyo3Ko' },
          { title: 'Video 3.3.3', url: 'https://www.youtube.com/embed/jU5OociN7_E?si=eqnArRc1kJJXcjyX' },
          { title: 'Video 3.3.4', url: 'https://www.youtube.com/embed/Oqah_J4aWlw?si=VGhyp7IkDcqJ_RmY' },
          { title: 'Video 3.3.5', url: 'https://www.youtube.com/embed/kABCoXuhlxk?si=EYajGtBDVVI2dQ5B' },
          { title: 'Video 3.3.6', url: 'https://www.youtube.com/embed/whe0B7hJJJ0?si=ZriXBDO-rXq_C7Tw' },
        ],
      },
    ],
  },
];


const insertData = async () => {
  try {
    await Module.insertMany(data);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
  }
};

insertData();
