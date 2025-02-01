import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SalarydetailsComponent } from './salarydetails/salarydetails.component';
import { PayslipComponent } from './payslip/payslip.component';
import { TaxworksheetComponent } from './taxworksheet/taxworksheet.component';
import { InvestmentComponent } from './investment/investment.component';
import { DocumentComponent } from './document/document.component';
import { PayrollComponent } from './payroll/payroll.component';
import { PdfComponent } from './pdf/pdf.component';
import { FormsModule } from '@angular/forms';
import { LeaveComponent } from './leave/leave.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReportComponent } from './report/report.component';
import { HolidayComponent } from './holiday/holiday.component';
import { ApplicationComponent } from './application/application.component';
import { LeavesidebarComponent } from './leavesidebar/leavesidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetComponent } from './forget/forget.component';
import { OtpComponent } from './otp/otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceTabularComponent } from './attendance-tabular/attendance-tabular.component';
import { FaceViewComponent } from './face-view/face-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    SalarydetailsComponent,
    PayslipComponent,
    TaxworksheetComponent,
    InvestmentComponent,
    DocumentComponent,
    PayrollComponent,
    PdfComponent,
    LeaveComponent,
    ApplyleaveComponent,
    CalendarComponent,
    ReportComponent,
    HolidayComponent,
    ApplicationComponent,
    LeavesidebarComponent,
    ProfileComponent,
    ForgetComponent,
    OtpComponent,
    ResetPasswordComponent,
    AttendanceComponent,
    AttendanceCalendarComponent,
    AttendanceListComponent,
    AttendanceTabularComponent,
    FaceViewComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
