import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { ICandidate, Candidate } from '../models/candidate';

/*interface Result{
  _id: string,
  amounts: [number]
}*/
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  /*public getPayment(email): Observable<Payment | null>{
    console.log(email)
    return  this.http.get<IPayment| null>(`http://localhost:3000/payments/${email}`).pipe(
      map( (payment:IPayment|null) => {
        if(!payment)
          return null;
        return new Payment(payment._id,payment.name,payment.surname,payment.email,payment.amounts)})
      )
  }*/

  public addNewCandidate(ime: string, prezime:string, JMBG:string, telefon:string, email:string, slika:string):Observable<Candidate | null>{
    return this.http.post<ICandidate | null>(`http://localhost:3002/candidate/new`,{
        ime: ime, 
        prezime: prezime, 
        jmbg: JMBG, 
        telefon: telefon, 
        email: email, 
        slika: null
    })
  }

  /*public getPaymentById(id): Observable<Result> {
    return this.http.get<Result>(`http://localhost:3000/payments/id/${id}`)
  }*/
}