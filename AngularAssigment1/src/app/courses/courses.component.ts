import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 101,
      name: 'JavaScript for Beginners',
      author: 'Heikela',
      duration: 48,
      type: 'Free',
      price: 0.0,
      ratings: 3.5,
      image: '../../assets/courses/course-image-1.png ',
      description:
        'In this course you will learn the fundamentals of JavaScript. This course is purely defined for freshers.',
    },
    {
      id: 102,
      name: 'Angular for Beginners',
      author: 'Mark Vought',
      duration: 28,
      type: 'Premium',
      price: 129.0,
      ratings: 4.5,
      image: '../../assets/courses/course-image-2.png ',
      description:
        'In this course you will learn the fundamentals of Angular framework. This course is purely defined for freshers.',
    },
    {
      id: 103,
      name: 'React for Beginners',
      author: 'Steve Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: '../../assets/courses/course-image-3.png ',
      description:
        'In this course you will learn the fundamentals of React. This course is purely designed for freshers.',
    },
    {
      id: 104,
      name: 'UX Design - Beginners',
      author: 'Steve Smith',
      duration: 19.0,
      type: 'Premium',
      price: 105.5,
      ratings: 4.8,
      image: '../../assets/courses/course-image-8.png ',
      description:
        'In this course you will learn about the reactive web development using HTML and CSS. This course is designed for freshers.',
    },
    {
      id: 105,
      name: 'Front-End Development',
      author: 'Steve Smith',
      duration: 90.0,
      type: 'Premium',
      price: 169.0,
      ratings: 4.8,
      image: '../../assets/courses/course-image-10.png',
      description:
        'In this course you will learn about the complete web development using HTML, CSS, nad JavaScript. This course is designed for all.',
    },
    {
      id: 106,
      name: 'JavaScript - Professional',
      author: 'John Heikels',
      duration: 60,
      type: 'Premium',
      price: 150.0,
      ratings: 4.5,
      image: '../../assets/courses/course-image-5.png ',
      description:
        'In this course you will learn the complete modern JavaScript step by step. This course is designed for professionals.',
    },
    {
      id: 107,
      name: 'Advance Angular Course',
      author: 'Steve Smith',
      duration: 19.5,
      type: 'Premium',
      price: 145.5,
      ratings: 4.8,
      image: '../../assets/courses/course-image-4.png ',
      description:
        'In this course you will learn all the concepts of Angular from basic to advance. This course is designed for professionals.',
    },
    {
      id: 108,
      name: 'Advance React Course',
      author: 'Merry Smith',
      duration: 18.5,
      type: 'Free',
      price: 0.0,
      ratings: 4.0,
      image: '../../assets/courses/course-image-7.png ',
      description:
        'In this course you will learn the fundamentals and Advance Concepts of React. This course is designed for professionals.',
    },
    {
      id: 109,
      name: 'UX Design - Professional',
      author: 'Steve Smith',
      duration: 22.0,
      type: 'Premium',
      price: 115.5,
      ratings: 4.8,
      image: '../../assets/courses/course-image-9.png ',
      description:
        'In this course you will learn about the reactive web development using HTML and CSS. This course is designed for professionals.',
    },
    {
      id: 110,
      name: 'Angular with .NET Core',
      author: 'Mark Vought',
      duration: 68,
      type: 'Premium',
      price: 129.0,
      ratings: 4.5,
      image: '../../assets/courses/course-image-6.png ',
      description:
        'In this course you will learn the fundamentals of Angular framework with .NET core. This course is purely designed for freshers.',
    },
  ];

  courseList: any;

  ngOnInit() {
    this.courseList = this.courses.filter((itm: { name: string }) =>
      itm.name.toLowerCase().includes('')
    );
    console.log(this.courseList);
  }

  getTotalCourses() {
    return this.courses.length;
  }

  getFreeCourses() {
    return this.courses.filter(
      (course: { type: string }) => course.type === 'Free'
    ).length;
  }

  getPremiumCourses() {
    return this.courses.filter(
      (course: { type: string }) => course.type === 'Premium'
    ).length;
  }

  couseCountRadioButton: string = 'All';

  searchText: string = '';

  onFilterRadioButtonChanged(data: string) {
    this.couseCountRadioButton = data;
    console.log(this.couseCountRadioButton);
  }

  // To the above searchText property, we need to assign the value what user
  // enters in the textbox and we can get that value when searchTextChange
  // event raised.

  // To do so, let's create a method which will be called when custom event
  // from the child component class will be raised.

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
