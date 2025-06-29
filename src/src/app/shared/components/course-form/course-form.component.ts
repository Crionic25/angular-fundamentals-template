import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

interface Course {
  id: number;
  title: string;
}

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent {
  courseForm: FormGroup;

  constructor(public fb: FormBuilder, public library: FaIconLibrary) {
  library.addIconPacks(fas);
  this.courseForm = this.fb.group({
  title: ['', [Validators.required, Validators.minLength(2)]],
  description: ['', [Validators.required, Validators.minLength(2)]],
  authors: this.fb.array([]),
  duration: ['', [Validators.required, Validators.min(0)]],
  newAuthor: this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Za-z]+$/),Validators.minLength(2)]],
  }),
});

}
 courses: Course[] = [
    { id: 1, title: 'Angular Basics' },
    { id: 2, title: 'React Fundamentals' },
    { id: 3, title: 'Vue.js Essentials' },
  ];
   filteredCourses: Course[] = [];

  get authors() {
    return (this.courseForm.get('authors') as FormArray);
  }

  searchTerm: string = '';

   onSearch(searchTerm: string) {
    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      this.filteredCourses = this.courses.filter(course =>
        course.title.toLowerCase().includes(lowerTerm)
      );
    } else {
      // If search is empty, show all
      this.filteredCourses = this.courses;
    }
  }


  addAuthor() {
  const authorNameControl = this.courseForm.get('newAuthor.name');

  if (authorNameControl?.valid) {
    (this.courseForm.get('authors') as FormArray).push(this.fb.control(authorNameControl.value));
    authorNameControl?.reset();
  } else {
    // Mark the control as touched if it's invalid
    authorNameControl?.markAsTouched();
  }
}


  removeAuthor(index: number) {
    (this.courseForm.get('authors') as FormArray).removeAt(index);
  }

  toggleAuthor(author: string, index: number) {
    const courseAuthors = this.courseForm.get('authors') as FormArray;
    if (courseAuthors.controls.includes(this.fb.control(author))) {
      courseAuthors.removeAt(index);
    } else {
      courseAuthors.push(this.fb.control(author));
    }
  }

  onSubmit() {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
    }
  }
}
