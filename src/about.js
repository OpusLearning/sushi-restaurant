import sushi2 from "./sushi4.png";

function addAbout() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  const h1Element = document.createElement("h1");
  h1Element.textContent =
    "Sushi Haven: Derby's Freshest Sushi Experience with Chef-Crafted Delights and a Fun Conveyor Belt!";
  contentDiv.appendChild(h1Element);

  const image = document.createElement("img");
  image.src = sushi2;
  image.classList.add("circular-image");
  contentDiv.appendChild(image);

  const sections = [
    {
      heading: "Our Story",
      text: "Welcome to Sushi Haven, a culinary gem in Derby born from a shared passion for authentic Japanese cuisine. Our founders, Emma and David Tanaka, were inspired by their travels across Japan, immersing themselves in its rich culinary traditions. Their dream was to create a dining experience that honours these traditions while offering a contemporary touch to make it truly special.",
    },
    {
      heading: "Meet the Team",
      text: `
        <strong>Head Chef: Hiroshi Takeda</strong><br>
        Leading our kitchen is Head Chef Hiroshi Takeda, a master of sushi-making with years of experience in both traditional and modern Japanese cuisine. Trained under esteemed sushi masters in Tokyo, Chef Takeda brings his deep knowledge and meticulous craftsmanship to Sushi Haven. His dedication to selecting the finest ingredients and perfecting each dish ensures an exceptional dining experience.<br><br>
        <strong>Sous Chef: Mei Tanaka</strong><br>
        Supporting Chef Takeda is our talented Sous Chef, Mei Tanaka. Mei’s culinary journey began in her family’s traditional sushi restaurant in Kyoto, where she developed a profound expertise in Japanese cooking techniques (和食, washoku). Her creativity and attention to detail enhance our menu, making her a vital part of our team.<br><br>
        <strong>Sushi Masters: Kenji Nakamura & Sakura Yamada</strong><br>
        Our skilled Sushi Masters, Kenji Nakamura and Sakura Yamada, bring years of experience to Sushi Haven. Kenji, renowned for his skill in crafting nigiri (握り寿司) and sashimi (刺身), and Sakura, known for her innovative maki (巻き寿司) creations, ensure that our conveyor belt (回転寿司, kaiten-zushi) offers a delightful variety of fresh and beautifully presented sushi.
      `,
    },
    {
      heading: "Our Philosophy",
      text: "At Sushi Haven, we embrace the essence of traditional Japanese culinary practices while integrating modern elements to offer a unique dining experience. Our team is committed to celebrating the art of Japanese cuisine with fresh, high-quality ingredients and exceptional craftsmanship.",
    },
    {
      heading: "Join Us",
      text: "We invite you to visit Sushi Haven and discover the finest in Japanese dining. Whether you’re sharing a meal with family, friends, or celebrating a special occasion, our dedicated team is here to ensure a memorable experience.",
    },
    {
      heading: "Contact Us",
      text: "For reservations or inquiries, please contact us or call us at 01332 555 123. Follow us on social media for the latest updates and special offers.",
    },
  ];

  sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add("about-section");

    const sectionHeading = document.createElement("h2");
    sectionHeading.innerHTML = section.heading;

    const sectionText = document.createElement("p");
    sectionText.innerHTML = section.text;

    sectionDiv.appendChild(sectionHeading);
    sectionDiv.appendChild(sectionText);
    contentDiv.appendChild(sectionDiv);
  });
}

export { addAbout };
