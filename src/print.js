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
  gitHubLink.href = "https://github.com/felipewantstocode/";
  gitHubLink.target = "_blank";
  const linkedIn = document.createElement("li");
  linkedIn.href = "https://www.linkedin.com/in/felipelf00/";
  const resume = document.createElement("li");
  const email = document.createElement("li");
  navList.appendChild(gitHub);
  navList.appendChild(linkedIn);
  navList.appendChild(resume);
  navList.appendChild(email);

  navigation.appendChild(navList);

  container.appendChild(navigation);

  return container;
}

function printMain() {
  const container = document.createElement("main");

  return container;
}

function printFooter() {
  const container = document.createElement("footer");
  return container;
}
