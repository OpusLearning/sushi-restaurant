function addContent() {
  const contentDiv = document.getElementById("content");
  const h1Element = document.createElement("h1");
  h1Element.textContent =
    "Sushi Haven: Derby's Freshest Sushi Experience with Chef-Crafted Delights and a Fun Conveyor Belt!";
  const textNode = document.createTextNode(
    "Welcome to Sushi Haven, Derby's newest destination for exceptional sushiand authentic Japanese cuisine. At Sushi Haven, every dish is crafted byour skilled chefs using only the freshest ingredients, ensuring each biteis a delightful experience. Our innovative conveyor belt system brings adynamic dining experience to your table, while our child-friendly boothsmake it easy for families to enjoy a relaxed meal together. Whether you’rea sushi aficionado or trying it for the first time, Sushi Haven offers awelcoming atmosphere and delectable options for everyone. Join us for anunforgettable culinary journey right in the heart of Derby!"
  );
  contentDiv.appendChild(h1Element);
  contentDiv.appendChild(textNode);
}

export { addContent };
