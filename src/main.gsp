/**
 * Created with IntelliJ IDEA.
 * User: Teimo
 * Date: 30/09/13
 * Time: 15:42
 * The aim of this program is to demonstrate that a number of things can be done in  Gosu.
 * 1. Integrate with a Realtime Firebase backend Server
 * 2. Design an application to allow standard OO encapsulation and extendability
 * 3. Use the Java 7 java.nio library
 */

// Get a reference to my Firebase Backend Server
var myServer = new MyFirebaseServer("https://mygosupoc.firebaseio.com/myGosuPOC")  // TODO - get this string from a .properties file


// This implementation allows a number of dataManager to be swapped as necessary

 var myDataManager : IDataManager = new MyStaticDataManager()      // Use hardcoded values
//var myDataManager : IDataManager = new MyFileDataManager()       // TODO get data from a file
//var myDataManager : IDataManager = new MyXMLDataManager()        // TODO get data from an XML file
//var myDataManager : IDataManager = new MyJDBCDataManager()       // TODO get data from a JDBC datasource
//var myDataManager : IDataManager = new MyORMDataManager()        // TODO get data from a database using ORM


// Retrieve data from the DataManager
var myList = myDataManager.getData()

print(myList)

//myServer.write(myList)


for (familyMember in myList){

   myServer.write(familyMember.firstName,familyMember.lastName, familyMember.age)
  //myServer.write(familyMember)

}

// Calculate combined Family age

var sumAge : int = 0

for (familyMemberCounter in myList)  {
        sumAge  += familyMemberCounter.age
     }

print ("Sum of Ages is " + sumAge)

















