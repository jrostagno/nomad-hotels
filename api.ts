import { HotelData, Links } from "./Types/types";

const links: Links = [
  { name: "Alojate" },
  { name: "Co-Work" },
  { name: "Experimenta" },
  { name: "Únete" },
  { name: "English" },
  {
    name: "Reservar",
    hostelInfo: [
      {
        image: "/urbancard.png",
        nameURL: "/urbannamecard.png",
        description:
          "Social hub de alta experiencia, para millennials y zetas ejecutivos",
        features: [
          "Habitaciones VIP",
          "Piscina Climatizada",
          "Salon de eventos",
          "Espacio Coworking",
          "Wifi gratis",
        ],
        price: 4560,
      },
      {
        image: "/tribecard.png",
        nameURL: "/tribenamecard.png",
        description:
          "Exploradores, artistas y emprendedores juntos en un unico lugar unico",
        features: [
          "Habitaciones VIP",
          "Piscina",
          "Gastronomia vegana",
          "Wifi gratis",
        ],
        price: 3190,
      },
      {
        image: "/familycard.png",
        nameURL: "/familynamecard.png",
        description:
          "Vive junto a toda tu familia la mejor experiencia de sus vidas",
        features: [
          "Habitaciones VIP",
          "Piscina Climatizada",
          "Actividades",
          "Spa",
          "Cancha de golf",
          "Wifi gratis",
        ],
        price: 3190,
      },
      {
        image: "/tribecard.png",
        nameURL: "/tribenamecard.png",
        description:
          "Exploradores, artistas y emprendedores juntos en un unico lugar unico",
        features: [
          "Habitaciones VIP",
          "Piscina",
          "Gastronomia vegana",
          "Wifi gratis",
        ],
        price: 3190,
      },
      {
        image: "/familycard.png",
        nameURL: "/familynamecard.png",
        description:
          "Vive junto a toda tu familia la mejor experiencia de sus vidas",
        features: [
          "Habitaciones VIP",
          "Piscina Climatizada",
          "Actividades",
          "Spa",
          "Cancha de golf",
          "Wifi gratis",
        ],
        price: 3190,
      },
    ],
  },
];

const dataHome: HotelData = [
  {
    image: "/card1.png",
    location: "Arequipa",
    bgcolor: "#3D63A9",
    description: "",
    services: [],
    avatar: "/Urban.png",
  },
  {
    image: "/card2.png",
    location: "Arequipa",
    bgcolor: "rgba(43, 43, 43, 0.8)",
    description:
      "Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar",
    services: ["hotel", "food", "kids"],
    avatar: "/Tribe.png",
  },
  {
    image: "/card3.png",
    location: "Arequipa",
    bgcolor: "#AA2275",
    description: "",
    services: [],
    avatar: "/Family.png",
  },
  {
    image: "/card2.png",
    location: "Arequipa",
    bgcolor: "rgba(43, 43, 43, 0.8)",
    description:
      "Hub de exploradores, artistas y profesionales que ven al mundo su verdadero hogar",
    services: ["hotel", "food", "kids"],
    avatar: "/Tribe.png",
  },
  {
    image: "/card3.png",
    location: "Arequipa",
    bgcolor: "#AA2275",
    description: "",
    services: [],
    avatar: "/Family.png",
  },
];

const api = {
  links: async (): Promise<Links> => links,
  homeData: async (): Promise<HotelData> => dataHome,
};

export default api;
