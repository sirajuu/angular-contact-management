import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // get -all-contacts function
  getAllContacts(){
   return  this.http.get('http://localhost:3000/contacts')
  }

  //  view contact api
  viewContact(contactId:any){
    // api call-asynchronus
    return  this.http.get('http://localhost:3000/contacts/'+contactId)
       
  }

  // 3.api call to get details of a particular group
  getGroup(groupId:string){
    return  this.http.get('http://localhost:3000/groups/'+groupId)

  }
  // 4. api call to fetch all group data
  getAllgroups(){
    return  this.http.get('http://localhost:3000/groups')
  }

  // 5. api call to add / store contact details to server
  addcontact(contact:any){
    return this.http.post("http://localhost:3000/contacts",contact)
  }

  // 6. api call to delete a particular contact from server
  removeContact(id:any){
    return this.http.delete("http://localhost:3000/contacts/"+id)
  }

  // 7. api call to update an existing contact from server

  updateContact(id:any,contact:any){
    return this.http.put("http://localhost:3000/contacts/"+id,contact)
  }
}
