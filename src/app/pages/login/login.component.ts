import { LoginService } from './../../core/services/login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StartSessionService } from 'src/app/core/services/start-session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  token:any;
  errorStatus: any
  starSession: boolean =  true

  constructor(private fb: FormBuilder, 
              private route: Router,
              private loginService: LoginService,
              private startSessionService: StartSessionService) { }

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {}

  //Retona para Home
  revoke(){
    this.route.navigate(['/'])
  }

  //Informa se tem sessão ativa
  isSessionStart(){
      this.startSessionService.initOnStartSession();
  }

  // Submit login authentication
  async onSubmit(){
    let dataForm = this.loginForm.value;
     await  this.loginService.getLogin(dataForm ).then(() => {
        // console.warn(dataForm);
        setTimeout(() => {
            this.isSessionStart();
            this.revoke();
            }, 1000);
        }).catch( err => {
          this.errorStatus = err
          throw '::: ErrorResponse do componenete ::: ' + err;
        })
   
      }

 

}//END_CLASS
