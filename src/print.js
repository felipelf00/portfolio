import me from "./img/eu-crop.jpeg";
import sine from "./img/sine.svg";

function printPage() {
  document.body.appendChild(printHeader());
  document.body.appendChild(printMain());
  document.body.appendChild(printFooter());
}

function printHeader() {
  const container = document.createElement("header");

  const navigation = document.createElement("nav");

  const navList = document.createElement("ul");
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

  navigation.appendChild(navList);

  container.appendChild(navigation);

  return container;
}

function printMain() {
  const container = document.createElement("main");

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
  // const sineWave = new Image();
  // sineWave.src = sine;
  // sineWave.classList.add("wave");
  // firstName.appendChild(sineWave);
  // const lastName = document.createElement("h1");
  const lastName = document.createElement("div");
  lastName.textContent = "FIGUEIREDO";
  lastName.classList.add("last-name");
  // const description = document.createElement("h2");
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "WEB DEVELOPER";
  title.appendChild(firstName);
  title.appendChild(lastName);
  title.appendChild(description);

  const myPicture = new Image();
  myPicture.src = me;
  myPicture.alt = "A picture of me";
  myPicture.classList.add("portrait");

  wrapper.appendChild(title);
  wrapper.appendChild(myPicture);

  const aboutMeContainer = document.createElement("div");
  aboutMeContainer.classList.add("about-me-container");
  const aboutMeTitle = document.createElement("h3");
  aboutMeTitle.textContent = "About me";
  const aboutMeText = document.createElement("p");
  aboutMeText.textContent =
    "I am a 34 year old brazilian developer, blablablablablabla blabalblablablablablaba lablablablablabl abalablablabalbala blablablabla";
  aboutMeContainer.appendChild(aboutMeTitle);
  aboutMeContainer.appendChild(aboutMeText);

  // aboutContainer.appendChild(title);
  // aboutContainer.appendChild(myPicture);
  aboutContainer.appendChild(wrapper);
  aboutContainer.appendChild(aboutMeContainer);

  container.appendChild(aboutContainer);
  return container;
}

function printFooter() {
  const container = document.createElement("footer");
  return container;
}

export default printPage;
