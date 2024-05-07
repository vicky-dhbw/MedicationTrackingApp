import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Patients', url: '/patients', icon: 'person' },
    { title: 'Medicines', url: '/medicines', icon: 'medkit' },
    { title: 'Schedule Medication', url: '/schedule-medication', icon: 'calendar' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
