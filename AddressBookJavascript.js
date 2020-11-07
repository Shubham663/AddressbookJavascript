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
        if(pattern.test(firstName))
            this._firstName = firstName;
        else throw "The first name provided is not valid"
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
}
try{
    let contact = new Contact("Garvit","Chanana","302/Sector-87","Narvana","Haryana","765 088","91 9878765498","gchanana@gmail.com");
    console.log(contact);
}catch(e){
    console.error(e);
}