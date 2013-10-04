/**
 * Created with IntelliJ IDEA.
 * User: Teimo
 * Date: 27/09/13
 * Time: 13:55
 * To change this template use File | Settings | File Templates.
 */
class Person {
  // The attributes of the person class
  private var _firstName: String
  private var _lastName: String
  private var _age: int
  construct() {
  }

  construct(fName: String, lName: String, i: int) {
    _firstName = fName
    _lastName = lName
    _age = i
  }

  property set firstName(f1Name: String) {
    _firstName = f1Name
  }

  property get firstName(): String {
    return _firstName
  }

  property set lastName(lName: String) {
    _lastName = lName
  }

  property get lastName(): String {
    return _lastName
  }

  function retrivefullName() {
    print(_firstName + " " + _lastName)
  }

  property set age(i: int) {
    _age = i
  }

  property get age(): int {
    return _age
  }
}