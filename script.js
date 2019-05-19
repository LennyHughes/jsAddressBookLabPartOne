class Contact {
   constructor(name,email,phone,relation){
       this.name = name;
       this.email = email;
       this.phone = phone;
       this.relation = relation;
   }
}

class AddressBook {
    constructor (){
      this.contacts = [new Contact("Einstein","ein@stein.me","299.792.4580", "Hero"),
                       new Contact("Euler","leonhard@euler.net","271.828.1828", "Hero")
                      ];
   }

   add(info){
       let contactInstance = new Contact(...info);

       this.contacts.push(contactInstance);

   }

   deleteAt(index){

       this.contacts.splice(index,1);
   }

   deleteByName(name){
 
       for (let i =0; i < this.contacts.length; i++){
           if (this.contacts[i]["name"] === name){
               this.contacts.splice(i,1);
           }
       }

   }

   print(){ 

      for(let element in this.contacts){
        let contactStr = element + "." ;
          for (let key in this.contacts[element]){
        
            contactStr += " " + key.charAt(0).toUpperCase() +": " + this.contacts[element][key];    
          }
        console.log(contactStr);  
      }
    
   }
}

function getContactInfo(){
    let name = prompt("Name ?");
    let phone = prompt("Phone ?");
    let email = prompt("Email ?");
    let relation = prompt("Relation ?");
    let contactArray = [name,phone,email, relation];

    return contactArray;
}

function isIndex(delPrompt){
    if (isNaN(parseInt(delPrompt))){
       return false 
    } else {
        return true;
    }
}

let addressBook = new AddressBook();

let promptResults; 

while (promptResults !== "Quit"){

    promptResults = prompt("Add, Remove, Print, or Quit? ");

    switch (promptResults) {
        case "Add":
            let newContact = getContactInfo();
            addressBook.add(newContact);
            break;
        case "Remove":
            let deletePrompt = prompt("Index or Name to Delete?");

            if(isIndex(deletePrompt)){
                addressBook.deleteAt(deletePrompt);
            } else{
                addressBook.deleteByName(deletePrompt);
            }
            break;
        case "Print":
            addressBook.print();
            break;
        case "Quit":
            console.log(`Farewell`);
            break;
    }
}