import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mycontact } from 'src/models/mycontact';
import { mygroup } from 'src/models/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  contactId:any
  contact:mycontact={}
  groupId:string=""
  groupName:string=""
  groups:mygroup[]=[]
   constructor(private activatedRoute:ActivatedRoute,private api:ApiService,private router:Router){
      
     
   }
  ngOnInit(): void {
    // to fetch contact id from url
   this.activatedRoute.params.subscribe(
    (data:any)=>{
      this.contactId =data["id"]
      console.log(this.contactId);
      
    }
   )
  //  to fetch details of that particular id
   if(this.contactId){
    this.api.viewContact(this.contactId)
    .subscribe((result:any)=>{
      this.contact=result
      this.groupId=result.groupId
      console.log(this.contact);

      // to fetch details of a particular group
      this.api.getGroup(this.groupId)
      .subscribe((data:any)=>{
        console.log(data);
        this.groupName = data["name"]
        
      })

      //  to fetch all groups
       this.api.getAllgroups()
       .subscribe((result:any)=>{
        this.groups = result
        console.log(result);
        
       })
      
    })
   }
           
  }

  editContact(contact:mycontact){
    this.api.updateContact(this.contactId,contact)
    .subscribe((result:any)=>{
      console.log(result);
      alert("update successfully")
      this.router.navigateByUrl('')
      
    })
  }
}
