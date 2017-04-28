/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

import User from '../api/user/user.model';
import Songrecords from '../api/songrecords/songrecords.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {
 /*   Thing.find({}).remove()
      .then(() => {
        Thing.create({
          name: 'Development Tools',
          info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
                + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
                + 'Stylus, Sass, and Less.'
        }, {
          name: 'Server and Client integration',
          info: 'Built with a powerful and fun stack: MongoDB, Express, '
                + 'AngularJS, and Node.'
        }, {
          name: 'Smart Build System',
          info: 'Build system ignores `spec` files, allowing you to keep '
                + 'tests alongside code. Automatic injection of scripts and '
                + 'styles into your index.html'
        }, {
          name: 'Modular Structure',
          info: 'Best practice client and server structures allow for more '
                + 'code reusability and maximum scalability'
        }, {
          name: 'Optimized Build',
          info: 'Build process packs up your templates as a single JavaScript '
                + 'payload, minifies your scripts/css/images, and rewrites asset '
                + 'names for caching.'
        }, {
          name: 'Deployment Ready',
          info: 'Easily deploy your app to Heroku or Openshift with the heroku '
                + 'and openshift subgenerators'
        });
      })
    .then(() => console.log('finished populating things'))
    .catch(err => console.log('error populating things', err));
*/
    Songrecords.find({}).remove()
      .then(() => {
        Songrecords.create({
          _id: '59039d8a7ef2a628e0827123',
          songName: 'Disarm',
          artistName: 'Smashing Pumpkins',
          difficulty: 100,
          speed: 100,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T19:52:42.112Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: true
          }]
        }, {
          _id: '59039efd6bb4e03fd403b04f',
          songName: 'Alive',
          artistName: 'Pearl Jam',
          difficulty: 100,
          speed: 70,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T19:58:53.403Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: true
          }]
        }, {
          _id: '5903acb8b1699a1ae4af2845',
          songName: 'Come As You Are',
          artistName: 'Nirvana',
          difficulty: 100,
          speed: 90,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T20:57:28.183Z',
          advancedSettings: [{
            difficultyRepeats: '2',
            speedRepeats: '2',
            tolerance: 'Med',
            speedIncrement: '5',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: false
          }]
        }, {
          _id: '5903adc6b1699a1ae4af2847',
          songName: 'She Bangs the Drums',
          artistName: 'The Stone Roses',
          difficulty: 100,
          speed: 70,
          levelUp: true,
          accelerate: true,
          dateCreated: '2017-04-28T21:01:58.998Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: true,
            autoContinue: true,
            showMistakes: true
          }]
        }, {
          _id: '5903af12b1699a1ae4af2848',
          songName: 'Starlight',
          artistName: 'Muse',
          difficulty: 100,
          speed: 60,
          levelUp: false,
          accelerate: false,
          dateCreated: '2017-04-28T21:07:30.823Z',
          advancedSettings: [{
            difficultyRepeats: '3',
            speedRepeats: '2',
            tolerance: 'Low',
            speedIncrement: '3',
            rewindAnimation: true,
            masterMode: false,
            autoContinue: true,
            showMistakes: true
          }]
        })

        .then(() => console.log('finished populating songs'))
        .catch(err => console.log('error populating users', err));
      });

    User.find({}).remove()
      .then(() => {
        User.create({
          provider: 'local',
          name: 'Test User',
          email: 'test@example.com',
          password: 'test'
        }, {
          provider: 'local',
          role: 'admin',
          name: 'Admin',
          email: 'admin@example.com',
          password: 'admin'
        })
        .then(() => console.log('finished populating users'))
        .catch(err => console.log('error populating users', err));
      });
  }
}
