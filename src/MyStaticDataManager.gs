/**
 * Created with IntelliJ IDEA.
 * User: Teimo
 * Date: 30/09/13
 * Time: 16:01
 * To change this template use File | Settings | File Templates.
 */
uses java.util.ArrayList
uses java.util.List
class MyStaticDataManager implements IDataManager {

  var myPersonList   = new List<Person>()

  construct(){

    // construct some people

    var myPerson1 = new Person ("Pierce ", "Brosnan", 61)
    var myPerson2 = new Person ("Sean", "Connery", 83)
    var myPerson3 = new Person ("Orlando", "Bloom", 36)
    var myPerson4 = new Person ("Evander", "Holyfield", 51)


     myPersonList = {myPerson1, myPerson2,myPerson3, myPerson4}
     myPersonList.sum( \ person ->person.age )
  }

  override function  getData() : ArrayList<Person>  {

     return myPersonList

  }

}