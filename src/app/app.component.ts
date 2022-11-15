import { Component } from '@angular/core';
import { SignupService } from './service/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  toggleOn: boolean = true;
  myDetail: any =[]

  constructor(private SignupServiceprovider: SignupService){ }                // minor issues

  ngOnInit() {                    //function runs on page loads
    this.getUserData();
  }

  user(signInForm: any){                            //called Function with dummy argument
    console.log("Form Works!", signInForm);
    console.log("Single field value", signInForm.fname)
    
    this.SignupServiceprovider.sendData(signInForm).subscribe((result: any)=>{    // minor issues to send data to service

    })
  
  }

  //   //Comming data from backend
  getUserData(){
    this.SignupServiceprovider.getData().subscribe((result: any)=>{    // minor issues to comming data from service
      this.myDetail = result.data;
    })

  }
}
