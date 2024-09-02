import React from "react";

import Amazonproductitems from "./Amazonproductitems";

export default function Shoppingelectronicdevices() {
  const electronicDevices = [
    {
      id: 1,
      name: "Samsung QLED 55-inch Smart TV",
      price: 799.99,
      description:
        "A 55-inch QLED 4K Smart TV with stunning picture quality, AI upscaling, and voice control.",
      rating: 4.7,
      image: "./Shoppingimageselectronics/image.png",
    },
    {
      id: 2,
      name: "LG OLED 65-inch 4K TV",

      price: 1299.99,
      description:
        "A 65-inch OLED 4K TV with perfect blacks, infinite contrast, and Dolby Vision for an immersive experience.",
      rating: 4.8,
      image: "./Shoppingimageselectronics/image copy 2.png",
    },
    {
      id: 3,
      name: "Sony Bravia 75-inch 4K Ultra HD",

      price: 1499.99,
      description:
        "A 75-inch 4K Ultra HD TV with X-Reality PRO, Triluminos display, and Android TV for all your entertainment needs.",
      rating: 4.6,
      image: "./Shoppingimageselectronics/image copy 3.png",
    },
    {
      id: 4,
      name: "TCL 43-inch 4K UHD Roku Smart TV",

      price: 299.99,
      description:
        "A budget-friendly 43-inch 4K UHD TV with Roku built-in for access to thousands of streaming channels.",
      rating: 4.4,
      image: "./Shoppingimageselectronics/image copy 4.png",
    },
    {
      id: 5,
      name: "Vizio 50-inch 4K Smart TV",

      price: 349.99,
      description:
        "A 50-inch 4K Smart TV with Vizio SmartCast for easy access to apps and voice control via Google Assistant.",
      rating: 4.5,
      image: "./Shoppingimageselectronics/image copy 5.png",
    },
    {
      id: 6,
      name: "Canon EOS R5",
      price: 3899.99,
      description:
        "A professional-grade mirrorless camera with 45MP full-frame sensor, 8K video, and advanced autofocus.",
      rating: 4.9,
      image: "./Shoppingimageselectronics/image copy 6.png",
    },
    {
      id: 7,
      name: "Nikon Z6 II",
      price: 1999.99,
      description:
        "A versatile mirrorless camera with 24.5MP sensor, dual processors, and 4K UHD video capabilities.",
      rating: 4.7,
      image: "./Shoppingimageselectronics/image copy 7.png",
    },
    {
      id: 8,
      name: "Sony Alpha a7 III",
      price: 1799.99,
      description:
        "A well-rounded mirrorless camera with 24.2MP full-frame sensor, 4K video, and fast hybrid autofocus.",
      rating: 4.8,
      image: "./Shoppingimageselectronics/image copy 8.png",
    },
    {
      id: 9,
      name: "Fujifilm X-T4",
      brand: "Fujifilm",
      price: 1699.99,
      description:
        "A compact mirrorless camera with 26.1MP APS-C sensor, in-body stabilization, and 4K/60p video recording.",
      rating: 4.6,
      image: "./Shoppingimageselectronics/image copy 9.png",
    },
    {
      id: 10,
      name: "Panasonic Lumix GH5",
      price: 1499.99,
      description:
        "A hybrid mirrorless camera with 20.3MP sensor, 4K/60p video, and advanced video features for filmmakers.",
      rating: 4.7,
      image: "./Shoppingimageselectronics/image copy 10.png",
    },
  ];

  return (
    <React.Fragment>
      {Array.isArray(electronicDevices) &&
        electronicDevices.map((devices) => (
          <Amazonproductitems
            id={devices.id}
            name={devices.name}
            image={devices.image}
            price={devices.price}
            rating={devices.rating}
            more_info={devices.description}
          />
        ))}
    </React.Fragment>
  );
}
