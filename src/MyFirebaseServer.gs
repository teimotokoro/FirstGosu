/**
 * Created with IntelliJ IDEA.
 * User: Teimo
 * Date: 30/09/13
 * Time: 13:28
 * To change this template use File | Settings | File Templates.
 */
uses com.firebase.client.Firebase
uses com.firebase.client.FirebaseError
uses com.firebase.client.Firebase.CompletionListener

uses java.util.HashMap
uses java.util.List

class MyFirebaseServer {

  var _myFirebaseUrl: String
  var _ref: Firebase

  construct(firebaseUrl: String) {
    _myFirebaseUrl = firebaseUrl
    // Get a reference to the Firebase backend Server
    _ref = new Firebase(_myFirebaseUrl).child("People")
  }

  function write(firstname: String, lastname: String, age: int) {
    var myMap = new HashMap<String, Object>()
    myMap.put("First_Name", firstname)
    myMap.put("Last_Name", lastname)
    myMap.put("Age", age)
    // get a unique reference (id)
    var newpushref: Firebase = _ref.push()
    newpushref.setValue(myMap, new CompletionListener(){
      override function onComplete(error: FirebaseError) {
        if (error != null) {
          print("Data could not be saved: " + error.getMessage())
        } else {
          print("Data saved successfully.")
        }
      }
    })
  }

  function write(personList: List<Person>) {



    var newpushref: Firebase = _ref.push()
    newpushref.setValue(personList, new CompletionListener(){
      override function onComplete(error: FirebaseError) {
        if (error != null) {
          print("Data could not be saved: " + error.getMessage())
        } else {
          print("Data saved successfully.")
        }
      }
    })
  }
}