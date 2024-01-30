import me from "./img/eu-crop.jpeg";
import battleship from "./img/battleship.jpg";
import weather from "./img/weather.jpg";
import todo from "./img/todo.jpg";
import panis from "./img/panis.jpg";
import memory from "./img/memory.jpg";
import shop from "./img/shop.jpg";
import tsf from "./img/tsf.jpg";

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
  // resume.textContent = "Resume";
  resume.classList.add("resume");
  const resumeDrop = document.createElement("div");
  resumeDrop.textContent = "Resume";

  const portugueseLink = document.createElement("a");
  portugueseLink.classList.add("pt");
  portugueseLink.textContent = "Português";
  portugueseLink.href = "../src/CV.pdf";
  portugueseLink.target = "_blank";

  const englishLink = document.createElement("a");
  englishLink.classList.add("en");
  englishLink.textContent = "English";
  englishLink.href = "../src/CV_en.pdf";
  englishLink.target = "_blank";

  resume.appendChild(resumeDrop);
  resume.appendChild(portugueseLink);
  resume.appendChild(englishLink);

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
    "I am a 34 year old brazilian looking for opportunities to work as a Web Developer. I am currently studying Systems Analysis and Development (Análise e Desenvolvimento de Sistemas) and I have a degree in Mechanical Engineering. Until a few months ago I was the owner of a small artisan bakery, but I decided it was time for a career transition and started to learn how to code with the help of a course offered by The Odin Project.";
  aboutMeContainer.appendChild(aboutMeTitle);
  aboutMeContainer.appendChild(aboutMeText);

  aboutContainer.appendChild(wrapper);
  aboutContainer.appendChild(aboutMeContainer);

  return aboutContainer;
}

function printProjects() {
  const container = document.createElement("div");
  container.classList.add("projects-container");

  const title = document.createElement("h2");
  title.textContent = "Projects";

  const description = document.createElement("p");
  description.classList.add("projects-description");
  description.textContent =
    "Here are some projects that I developed during my code learning journey:";

  // Tênis Sem Fronteiras
  const tsfContainer = document.createElement("div");
  tsfContainer.classList.add("project");
  const tsfTitleLink = document.createElement("a");
  tsfTitleLink.href = "https://tenissemfronteiras.netlify.app/";
  tsfTitleLink.target = "_blank";
  const tsfTitle = document.createElement("h3");
  tsfTitle.classList.add("project-title");
  tsfTitle.textContent = "Tênis Sem Fronteiras (volunteering project)";
  tsfTitleLink.appendChild(tsfTitle);

  const tsfWrapper = document.createElement("div");
  tsfWrapper.classList.add("project-wrapper");

  const tsfImage = new Image();
  tsfImage.classList.add("screenshot");
  tsfImage.src = tsf;
  tsfImage.alt = "screenshot of tsf webpage";

  const tsfDescription = document.createElement("div");
  tsfDescription.classList.add("description");
  tsfDescription.innerHTML =
    "Webpage for a volunteering project that provides free tennis classes for children of low income families.<br>On this project I took the opportunity to start learning TypeScript and Tailwind CSS.";
  const tsfTech = document.createElement("div");
  tsfTech.classList.add("tech");
  tsfTech.innerHTML =
    "<b>Developed using: </b> React, TypeScript, Tailwind CSS, HTML";

  tsfDescription.appendChild(tsfTech);

  const tsfButtons = document.createElement("div");
  tsfButtons.classList.add("button-container");
  const tsfLive = document.createElement("a");
  tsfLive.href = "https://tenissemfronteiras.netlify.app/";
  tsfLive.target = "_blank";
  tsfLive.classList.add("live");
  tsfLive.classList.add("button");
  tsfLive.textContent = "View page";
  const tsfCode = document.createElement("a");
  tsfCode.href = "https://github.com/felipelf00/tenis-sem-fronteiras";
  tsfCode.target = "_blank";
  tsfCode.classList.add("code");
  tsfCode.classList.add("button");
  tsfCode.textContent = "View code";
  tsfButtons.appendChild(tsfLive);
  tsfButtons.appendChild(tsfCode);

  tsfDescription.appendChild(tsfButtons);

  tsfWrapper.appendChild(tsfImage);
  tsfWrapper.appendChild(tsfDescription);

  tsfContainer.appendChild(tsfTitleLink);
  tsfContainer.appendChild(tsfWrapper);

  // shop
  const shopContainer = document.createElement("div");
  shopContainer.classList.add("project");
  const shopTitleLink = document.createElement("a");
  shopTitleLink.href = "https://felipes-fake-store.netlify.app/";
  shopTitleLink.target = "_blank";
  const shopTitle = document.createElement("h3");
  shopTitle.classList.add("project-title");
  shopTitle.textContent = "Store webpage";
  shopTitleLink.appendChild(shopTitle);

  const shopWrapper = document.createElement("div");
  shopWrapper.classList.add("project-wrapper");

  const shopImage = new Image();
  shopImage.classList.add("screenshot");
  shopImage.src = shop;
  shopImage.alt = "screenshot of shop webpage";

  const shopDescription = document.createElement("div");
  shopDescription.classList.add("description");
  shopDescription.innerHTML =
    "Webpage for a clothing store with shopping cart functionality.<br>The objective of this project was to understand how to use React to handle routing, data fetching, state managing with the Context API, and prop type validation.";
  const shopTech = document.createElement("div");
  shopTech.classList.add("tech");
  shopTech.innerHTML =
    "<b>Developed using: </b> React, Fake Store API, JavaScript, CSS, HTML";

  shopDescription.appendChild(shopTech);

  const shopButtons = document.createElement("div");
  shopButtons.classList.add("button-container");
  const shopLive = document.createElement("a");
  shopLive.href = "https://felipes-fake-store.netlify.app/";
  shopLive.target = "_blank";
  shopLive.classList.add("live");
  shopLive.classList.add("button");
  shopLive.textContent = "View page";
  const shopCode = document.createElement("a");
  shopCode.href = "https://github.com/felipelf00/shopping-cart";
  shopCode.target = "_blank";
  shopCode.classList.add("code");
  shopCode.classList.add("button");
  shopCode.textContent = "View code";
  shopButtons.appendChild(shopLive);
  shopButtons.appendChild(shopCode);

  shopDescription.appendChild(shopButtons);

  shopWrapper.appendChild(shopImage);
  shopWrapper.appendChild(shopDescription);

  shopContainer.appendChild(shopTitleLink);
  shopContainer.appendChild(shopWrapper);

  //cat game
  const catContainer = document.createElement("div");
  catContainer.classList.add("project");
  const catTitleLink = document.createElement("a");
  catTitleLink.href = "https://cat-memory-game1.netlify.app/";
  catTitleLink.target = "_blank";
  const catTitle = document.createElement("h3");
  catTitle.classList.add("project-title");
  catTitle.textContent = "Cat memory game";
  catTitleLink.appendChild(catTitle);

  const catWrapper = document.createElement("div");
  catWrapper.classList.add("project-wrapper");

  const catImage = new Image();
  catImage.classList.add("screenshot");
  catImage.src = memory;
  catImage.alt = "screenshot of cat memory game";

  const catDescription = document.createElement("div");
  catDescription.classList.add("description");
  catDescription.innerHTML =
    "A memory game played with cat gifs.<br>With this one the target was to learn how to structure a React project and to use the useState and useEffect hooks. The game fetches random cat gifs from Giphy's API.";
  const catTech = document.createElement("div");
  catTech.classList.add("tech");
  catTech.innerHTML =
    "<b>Developed using: </b> React (with Vite), Giphy API, JavaScript, CSS, HTML";

  catDescription.appendChild(catTech);

  const catButtons = document.createElement("div");
  catButtons.classList.add("button-container");
  const catLive = document.createElement("a");
  catLive.href = "https://cat-memory-game1.netlify.app/";
  catLive.target = "_blank";
  catLive.classList.add("live");
  catLive.classList.add("button");
  catLive.textContent = "View page";
  const catCode = document.createElement("a");
  catCode.href = "https://github.com/felipelf00/memory-game";
  catCode.target = "_blank";
  catCode.classList.add("code");
  catCode.classList.add("button");
  catCode.textContent = "View code";
  catButtons.appendChild(catLive);
  catButtons.appendChild(catCode);

  catDescription.appendChild(catButtons);

  catWrapper.appendChild(catImage);
  catWrapper.appendChild(catDescription);

  catContainer.appendChild(catTitleLink);
  catContainer.appendChild(catWrapper);

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
  panisTitle.textContent = "Panis Padaria Artesanal";
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
  container.appendChild(tsfContainer);
  container.appendChild(shopContainer);
  container.appendChild(catContainer);
  container.appendChild(bsContainer);
  container.appendChild(wContainer);
  container.appendChild(todoContainer);
  container.appendChild(panisContainer);

  return container;
}

