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
  const bsa1 = document.createElement("a");
  bsa1.href = "https://felipelf00.github.io/battleship/dist/";
  bsa1.target = "_blank";
  const bsTitle = document.createElement("h3");
  bsTitle.classList.add("project-title");
  bsTitle.textContent = "Battleship";
  bsa1.appendChild(bsTitle);

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

  bsContainer.appendChild(bsa1);
  bsContainer.appendChild(bsWrapper);

  //weather

  // container.appendChild(title);
  container.appendChild(description);
  container.appendChild(bsContainer);

  return container;
}

function printFooter() {
  const container = document.createElement("footer");
  return container;
}

export default printPage;
