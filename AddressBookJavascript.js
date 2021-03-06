let addressBook = new Array();

class Contact{
    _firstName;
    _lastName;
    _address;
    _city;
    _state;
    _zip;
    _phoneNumber;
    _email;

    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.zip = zip;
    }

    set firstName(firstName){
        const pattern = RegExp("[A-Z]{1}.{2,}");
        
        if(  (addressBook.find(val => {return val._firstName == firstName})) != undefined)
            throw "The first name " + firstName + " already exists in the addressbook";
        if(pattern.test(firstName))
            this._firstName = firstName;
        else throw "The first name provided is not valid";
    }
    get firstName(){
        return this._firstName;
    }

    set lastName(lastName){
        const pattern = RegExp("[A-Z]{1}.{2,}");
        if(pattern.test(lastName))
            this._lastName = lastName;
        else throw "The last name provided is not valid"
    }
    get lastName(){
        return this._lastName;
    }

    set address(address){
        const pattern = RegExp("[A-Za-z0-9\/]{4,}");
        if(pattern.test(address))
            this._address = address;
        else throw "The address provided is not valid";
    }
    get address(){
        return this._address;
    }
    set city(city){
        const pattern = RegExp("[A-Za-z0-9\/]{4,}");
        if(pattern.test(city))
            this._city = city;
        else throw "The city provided is not valid";
    }
    get city(){
        return this._city;
    }
    set state(state){
        const pattern = RegExp("[A-Za-z0-9\/]{4,}");
        if(pattern.test(state))
            this._state = state;
        else throw "The state provided is not valid";
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        const pattern = RegExp("^[^A-Za-z\\W]*[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}[^A-Za-z\\W]*$");
        if(pattern.test(zip))
            this._zip = zip;
        else throw "the zip provided is not valid";
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        const pattern = RegExp("[1-9]{2}\\s[1-9]{1}[0-9]{9}");
        if(pattern.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "The phoneNumber provided is not valid";
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        const pattern = RegExp("^[a-zA-Z0-9|_|-][a-zA-Z0-9|_|-|\\+]*(\\.)?[a-zA-Z0-9|_|-]{1,}\\@[0-9a-zA-Z]{1,}\\.[a-zA-Z]{2,}(\\.)?[a-zA-Z]*$");
        if(pattern.test(email))
            this._email = email;
        else throw "The email address provided is not valid";
    }
    get email(){
        return this._email;
    }

    toString(){
        return "first name: " + this._firstName + ", last name: " + this._lastName + ", address: " + this._address + ", city: " + this._city + 
                ", state: " + this._state + ", zip: " + this._zip + ", phone number: " + this._phoneNumber + ", email: " + this._email;
    }
}
try{
    let contact4 = new Contact("Mandeep","Khatri","103/Sector-43","Rohtak","Haryana","982343","43 8789878654","ksiMal@gmail.com");
    addressBook.push(contact4);
    let contact = new Contact("Garvit","Chanana","302/Sector-87","Rohtak","Haryana","765 088","91 9878765498","gchanana@gmail.com");
    addressBook.push(contact);
    let contact2 = new Contact("Kshitij","Malhotra","103/Sector-43","Narvana","Haryana","982343","43 8789878654","ksiMal@gmail.com");
    addressBook.push(contact2);
    let contact3 = new Contact("Kshitij","Khatri","103/Sector-43","Rohtak","Haryana","982343","43 8789878654","ksiMal@gmail.com");
    addressBook.push(contact3);    
}catch(e){
    console.error(e);
}
console.log(addressBook);

// Arrow function for changing details according to _firstName
addressBook.forEach(value => {
    if(value._firstName == "Garvit")
        value.phoneNumber = "63 9869874326";
});

//Method for deleting contact through name
let index = addressBook.map(value => value._firstName).indexOf("Kshitij");
console.log(index);
addressBook.splice(index,1);

// Getting number of Contacts
function countContacts(total,contact){
    return total + 1;
}

let numContacts = addressBook.reduce(countContacts,0);
console.log("Total number of contacts: " + numContacts);
console.log(addressBook);

// Method for searching person in city
if(addressBook.filter(val => val._city == "Rohtak").find(val => val._firstName == "Garvit")!= undefined)
    console.log("The person Garvit lives in city Rohtak");
else
console.log("The person Garvit does not live in city Rohtak");

// Method for searching person in state
if(addressBook.filter(val => val._state == "Haryana").find(val => val._firstName == "Garvit")!= undefined)
    console.log("The person Garvit lives in state haryana");
else
console.log("The person Garvit does not live in state haryana");

// Getting persons in city
let rohtakContacts = addressBook.filter(val => val._city == "Rohtak");
let haryanaContacts = addressBook.filter(val => val._state == "Haryana");
let copy = addressBook;
console.log("Contacts in city rohtak: " + rohtakContacts);
console.log("Contacts in state haryana: " + haryanaContacts);
console.log("Contacts count in city rohtak: " + rohtakContacts.length);
console.log("Contacts count in state haryana: " + haryanaContacts.length);

function compareFirstName( a, b ) {
    if ( a._firstName < b._firstName ){
      return -1;
    }
    if ( a._firstName > b._firstName ){
      return 1;
    }
    return 0;
  }
  function compareZip( a, b ) {
    if ( a._zip < b._zip ){
      return -1;
    }
    if ( a._zip > b._zip ){
      return 1;
    }
    return 0;
  }
  function compareCity( a, b ) {
    if ( a._city < b._city ){
      return -1;
    }
    if ( a._city > b._city ){
      return 1;
    }
    return 0;
  }
  function compareState( a, b ) {
    if ( a._state < b._state ){
      return -1;
    }
    if ( a._state > b._state ){
      return 1;
    }
    return 0;
  }
addressBook.sort(compareFirstName);
console.log(addressBook);
addressBook.sort(compareZip);
console.log(addressBook);
addressBook.sort(compareCity);
console.log(addressBook);
addressBook.sort(compareState);
console.log(addressBook);