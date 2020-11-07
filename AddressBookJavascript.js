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
        this._email = email;
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._city = city;
        this._state = state;
        this._phoneNumber = phoneNumber;
        this._zip = zip;
    }

    set firstName(firstName){
        this._firstName = firstName;
    }
    get firstName(){
        return this._firstName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }
    get lastName(){
        return this._lastName;
    }

    set address(address){
        this._address = address;
    }
    get address(){
        return this._address;
    }
    set city(_city){
        this._city = city;
    }
    get city(){
        return this._city;
    }
    set state(state){
        this._state = state;
    }
    get state(){
        return this._state;
    }
    set zip(zip){
        this._zip = zip;
    }
    get zip(){
        return this._zip;
    }
    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set email(email){
        this._email = email;
    }
    get email(){
        return this._email;
    }
}

let contact = new Contact("Garvit","Chanana","302/Sector-87","Narvana","Haryana","765088","9878765498","gchanana@gmail.com");
console.log(contact);