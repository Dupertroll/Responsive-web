import "./normalize.css";
import "./style.css";
import imagen1 from "./icon-sedans.svg";
import imagen2 from "./icon-suvs.svg";
import imagen3 from "./icon-luxury.svg";

interface Columnas {
  ColorFondo: string;
  Titulo: string;
  Texto: string;
  Imagen: string;
}
const root: Element | null = document.querySelector("#app");
root?.classList.add("root");

let array: Columnas[] = [
  {
    ColorFondo: "Yellow",
    Titulo: " SEDANS",
    Texto:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    Imagen: imagen1,
  },

  {
    ColorFondo: "Cian",
    Titulo: "SUVS",
    Texto:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    Imagen: imagen2,
  },

  {
    ColorFondo: "DarkBlue",
    Titulo: "LUXURY",
    Texto:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    Imagen: imagen3,
  },
];

array.forEach((vuelta) => {
  cosas(vuelta);
});

function cosas(dato: Columnas): void {
  let container = document.createElement("div");
  let paragraph = document.createElement("p");
  let title = document.createElement("h1");
  let boton = document.createElement("button");

  container.classList.add(`${dato.ColorFondo}`, "container");
  paragraph.classList.add("paragraph");
  title.classList.add("title");
  boton.classList.add("boton", `${dato.ColorFondo}bt`);

  paragraph.textContent = `${dato.Texto}`;
  title.textContent = `${dato.Titulo}`;
  boton.textContent = "Learn More";

  container!.innerHTML = `<img src="${dato.Imagen}" alt="">`;
  container?.appendChild(title);
  container?.appendChild(paragraph);
  container?.appendChild(boton);
  root?.appendChild(container);
}
