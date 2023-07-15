import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  MyProjects = [
    {
      ProjectTitle: 'Todo-App',
      Description1:
        '📝✨ Introducing a simple and efficient todo application built with Angular, Bootstrap, and Typescript. With our user-friendly interface, you can easily add and remove tasks, ensuring you stay organized and productive.',
      Description2:
        '📅📌 Keep track of your to-do list effortlessly and stay on top of your daily goals. Simplify your task management with our intuitive todo application. ⚡️🚀',
      ToView: '',
      Img: '../assets/projects/Todo-app.jpg',
    },
    {
      ProjectTitle: 'Simple Ecommerce',
      Description1:
        '🛍️💻 Introducing a simple and elegant eCommerce User Interface (UI). Built with Angular, Bootstrap, and Typescript, our UI provides a clean and intuitive design for learning purposes. ',
      Description2:
        'Explore products with ease and get a glimpse of the potential of a full-fledged eCommerce application. Stay tuned as i continue to add exciting features in the future.🌟📚',
      ToView: '',
      Img: '../assets/projects/Ecommerce-app.jpg',
    },
    {
      ProjectTitle: 'Portfolio',
      Description1: "👋 Hi there! 'I'm Raghul ",
      Description2:
        '🌟 Welcome to my Portfolio! Explore my work and get to know me better.',
      ToView: '',
      Img: '../assets/projects/portfolio.jpg',
    },
  ];
}
