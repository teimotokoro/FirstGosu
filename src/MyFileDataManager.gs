/**
 * Created with IntelliJ IDEA.
 * User: Teomo
 * Date: 01/10/13
 * Time: 08:28
 * To change this template use File | Settings | File Templates.
 */
uses java.io.File
uses java.io.IOException
uses java.util.ArrayList

class MyFileDataManager implements IDataManager{

   var myPersonList : ArrayList<Person>
  var fileName : String   = "C:\\temp\\familydata.txt"

  construct(){

    // Get a list of family members form a file



    try {
    var file = new File (fileName)
//      file.eachLine( \line -> SplitFileData(line) )

    }   catch ( e : IOException){
          e.printStackTrace()

    }

   /* private function splitFileData(myLine :String ) : Person {           // TODO : Split the line into parts and add create a person


  }
    var myPerson1 = new Person ("Harry", "Enfield", 50)
    var myPerson2 = new Person ("Hugh", "Grant", 48)
    var myPerson3 = new Person ("Hugh", "Laurie", 55)
    var myPerson4 = new Person ("Steven", "Fry", 58)

    myPersonList = {myPerson1, myPerson2,myPerson3, myPerson4}

  */
  }


  override function  getData() : ArrayList<Person>  {

    return myPersonList



  }

}