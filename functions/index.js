const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

/**This does the decisioning.  In future, have this store the app and the decision in a data warehouse */
exports.decision = functions.database.ref('apps/{appId}')
.onCreate(event => {
  // Grab the current value of what was written to the Realtime Database.
    const app = event.data.val()
    let decision={
        isApproved:false,
        conditions:null
    }
    if(app.income>20000){
        if(app.income<30000){
            decision.conditions={
                rate:.1,
                limit:5000
            }
            decision.isApproved=true
        }
        else if(app.income<40000){
            decision.conditions={
                rate:.08,
                limit:5000
            }
            decision.isApproved=true
        }
        else{
            decision.conditions={
                rate:.07,
                limit:10000
            }
            decision.isApproved=true
        }
    }
    return event.data.ref.child('decision').set(decision)
})