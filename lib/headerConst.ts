export const options = [
  {
    name: "City Host",
  },
  {
    name: "Actividades",
  },
  {
    name: "Gastronomia",
  },
  {
    name: "Eventos",
  },
];

export const userInfo = [
  { position: 1, title: "Concepto", subtitle: "Co-liging" },
  { position: 2, title: "Experiencias", subtitle: "únicas" },
  { position: 3, title: "Gastronomía", subtitle: "multiformato" },
];

//  SLIDER PROPS

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        vertical: true,
        verticalSwiping: true,
      },
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 3,
    //     initialSlide: 3,
    //     vertical: true,
    //     verticalSwiping: true,
    //   },
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     vertical: true,
    //     verticalSwiping: true,
    //   },
    // },
  ],
};
