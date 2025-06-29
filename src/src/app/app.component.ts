import { Component } from '@angular/core';
import {mockedCoursesList} from './/shared/mocks/mocks';
import { TogglePasswordDirective } from './togglepassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = mockedCoursesList;
  title = 'courses-app';
  isLoggedIn = false;
  username = 'Harry Potter';

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  handleShowCourse(course: any){
    console.log('Show course clicked:', course);
  }
}
