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

  // const waveContainer = document.createElement("div");
  // waveContainer.classList.add("wave-container");
  // const sineWave = new Image();
  // sineWave.src = sine2;
  // sineWave.classList.add("wave");
  // waveContainer.appendChild(sineWave);
  // document.body.appendChild(waveContainer);

  // const sineWaveContainer = document.createElement("div");
  // sineWaveContainer.id = "sine-wave-container";
  // sineWaveContainer.appendChild(printSineWave());

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
    "I am a 34 year old brazilian developer, blabl ablabla blabla blabalblabl ablabl ablaba lalablabla blabalbla blablab lablabla blabalblabl ablab lablaba lalablaba lablablabl ablabl abalablabla balbala blab lablab lablabla blabalbl ablablabl ablaba lala";
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
