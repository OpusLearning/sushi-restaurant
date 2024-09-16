import sushi3 from "./sushi3.png";

function addContact() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1Element = document.createElement("h1");
  h1Element.textContent = "Contact Us";
  contentDiv.appendChild(h1Element);

  const image = document.createElement("img");
  image.src = sushi3;
  image.classList.add("circular-image");
  contentDiv.appendChild(image);

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-info");

  const contactDetails = [
    { label: "Phone:", value: "01332 555 123" },
    { label: "Email:", value: "info@sushihaven-derby.co.uk" },
    {
      label: "Address:",
      value: "123 Sakura Street, Derby, DE1 1AA, United Kingdom",
    },
  ];

  contactDetails.forEach((detail) => {
    const detailDiv = document.createElement("div");
    detailDiv.classList.add("contact-detail");

    const detailLabel = document.createElement("strong");
    detailLabel.textContent = detail.label;
    detailDiv.appendChild(detailLabel);

    const detailValue = document.createElement("p");
    detailValue.textContent = detail.value;
    detailDiv.appendChild(detailValue);

    contactDiv.appendChild(detailDiv);
  });

  contentDiv.appendChild(contactDiv);

  const socialMediaDiv = document.createElement("div");
  socialMediaDiv.classList.add("social-media");

  const socialMediaHeading = document.createElement("h2");
  socialMediaHeading.textContent = "Follow Us";
  socialMediaDiv.appendChild(socialMediaHeading);

  const socialMediaLinks = [
    { platform: "Facebook", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "Instagram", url: "#" },
  ];

  socialMediaLinks.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.textContent = link.platform;
    linkElement.target = "_blank";
    socialMediaDiv.appendChild(linkElement);

    socialMediaDiv.appendChild(document.createElement("span")).textContent =
      " | ";
  });

  if (socialMediaDiv.lastChild.textContent === " | ") {
    socialMediaDiv.removeChild(socialMediaDiv.lastChild);
  }

  contentDiv.appendChild(socialMediaDiv);
}

export { addContact };
