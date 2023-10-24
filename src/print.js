import me from "./img/eu-crop.jpeg";
// import sine2 from "./img/sine2.svg";

function printPage() {
  const shadow = document.createElement("div");
  shadow.classList.add("shadow");

  shadow.addEventListener("click", () => {
    shadow.classList.remove("active");
    document.querySelector("nav").classList.remove("active");
  });

  document.body.appendChild(shadow);

  document.body.appendChild(printHeader());
  document.body.appendChild(printMain());
  document.body.appendChild(printFooter());
}

function printHeader() {
  const container = document.createElement("header");

  const navigation = document.createElement("nav");

  const navList = document.createElement("ul");
  navList.classList.add("nav-list");
  const gitHub = document.createElement("li");
  const gitHubLink = document.createElement("a");
  gitHubLink.textContent = "GitHub";
  gitHubLink.href = "https://github.com/felipelf00/";
  gitHubLink.target = "_blank";
  gitHub.appendChild(gitHubLink);
  const linkedIn = document.createElement("li");
  const linkedInLink = document.createElement("a");
  linkedInLink.textContent = "LinkedIn";
  linkedInLink.href = "https://www.linkedin.com/in/felipelf00/";
  linkedInLink.target = "_blank";
  linkedIn.appendChild(linkedInLink);
  const resume = document.createElement("li");
  const resumeLink = document.createElement("a");
  resumeLink.textContent = "Resume";
  resumeLink.href = "#";
  resumeLink.target = "_blank";
  resume.appendChild(resumeLink);
  const contact = document.createElement("li");
  const contactLink = document.createElement("a");
  contactLink.textContent = "Contact";
  contactLink.href = "#contact";
  contact.appendChild(contactLink);
  navList.appendChild(gitHub);
  navList.appendChild(linkedIn);
  navList.appendChild(resume);
  navList.appendChild(contact);

  const burger = document.createElement("span");
  burger.classList.add("burger");
  burger.classList.add("material-symbols-outlined");
  burger.textContent = "menu";

  const shadow = document.querySelector(".shadow");

  burger.addEventListener("click", () => {
    shadow.classList.add("active");
    // navList.classList.add("active");
    navigation.classList.add("active");
  });

  // shadow.addEventListener("click", () => {
  //   shadow.classList.remove("active");
  //   navList.classList.remove("active");
  // });

  navigation.appendChild(navList);
  // navigation.appendChild(shadow);

  container.appendChild(burger);
  container.appendChild(navigation);

  return container;
}

function printMain() {
  const container = document.createElement("main");

  container.appendChild(printAbout());

  container.appendChild(document.createElement("hr"));

  container.appendChild(printProjects());

  return container;
}

function printAbout() {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const title = document.createElement("div");
  title.classList.add("title-container");
  // const firstName = document.createElement("h1");
  const firstName = document.createElement("div");
  firstName.classList.add("first-name");
  firstName.textContent = "FELIPE";

  const lastName = document.createElement("div");
  lastName.textContent = "FIGUEIREDO";
  lastName.classList.add("last-name");
  // const description = document.createElement("h2");
  const developer = document.createElement("div");
  developer.classList.add("developer");
  developer.textContent = "WEB DEVELOPER";
  title.appendChild(firstName);
  title.appendChild(lastName);
  title.appendChild(developer);

  const myPicture = new Image();
  myPicture.src = me;
  myPicture.alt = "A picture of me";
  myPicture.classList.add("portrait");

  wrapper.appendChild(title);
  wrapper.appendChild(myPicture);

  const aboutMeContainer = document.createElement("div");
  aboutMeContainer.classList.add("about-me-container");
  const aboutMeTitle = document.createElement("h2");
  aboutMeTitle.textContent = "About me";
  const aboutMeText = document.createElement("p");
  aboutMeText.textContent =
    "I am a 34 year old brazilian developer, currently learning on The Odin Project's Full Stack JavaScript path. I have a bachelors degree in Mechanical Engineering and until a few months ago I was the owner of a small artisan bakery. By the end of 2022 I decided that it was time for a carreer transition and started to teach myself how to code.";
  aboutMeContainer.appendChild(aboutMeTitle);
  aboutMeContainer.appendChild(aboutMeText);

  aboutContainer.appendChild(wrapper);
  aboutContainer.appendChild(aboutMeContainer);

  return aboutContainer;
}

import battleship from "./img/battleship.jpg";
import weather from "./img/weather.jpg";
import todo from "./img/todo.jpg";
import panis from "./img/panis.jpg";

