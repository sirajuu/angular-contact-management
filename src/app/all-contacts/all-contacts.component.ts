import { Component, OnInit } from '@angular/core';
import { mycontact } from 'src/models/mycontact';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit{

      allcontacts:mycontact[]=[]

      searchKey:string=''

     constructor(private api:ApiService){

     }
     ngOnInit(): void {
        this.getAllontact()
     }
     getAllontact(){
      this.api.getAllContacts()
      .subscribe((result:any)=>{
        console.log(result);
        this.allcontacts=result
        
      })
     }

    //  deleteContact
    deleteContact(contactId:any){
      this.api.removeContact(contactId)
      .subscribe((result:any)=>{
        console.log(result);
        this.getAllontact()
        
      })
    }
}

