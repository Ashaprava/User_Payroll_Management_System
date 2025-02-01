import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  // private leaveList: any[] = [];

  // constructor() { }

  // updateLeaveList(formData: any) {
  //   this.leaveList.push(formData);
  //   console.log('Leave list updated:', this.leaveList);
  // }

  // getLeaveList() {
  //   return this.leaveList;
  // }
 

  private leaveList: any[] = [];
  private upcomingLeaveList: any[] = [];
  private historyLeaveList: any[] = [];

  constructor() {
    this.loadLeaveData();
  }

  updateLeaveList(formData: any) {
    this.leaveList.push(formData);
    this.saveLeaveData();

    // Check if upcomingLeaveList should be updated
    if (this.upcomingLeaveList.length < 3) {
      this.upcomingLeaveList.push(formData);
    } else {
      // Move the oldest leave to history
      const oldestLeave = this.upcomingLeaveList.shift();
      this.historyLeaveList.push(oldestLeave);
      // Add the new leave to upcoming
      this.upcomingLeaveList.push(formData);
    }
  }

  getUpcomingLeaveList(): any[] {
    return this.upcomingLeaveList;
  }

  getHistoryLeaveList(): any[] {
    return this.historyLeaveList;
  }

  private saveLeaveData() {
    localStorage.setItem('leaveData', JSON.stringify(this.leaveList));
  }

  private loadLeaveData() {
    const savedData = localStorage.getItem('leaveData');
    if (savedData) {
      this.leaveList = JSON.parse(savedData);

      // Load upcoming and history leave lists based on stored data
      this.upcomingLeaveList = this.leaveList.slice(-3);
      this.historyLeaveList = this.leaveList.length > 3 ? this.leaveList.slice(0, -3) : [];
    }
  }
}
