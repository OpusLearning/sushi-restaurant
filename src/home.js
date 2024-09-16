import sushi1 from "./sushi1.png";

function addHome() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1Element = document.createElement("h1");
  h1Element.textContent =
    "Sushi Haven: Derby's Freshest Sushi Experience with Chef-Crafted Delights and a Fun Conveyor Belt!";
  contentDiv.appendChild(h1Element);

  const image = document.createElement("img");
  image.src = sushi1;
  image.classList.add("circular-image");
  contentDiv.appendChild(image);

  const sections = [
    {
      heading: "Experience the Finest Sushi in Derby",
      text: "At Sushi Haven, we invite you to embark on a culinary journey where freshness meets innovation. Nestled in the heart of Derby, our new sushi restaurant offers a delightful dining experience with a focus on chef-crafted dishes and premium ingredients.",
    },
    {
      heading: "Fresh and Exquisite",
      text: "Every dish at Sushi Haven is meticulously prepared by our skilled chefs, who use only the freshest ingredients to ensure exceptional flavour and quality. Our menu features a wide variety of sushi and Japanese dishes, each crafted with care and precision to deliver an authentic taste of Japan.",
    },
    {
      heading: "Innovative Conveyor Belt Dining",
      text: "Experience the excitement of our conveyor belt system, where an array of beautifully presented sushi and other dishes glide past your table. Choose your favourites as they pass by, or order from our extensive menu for a bespoke dining experience. Our conveyor belt adds a dynamic and interactive element to your meal, making every visit to Sushi Haven unique.",
    },
    {
      heading: "Family-Friendly Atmosphere",
      text: "Sushi Haven is designed with families in mind. Our child-friendly booths provide a comfortable and fun environment for diners of all ages, ensuring that both children and adults can enjoy their meal in a relaxed setting. We strive to make dining out with the family an enjoyable and stress-free experience.",
    },
    {
      heading: "Join Us Today",
      text: "Whether you're a sushi enthusiast or new to Japanese cuisine, Sushi Haven is the perfect place to enjoy a delicious and memorable meal. Visit us in Derby and discover why we're quickly becoming the city's favourite sushi spot. We look forward to welcoming you to Sushi Haven!",
    },
    {
      heading: "Contact Us",
      text: "For reservations or inquiries, please contact us or call us at [insert phone number]. Follow us on social media for the latest updates and special offers.",
    },
  ];

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("home-section");

    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = section.heading;

    const sectionText = document.createElement("p");
    sectionText.textContent = section.text;

    sectionDiv.appendChild(sectionHeading);
    sectionDiv.appendChild(sectionText);
    contentDiv.appendChild(sectionDiv);
  });
}

export { addHome };
