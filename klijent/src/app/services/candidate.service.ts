import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {tap} from 'rxjs/operators'
import { ICandidate, Candidate} from '../models/candidate';
import { CandidateDto } from '../models/candidateDto';
import {IGroup, Group } from '../models/groups';

/*interface Result{
  _id: string,
  amounts: [number]
}*/
@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  private readonly url = {
    login: `http://localhost:3002/candidate/login`,
    candidateId: `http://localhost:3002/candidate/id`,
    groups: `http://localhost:3002/group`,
    candidateGroupAdd: `http://localhost:3002/candidate/group`
  }
  public currentUser : Candidate | undefined | null;
  
  constructor(private http: HttpClient) { }

  public addNewCandidate(ime: string, prezime:string, jmbg:string, telefon:string, email:string, slika:string):Observable<Candidate | null>{
    return this.http.post<ICandidate | null>(`http://localhost:3002/candidate/new`,{
        ime,
        prezime, 
        jmbg, 
        telefon, 
        email, 
        slika
    })
  }

  public login(id: string, lozinka:string):Observable<any>{
    
    return this.http
    .post<{message: string, token: string, user: Candidate}>
      (this.url.login, {id, lozinka}).pipe(
      tap((response: {message: string, 
        token: string,
        user: Candidate
        }) =>
        {
          localStorage.setItem("USER_JWT_TOKEN", response.token);
          localStorage.setItem("user_id", response.user._id);
          this.currentUser = new Candidate(response.user._id, response.user.ime, response.user.prezime, response.user.lozinka, response.user.email, response.user.pol,
            response.user.telefon, response.user.jmbg, response.user.datumRođenja, response.user.datumUpisa, response.user.idInstruktora, response.user.idGrupe);
        }
      )
      );
  }

  public getCandidate(id: string):Observable<CandidateDto>{
    let headers : HttpHeaders = new HttpHeaders().append("Authorization", `Bearer ${localStorage.getItem('USER_JWT_TOKEN')}`);

    return this.http.get<CandidateDto>(this.url.candidateId+"/"+id, {headers});
  }

  public getAllGroups(): Observable<Group[]>{
    let headers : HttpHeaders = new HttpHeaders().append("Authorization", `Bearer ${localStorage.getItem('USER_JWT_TOKEN')}`);
    return this.http.get<Group[]>(this.url.groups, {headers});
  }

  public setGroupCandidate(idGroup : string): Observable<any> {
    let headers : HttpHeaders = new HttpHeaders().append("Authorization", `Bearer ${localStorage.getItem('USER_JWT_TOKEN')}`);
    let id = localStorage.getItem('user_id');
    
    return this.http
    .post<{message: string, token: string, user: Candidate}>
      (this.url.candidateGroupAdd, {id, idGroup}, {headers});
  }

  /*public getPaymentById(id): Observable<Result> {
    return this.http.get<Result>(`http://localhost:3000/payments/id/${id}`)
  }*/
}