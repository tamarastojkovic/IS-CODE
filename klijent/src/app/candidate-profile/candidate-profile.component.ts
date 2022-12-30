import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CandidateDto } from '../models/candidateDto';
import { CandidateService } from '../services/candidate.service';
import { Group } from '../models/groups';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit, OnDestroy {

  public candidate : CandidateDto;
  private appSub : Subscription;
  private groupSub: Subscription;
  public groups: Group[];

  constructor(public candidateService: CandidateService) {
    let id  = localStorage.getItem("user_id");
    if(id != null){
      this.appSub = this.candidateService.getCandidate(id).subscribe((response : CandidateDto) => {
        this.candidate = new CandidateDto(response._id, response.ime, response.prezime, response.email, response.pol,
          response.telefon, response.jmbg, response.datumRođenja, response.datumUpisa, response.idInstruktora, response.idGrupe);
      })
    }else{
      this.appSub = this.candidateService.getCandidate("1").subscribe((response : CandidateDto) => 
        this.candidate = new CandidateDto(response._id, response.ime, response.prezime, response.email, response.pol,
          response.telefon, response.jmbg, response.datumRođenja, response.datumUpisa, response.idInstruktora, response.idGrupe)
      )
    }

    this.groupSub = this.candidateService.getAllGroups().subscribe((response: Group[])=>{
      this.groups = response;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.appSub){
      this.appSub.unsubscribe();
    }
    if(this.groupSub){
      this.groupSub.unsubscribe();
    }
  }

  public getDate(): String{
    let date = this.candidate.jmbg.substring(0, 7);
    let day = date.substring(0,2);
    let month = date.substring(2,4);
    let year = date.substring(4, 7);

    return day+ "-" +month + "-" + "1" + year;
  }

  public getCurrentDate(): String{
    const date = new Date();
    let month = date.getMonth() +1;
    return date.getDate().toString() + "-" + month.toString() + "-" + date.getFullYear().toString();
  }

}
