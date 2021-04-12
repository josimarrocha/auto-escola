import ProductGrid from "./ProductGrid";
import PlaceHolderImage from "stories/assets/bg-car.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      {
        id: 1,
        title: "Titulo 1",
        summary: "Texto",
        image: PlaceHolderImage,
      },
      {
        id: 2,
        title: "Titulo 2",
        summary: "Texto",
        image: PlaceHolderImage,
      },
      {
        id: 3,
        title: "Titulo 3",
        summary: "Texto",
        image: PlaceHolderImage,
      },
      {
        id: 4,
        title: "Titulo 4",
        summary: "Texto",
        image: PlaceHolderImage,
      },
      {
        id: 5,
        title: "Titulo 5",
        summary: "Texto",
        image: PlaceHolderImage,
      },
      {
        id: 6,
        title: "Titulo 6",
        summary: "Texto",
        image: PlaceHolderImage,
      },
    ]}
  />
);