function printFooter() {
  const container = document.createElement("footer");

  const contact = document.createElement("h2");
  contact.textContent = "Contact me!";
  contact.id = "contact";

  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  const form = document.createElement("form");
  form.classList.add("contact-form");
  form.action = "https://formsubmit.co/f482dcda8ff4d9dbda15030d72670cda";
  form.method = "POST";
  const name = document.createElement("input");
  name.type = "text";
  name.id = "name";
  name.name = "name";
  name.placeholder = "Name";
  const email = document.createElement("input");
  // email.classList.add("email-input");
  email.type = "email";
  email.id = "email";
  email.name = "email";
  email.placeholder = "Email";
  email.required = true;
  // const emailLabel = document.createElement("label");
  // emailLabel.for = "email";
  // emailLabel.textContent = "Your email address: ";
  const message = document.createElement("textarea");
  // message.classList.add("message-input");
  // message.type = "textarea";
  message.rows = "5";
  message.id = "message";
  message.name = "message";
  message.required = true;
  message.placeholder = "Message";
  // const messageLabel = document.createElement("label");
  // messageLabel.for = "message";
  // messageLabel.textContent = "Message: ";
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  submit.classList.add("button");

  form.appendChild(name);
  // form.appendChild(emailLabel);
  form.appendChild(email);
  // form.appendChild(messageLabel);
  form.appendChild(message);
  form.appendChild(submit);

  formContainer.appendChild(contact);
  formContainer.appendChild(form);

  const copyright = document.createElement("div");
  copyright.classList.add("copyright");
  copyright.textContent =
    "© 2023 Felipe Lindner de Figueiredo. All Rights Reserved.";

  container.appendChild(formContainer);
  container.appendChild(copyright);

  return container;
}

export default printPage;
