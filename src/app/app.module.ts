import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatTableModule,MatIconModule,MatSortModule,MatPaginatorModule,MatDialogModule,MatRadioModule,MatListModule,
  MatGridListModule, MatFormFieldModule, MatInputModule,MatSelectModule,MatAutocompleteModule,MatCheckboxModule} from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { CdkTableModule} from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { TokenStorageService } from './auth/token-storage.service';
import { UserRoleService } from './service/user-role.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatTabsModule,
    CdkTableModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatGridListModule,
    MatListModule
  ],
   providers: [
    TokenStorageService,AuthInterceptor,
    UserRoleService],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
//     // provider used to create fake backend
//     UploadFileService,UserRoleService,FeedBackService,AuthenticationService
// ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
