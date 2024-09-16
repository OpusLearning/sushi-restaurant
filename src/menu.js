import misosoupImg from "./misosoup.png";
import nigiriImg from "./Nigiri.png";
import calirollImg from "./caliroll.png";
import tempuraUdonImg from "./tempuraUdon.png";

function addMenu() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = ""; // Clear existing content

  const h1Element = document.createElement("h1");
  h1Element.textContent = "Our Menu: A Taste of Japan";
  contentDiv.appendChild(h1Element);

  const menuSection = document.createElement("div");

  const menuItems = [
    {
      name: "Nigiri Sushi",
      description:
        "Fresh slices of fish atop seasoned rice. Choose from salmon, tuna, or eel.",
      price: "£12.00",
      image: nigiriImg,
    },
    {
      name: "California Roll",
      description:
        "A roll filled with crab, avocado, and cucumber, topped with sesame seeds.",
      price: "£8.50",
      image: calirollImg,
    },
    {
      name: "Miso Soup",
      description:
        "A traditional Japanese soup made with fermented soybean paste and tofu.",
      price: "£3.00",
      image: misosoupImg,
    },
    {
      name: "Tempura Udon",
      description:
        "Thick udon noodles in a rich broth, served with crispy tempura vegetables.",
      price: "£10.00",
      image: tempuraUdonImg,
    },
  ];

  menuItems.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-item";

    const itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.classList.add("menu-item-image");
    itemDiv.appendChild(itemImage);

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;
    itemDiv.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    itemDiv.appendChild(itemDescription);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `Price: ${item.price}`;
    itemPrice.className = "price";
    itemDiv.appendChild(itemPrice);

    menuSection.appendChild(itemDiv);
  });

  contentDiv.appendChild(menuSection);
}

export { addMenu };
