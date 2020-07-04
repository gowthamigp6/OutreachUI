import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpEvent,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { EventSummaryDetails} from '../model/event.model';

@Injectable()
export class UserRoleService {

  private eventUrl = window["apiBaseUrl2"]+"/eventDetails";
  private tripUrl = window["apiBaseUrl2"]+"/summaryDetails";

  constructor(private http: HttpClient) { }

  getTripDetails(): Observable<EventSummaryDetails[]>{
	  return this.http.get<EventSummaryDetails[]>(this.tripUrl+"/get");
  }

  getCusTripDetails(): Observable<EventSummaryDetails[]>{
	  return this.http.get<EventSummaryDetails[]>(this.tripUrl+"/getSummaryEventDetails");
  }

  
  saveEventResponse(feedbackDetails: String[],associateId: String){
    console.log("this-->");
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    return this.http.post(this.eventUrl+"/saveEvent/"+associateId,
            JSON.stringify(feedbackDetails), {headers: headers});
  }

}
