const functions = require('firebase-functions');
var admin =require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
admin.initializeApp(functions.config().firebase);
const db =admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const singleDoc = {
    eventDate:"WednesDay, 12:00 AM IST",
    eventTitle:"Added new Doc",
    eventDesc:"21/06/2019, 12-00 AM - 21/06/2019, 01-00 AM",
    hall:"Hall 2"

}
const doc = [{
    eventDate:"WednesDay, 12:00 AM IST",
    eventTitle:"Introduction on the event",
    eventDesc:"21/06/2019, 12-00 AM - 21/06/2019, 01-00 AM",
    hall:"Hall 2"

},{
    eventDate:"WednesDay, 01:00 AM IST",
    eventTitle:"Introduction on the event",
    eventDesc:"21/06/2019, 01-00 AM - 21/06/2019, 02-00 AM",
    hall:"Hall 2"

},{
    eventDate:"WednesDay, 02:00 AM IST",
    eventTitle:"Introduction on the event",
    eventDesc:"21/06/2019, 02-00 AM - 21/06/2019, 03-00 AM",
    hall:"Hall 2"

},{
    eventDate:"WednesDay, 03:00 AM IST",
    eventTitle:"Introduction on the event",
    eventDesc:"21/06/2019, 03-00 AM - 21/06/2019, 04-00 AM",
    hall:"Hall 2"

}]
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(doc);
});

exports.updateDoc = functions.https.onRequest((req,resp)=>{

    const documentId = req.query.doc;
    const title = req.query.title;
    db.collection('/Events').doc(documentId).update({quantity:title}).then((document)=>{
        // responseString = responseString + document
        resp.send("document updated");
        //console.log(document)
        return;
    }).catch((reason)=>{console.log(reason)});
});
exports.removeDoc = functions.https.onRequest((request, response) => {
    var responseString = "";
    // doc.forEach((object)=>{
        db.collection('/Events').doc("p3nNRwVYbx7CukySVNIy").delete().then((document)=>{
            // responseString = responseString + document
            response.send(document);
            //console.log(document)
            return;
        }).catch((reason)=>{console.log(reason)});
       });
exports.addEvents = functions.https.onRequest((request, response) => {
    var responseString = "";
        db.collection('/Events').add(singleDoc).then((document)=>{
            responseString = responseString + document
            response.send(responseString);
            console.log(document)
            return;
        }).catch((reason)=>{console.log(reason)});
});

    
    
