import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {CandidateService} from '../services/candidate.service'
import { Candidate } from '../models/candidate';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  public candidate: Candidate | null | undefined;
  //public returnUrl: string;


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              //private route: ActivatedRoute,
              private candidateService: CandidateService
    ) {
     // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
     this.registerForm = this.formBuilder.group({
        email: ['',[Validators.required, Validators.pattern('[A-Z][a-z]+')]],
        ime : ['', [Validators.required, Validators.pattern('[A-Z][a-z]+')]],
        prezime : ['', [Validators.required]],
        jmbg :['', [Validators.required, Validators.pattern('^[0-9]{13}$'), Validators.minLength(13), Validators.maxLength(13)]],
        telefon : ['', [Validators.required, Validators.minLength(7)]]
    }) ;
    }

  ngOnInit(): void {

  }

  public onSubmit(){
    this.candidateService.addNewCandidate(this.registerForm.value.ime, this.registerForm.value.prezime,
      this.registerForm.value.jmbg, this.registerForm.value.telefon, this.registerForm.value.email, this.registerForm.value.slika).subscribe((result: Candidate | null)=>{
      this.candidate = result
      if(this.candidate)
         this.router.navigateByUrl('/login')
    })
  }

  public ime()
  {

    return this.registerForm.get('ime') ;
  }


  public prezime()
  {

    return this.registerForm.get('prezime') ;
  }


  public email()
  {
    return this.registerForm.get('email');
  }

  public jmbg()
  {
    return this.registerForm.get('jmbg');
  }

   public telefon()
  {
    return this.registerForm.get('telefon');
  }

  public candidateId() : String{
    if(this.candidate != null){
      return this.candidate._id;
    }
    return "0";
  }

  ngOnDestroy(): void {

  }
}
