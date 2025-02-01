import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LeaveComponent } from './leave/leave.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ReportComponent } from './report/report.component';
import { HolidayComponent } from './holiday/holiday.component';
import { ApplicationComponent } from './application/application.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetComponent } from './forget/forget.component';
import { OtpComponent } from './otp/otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceCalendarComponent } from './attendance-calendar/attendance-calendar.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { AttendanceTabularComponent } from './attendance-tabular/attendance-tabular.component';
import { FaceViewComponent } from './face-view/face-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'header',component:HeaderComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'salarydetails',component:SalarydetailsComponent},
  {path:'payslip',component:PayslipComponent},
  {path:'taxworksheet',component:TaxworksheetComponent},
  {path:'investment',component:InvestmentComponent},
  {path:'Document',component:DocumentComponent},
  {path:'payroll',component:PayrollComponent},
  {path:'leave',component:LeaveComponent},
  {path:'applyleave',component:ApplyleaveComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'report',component:ReportComponent},
  {path:'holiday',component:HolidayComponent},
  {path:'application',component:ApplicationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'forget_password',component:ForgetComponent},
  {path:'otp-verification',component:OtpComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'attendance-listview',component:AttendanceListComponent},
  {path:'attendance-tabular',component:AttendanceTabularComponent},
  {path:'attendance-calendar',component:AttendanceCalendarComponent},
  {path:'Punch-in',component:FaceViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
