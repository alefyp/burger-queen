const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
admin.firestore().settings({ timestampsInSnapshots: true });

exports.createProfile = functions.auth.user().onCreate(
  user => admin.firestore().doc(`users/${user.uid}`).set({
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    createdAt: new Date(),
  })
);

exports.deleteProfile = functions.auth.user().onDelete(
  user => admin.firestore().doc(`users/${user.uid}`).delete()
);

//la idea es que no lleve auth
//aquí van las otras uwu pero pues :v

// exports.myFunction = functions.firestore
//   .document('...')
//   .onWrite((change, context) => { /* ... */ });

//Eso que comenté viene de la documentación

exports.cleanUpNewreviews = functions.firestore
  .document('/orders/lol')
