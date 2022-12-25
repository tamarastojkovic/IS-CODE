import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from '../models/candidate';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public candidate: Candidate | null | undefined;
  //public candidate: Candidate | null | undefined;
  //public returnUrl: string;
   

  constructor(//private formBuilder: FormBuilder,
              private router: Router,
              //private route: ActivatedRoute,
              private candidateService: CandidateService
    ) { 
     // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
      this.loginForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        lozinka : new FormControl('', [Validators.required])  
    });
    }

  ngOnInit(): void {

  }

  public onSubmit(){
    this.candidateService.login(this.loginForm.value.id, this.loginForm.value.lozinka
      ).subscribe(e => {this.candidate = e.user
          if(this.candidate)
          this.router.navigateByUrl('/profile')
      })
  }

  ngOnDestroy(): void {
    
  }
}
