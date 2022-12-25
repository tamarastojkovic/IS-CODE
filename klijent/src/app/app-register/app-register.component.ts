import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.css']
})
export class AppRegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  public returnUrl: string;
   

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
    ) { 
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
    }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      ime : new FormControl('', [Validators.required]),
      prezime : new FormControl('', [Validators.required]),
      JMBG : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{13}$'), Validators.minLength(13), Validators.maxLength(13)]),
      telefon : new FormControl('', [Validators.required, Validators.minLength(7)])
  });

  }

  ngOnDestroy(): void {
    
  }
}
