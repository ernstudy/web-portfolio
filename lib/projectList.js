import hamburgerProject from "../public/images/projects-image/hambuger-site.png";
import photographyProject from "../public/images/projects-image/photography-site.png";
import mathApppProject from "../public/images/projects-image/math-app.png";
import WeatherApp from "../public/images/projects-image/weather-app.png";
import pixernImg from "../public/images/projects-image/pixern.jpg";
import ernewsImg from "../public/images/projects-image/ernews.png";
import calendarImg from "../public/images/projects-image/calendar-app.png";

const projectList = [
  {
    id: crypto.randomUUID(),
    image: WeatherApp,
    name: "Temperature Application with React and Material UI",
    description:
      "This temperature application is developed with React and utilizes Material UI for a modern and attractive user interface. It also integrates with the Free Weather API to provide accurate and up-to-date weather data.",
    gh_link: "https://github.com/ernstudy/weather-app.git",
    site_link: "https://ernstudy.com/portfolio/weather-app/",
  },
  {
    id: crypto.randomUUID(),
    image: mathApppProject,
    name: " Math Application",
    description:
      " I developed this math application in 2023. It helped me improve my programming logic and learn about the JavaScript language. It is a quiz application where you have to find the correct result of the operation between two numbers.  ",
    gh_link: "https://github.com/ernstudy/math4kids.git",
    site_link: "https://ernstudy.com/portfolio/math4kids",
  },
  {
    id: crypto.randomUUID(),
    image: hamburgerProject,
    name: "Simple Hamburger Website",
    description:
      "This is a simple fictional hamburger website I developed when I was just learning HTML and CSS. It helped me understand web design and layout concepts.",
    gh_link: "https://github.com/ernstudy/At-Burger-Delights.git",
    site_link: "https://ernstudy.com/portfolio/hamburger-website",
  },
];

const photographywebsite = {
  id: crypto.randomUUID(),
  image: photographyProject,
  name: "Single Page Photography Website",
  description:
    "I developed this fictional single-page photography website after watching a landing page tutorial. I decided to add the 'About' and 'Contact' sections. The site is developed with HTML, CSS, and JavaScript.",
  gh_link: "https://github.com/ernstudy/ken-zee-photographers.git",
  site_link: "https://ernstudy.com/portfolio/photography-website",
};
projectList.push(photographywebsite);

// Jason Derulo

// {
// id: crypto.randomUUID(),
//   image: null,
//   name: "Event Website for Jason Derulo Concert",
//   description:
//     "This website was a challenge for me when I was just learning React on Udemy. I learned how to create animations and apply events in JavaScript using the Date() method. It is a fictional website for a concert event by the artist Jason Derulo.",
//   gh_link: '',
// site_link: "";
// },

// PixXern - imges app
const pixern = {
  id: crypto.randomUUID(),
  image: pixernImg,
  name: "PixErn - Free High-Quality Images App ",
  description:
    " I developed this image app using React and the Unsplash API for the images. It is still a work in progress, and I plan to add more features in the future.",
  gh_link: "https://github.com/ernstudy/pixern.git",
  site_link: "https://ernstudy.com/portfolio/pixern/",
};

projectList.unshift(pixern);

// ernews
const ernews = {
  id: crypto.randomUUID(),
  image: ernewsImg,
  name: "ERNews - Global news platform",
  description:
    " ERNews is a news application that delivers headlines and real-time updates. It provides access to global information and allows users to customize categories for a simple and straightforward experience.",
  gh_link: "https://github.com/ernstudy/ernews.git",
  site_link: "https://ernstudy.com/portfolio/ernews/",
};

projectList.unshift(ernews);

// calendar
const calendar = {
  id: crypto.randomUUID(),
  image: calendarImg,
  name: "Simple and Efficient Calendar for Event Management.",
  description:
    "This Calendar App displays the date, makes it easy to add and manage events effortlessly, all with an intuitive interface optimized for a smooth and efficient experience.",
  gh_link: "https://github.com/ernstudy/calendar.git",
  site_link: "https://calendar.ernstudy.com/",
};

projectList.unshift(calendar);

export default projectList;
