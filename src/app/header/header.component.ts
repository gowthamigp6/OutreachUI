import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { UserRoleService } from '../service/user-role.service';
import { EventSummaryDetails } from '../model/event.model';
import { MatPaginator, MatTableDataSource, MatDialog, MatSort } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  info: any;
  message: string;

  displayedColumns: string[] = ['select', 'eventId', 'eventName', 'eventDesc', 'eventLocation',
    'venueAddress', 'eventDate', 'status', 'pocId', 'pocName'];
  dataSource = new MatTableDataSource<EventSummaryDetails>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private router: Router, public token: TokenStorageService,
    public eventService: UserRoleService) { }

  ngOnInit() {
    this.userAuthenticate();
    if (this.info.role == 'admin') {
      this.getAllTripDetails();
    } else if (this.info.role == 'user') {
      this.getTripDetailsOfCustomer();
    }
  }

  userAuthenticate() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      role: this.token.getRole()
    };
    if (this.info.role == null || this.info.token == null || this.info.username == null) {
      this.router.navigate(['/denied']);
    }
  }
  getAllTripDetails() {

    this.dataSource = new MatTableDataSource<EventSummaryDetails>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.eventService.getTripDetails().subscribe(
      trip => {
        this.dataSource.data = trip as EventSummaryDetails[];

      }
    );
    console.log(this.dataSource.data);
  }

  getTripDetailsOfCustomer() {

    this.dataSource = new MatTableDataSource<EventSummaryDetails>();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.eventService.getCusTripDetails().subscribe(
      trip => {
        this.dataSource.data = trip as EventSummaryDetails[];

      }
    );
    console.log(this.dataSource.data);
  }

  onSubmit() {
    let myList: String[] = [];
    console.log("inisde submit");
    this.message = '';
    this.dataSource.data.forEach(feedback => {
      if (feedback.select) {
        myList.push(feedback.eventId);
      }
    });
    if (myList.length == 0) {
      console.log(myList.length);
      this.message = 'Please select any event';
    } else {

      this.eventService.saveEventResponse(myList, this.info.username).subscribe(data =>{
        
        console.log("data saved successfully");
      });
      this.message = 'Event Registered Successfully';
    }
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}

