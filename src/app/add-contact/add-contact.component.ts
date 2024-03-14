import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mycontact } from 'src/models/mycontact';
import { mygroup } from 'src/models/mygroup';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact:mycontact={}
  allGroups:mygroup[]=[]
    constructor(private api:ApiService,private router:Router){
      this.contact.groupId = "Selected A group"

    }
   
    ngOnInit(): void {
      this.api.getAllgroups()
      .subscribe((result:any)=>{  
        console.log(result);
        this.allGroups = result
        
      })
    }

    addcontact(){
      this.api.addcontact(this.contact)
      .subscribe((result:any)=>{
         console.log(result);
         alert('added success')
      // redirect to allcontact page
      this.router.navigateByUrl('')
         
      })
    }
    
}
