import { Component } from '@angular/core';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  userIdValue : any;
  constructor(public apiService : ApiService){

  }

  callUpdateEndpoint(id:any){
    if(id){
      this.apiService.callUpdateEndpoint(id).subscribe((res:any)=>{
        console.log('res',res)
  
      })
    }
  }
}
