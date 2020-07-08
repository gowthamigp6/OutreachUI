import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpEvent,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { EventSummaryDetails} from '../model/event.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Origin':'*', 
  "Access-Control-Allow-Credentials" : "true"})
};

@Injectable()
export class UserRoleService {

  private eventUrl = window["outReachUrl"]+"registerDetails";
  private tripUrl = window["outReachUrl"]+"eventDetails";

  constructor(private http: HttpClient) { }

  getCusTripDetails(): Observable<EventSummaryDetails[]>{
	  return this.http.get<EventSummaryDetails[]>(this.tripUrl+"/getEventDetails",httpOptions);
  }
  
  saveEventResponse(feedbackDetails: String[],associateId: String){
    console.log("this-->");
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.eventUrl+"/saveEvent/"+associateId,
            JSON.stringify(feedbackDetails), {headers: headers});
  }

}
