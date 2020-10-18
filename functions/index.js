const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
admin.firestore().settings({ timestampsInSnapshots: true });

// exports.createProfile = functions.auth.user().onCreate(
//   user => admin.firestore().doc(`users/${user.uid}`).set({
//     email: user.email,
//     displayName: user.displayName,
//     photoURL: user.photoURL,
//     createdAt: new Date(),
//   })
// );

// exports.deleteProfile = functions.auth.user().onDelete(
//   user => admin.firestore().doc(`users/${user.uid}`).delete()
// );


exports.ordersApi = functions.https.onRequest((req, res) => {
  const orderRef = db.collection('orders');
  res.set('Access-Control-Allow-Origin', '*');
  orderRef.orderBy("createdAt", "asc").limit(10).get().then(docs => {
    const ordenes = [];
    docs.forEach(doc => ordenes.push({
      doc: doc.id,
      cliente: doc.data().client,
      hora: doc.data().createdAt,
      order: doc.data().order,
      comment: doc.data().comments
    }));
    return res.json({ orders: ordenes });
  }).catch(err => {
    return res.json({ error: err })
  });
});

//me toca hacer otra funcion htttp request para actualizar la orden en la cocina y que sea solo el state