function printProjects() {
  const container = document.createElement("div");
  container.classList.add("projects-container");

  const title = document.createElement("h2");
  title.textContent = "Projects";

  const description = document.createElement("p");
  description.classList.add("projects-description");
  description.textContent =
    "Here are some projects that I developed during my code learning journey:";

  //battleship
  const bsContainer = document.createElement("div");
  bsContainer.classList.add("project");
  const bsTitleLink = document.createElement("a");
  bsTitleLink.href = "https://felipelf00.github.io/battleship/dist/";
  bsTitleLink.target = "_blank";
  const bsTitle = document.createElement("h3");
  bsTitle.classList.add("project-title");
  bsTitle.textContent = "Battleship";
  bsTitleLink.appendChild(bsTitle);

  const bsWrapper = document.createElement("div");
  bsWrapper.classList.add("project-wrapper");

  const bsImage = new Image();
  bsImage.classList.add("screenshot");
  bsImage.src = battleship;
  bsImage.alt = "screenshot of battleship game";

  const bsDescription = document.createElement("div");
  bsDescription.classList.add("description");
  bsDescription.innerHTML =
    "The classic game Battleship to be played against the (somewhat intelligent) computer.<br>This project was developed as part of a lesson on Unit Testing and Test Driven Development.";
  const bsTech = document.createElement("div");
  bsTech.classList.add("tech");
  bsTech.innerHTML =
    "<b>Developed using: </b> JavaScript, CSS, HTML, Webpack, Jest.";

  bsDescription.appendChild(bsTech);

  const bsButtons = document.createElement("div");
  bsButtons.classList.add("button-container");
  const bsLive = document.createElement("a");
  bsLive.href = "https://felipelf00.github.io/battleship/dist/";
  bsLive.target = "_blank";
  bsLive.classList.add("live");
  bsLive.classList.add("button");
  bsLive.textContent = "View page";
  const bsCode = document.createElement("a");
  bsCode.href = "https://github.com/felipelf00/battleship";
  bsCode.target = "_blank";
  bsCode.classList.add("code");
  bsCode.classList.add("button");
  bsCode.textContent = "View code";
  bsButtons.appendChild(bsLive);
  bsButtons.appendChild(bsCode);

  bsDescription.appendChild(bsButtons);

  bsWrapper.appendChild(bsImage);
  bsWrapper.appendChild(bsDescription);

  bsContainer.appendChild(bsTitleLink);
  bsContainer.appendChild(bsWrapper);

  //weather
  const wContainer = document.createElement("div");
  wContainer.classList.add("project");
  const wTitleLink = document.createElement("a");
  wTitleLink.href = "https://felipelf00.github.io/weather/dist/";
  wTitleLink.target = "_blank";
  const wTitle = document.createElement("h3");
  wTitle.classList.add("project-title");
  wTitle.textContent = "Weather app";
  wTitleLink.appendChild(wTitle);

  const wWrapper = document.createElement("div");
  wWrapper.classList.add("project-wrapper");

  const wImage = new Image();
  wImage.classList.add("screenshot");
  wImage.src = weather;
  wImage.alt = "screenshot of my weather app";

  const wDescription = document.createElement("div");
  wDescription.classList.add("description");
  wDescription.innerHTML =
    "Minimalist weather forecast app that uses Weather API. The intention behind this project was to learn how to use REST APIs and asyncronous code, but I actually use this site in real life.";
  const wTech = document.createElement("div");
  wTech.classList.add("tech");
  wTech.innerHTML =
    "<b>Developed using: </b> JavaScript, CSS, HTML, Webpack, Weather API.";

  wDescription.appendChild(wTech);

  const wButtons = document.createElement("div");
  wButtons.classList.add("button-container");
  const wLive = document.createElement("a");
  wLive.href = "https://felipelf00.github.io/weather/dist/";
  wLive.target = "_blank";
  wLive.classList.add("live");
  wLive.classList.add("button");
  wLive.textContent = "View page";
  const wCode = document.createElement("a");
  wCode.href = "https://github.com/felipelf00/weather";
  wCode.target = "_blank";
  wCode.classList.add("code");
  wCode.classList.add("button");
  wCode.textContent = "View code";
  wButtons.appendChild(wLive);
  wButtons.appendChild(wCode);

  wDescription.appendChild(wButtons);

  wWrapper.appendChild(wImage);
  wWrapper.appendChild(wDescription);

  wContainer.appendChild(wTitleLink);
  wContainer.appendChild(wWrapper);

  //todo
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("project");
  const todoTitleLink = document.createElement("a");
  todoTitleLink.href = "https://felipelf00.github.io/todo/dist/";
  todoTitleLink.target = "_blank";
  const todoTitle = document.createElement("h3");
  todoTitle.classList.add("project-title");
  todoTitle.textContent = "To-do list";
  todoTitleLink.appendChild(todoTitle);

  const todoWrapper = document.createElement("div");
  todoWrapper.classList.add("project-wrapper");

  const todoImage = new Image();
  todoImage.classList.add("screenshot");
  todoImage.src = todo;
  todoImage.alt = "screenshot of to-do list app";

  const todoDescription = document.createElement("div");
  todoDescription.classList.add("description");
  todoDescription.innerHTML =
    "Simple to-do list website. The main target on this project was to apply Object Oriented Programming (OOP) principles in a practical application. Uses local storage.";
  const todoTech = document.createElement("div");
  todoTech.classList.add("tech");
  todoTech.innerHTML =
    "<b>Developed using: </b> JavaScript, CSS, HTML, Webpack.";

  todoDescription.appendChild(todoTech);

  const todoButtons = document.createElement("div");
  todoButtons.classList.add("button-container");
  const todoLive = document.createElement("a");
  todoLive.href = "https://felipelf00.github.io/todo/dist/";
  todoLive.target = "_blank";
  todoLive.classList.add("live");
  todoLive.classList.add("button");
  todoLive.textContent = "View page";
  const todoCode = document.createElement("a");
  todoCode.href = "https://github.com/felipelf00/todo";
  todoCode.target = "_blank";
  todoCode.classList.add("code");
  todoCode.classList.add("button");
  todoCode.textContent = "View code";
  todoButtons.appendChild(todoLive);
  todoButtons.appendChild(todoCode);

  todoDescription.appendChild(todoButtons);

  todoWrapper.appendChild(todoImage);
  todoWrapper.appendChild(todoDescription);

  todoContainer.appendChild(todoTitleLink);
  todoContainer.appendChild(todoWrapper);

  //panis
  const panisContainer = document.createElement("div");
  panisContainer.classList.add("project");
  const panisTitleLink = document.createElement("a");
  panisTitleLink.href = "https://felipelf00.github.io/panis/dist/";
  panisTitleLink.target = "_blank";
  const panisTitle = document.createElement("h3");
  panisTitle.classList.add("project-title");
  panisTitle.textContent = "Panis Padaria Artesanal (artisan bakery webpage)";
  panisTitleLink.appendChild(panisTitle);

  const panisWrapper = document.createElement("div");
  panisWrapper.classList.add("project-wrapper");

  const panisImage = new Image();
  panisImage.classList.add("screenshot");
  panisImage.src = panis;
  panisImage.alt = "screenshot of artisan bakery webpage";

  const panisDescription = document.createElement("div");
  panisDescription.classList.add("description");
  panisDescription.innerHTML = "Webpage for the artisan bakery I used to own.";
  const panisTech = document.createElement("div");
  panisTech.classList.add("tech");
  panisTech.innerHTML =
    "<b>Developed using: </b> JavaScript, CSS, HTML, Webpack.";

  panisDescription.appendChild(panisTech);

  const panisButtons = document.createElement("div");
  panisButtons.classList.add("button-container");
  const panisLive = document.createElement("a");
  panisLive.href = "https://felipelf00.github.io/panis/dist/";
  panisLive.target = "_blank";
  panisLive.classList.add("live");
  panisLive.classList.add("button");
  panisLive.textContent = "View page";
  const panisCode = document.createElement("a");
  panisCode.href = "https://github.com/felipelf00/panis";
  panisCode.target = "_blank";
  panisCode.classList.add("code");
  panisCode.classList.add("button");
  panisCode.textContent = "View code";
  panisButtons.appendChild(panisLive);
  panisButtons.appendChild(panisCode);

  panisDescription.appendChild(panisButtons);

  panisWrapper.appendChild(panisImage);
  panisWrapper.appendChild(panisDescription);

  panisContainer.appendChild(panisTitleLink);
  panisContainer.appendChild(panisWrapper);

  // container.appendChild(title);
  container.appendChild(description);
  container.appendChild(bsContainer);
  container.appendChild(wContainer);
  container.appendChild(todoContainer);
  container.appendChild(panisContainer);

  return container;
}

function printFooter() {
  const container = document.createElement("footer");
  return container;
}

export default printPage;
