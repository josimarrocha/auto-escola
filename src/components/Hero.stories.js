import { text } from "@storybook/addon-knobs";
import Hero from "./Hero";
import BgCuba from "../stories/assets/bg-cuba.jpg";
import bgCar from "../stories/assets/bg-car.jpg";
import Heading from "./Heading";
import Button from "./Button";

export default {
  title: "Components/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgCuba}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola lider em aprovação")}</p>
  </Hero>
);

export const withList = () => (
  <Hero image={bgCar}>
    <Heading>
      <h1>
        Ganhe sua <strong>liberdade</strong> <br /> para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit, amet consectetur </li>
      <li>Lorem ipsum dolor sit, amet consectetur </li>
      <li>Lorem ipsum dolor sit, amet consectetur </li>
      <li>Lorem ipsum dolor sit, amet consectetur </li>
    </ul>
    <Button color="primary" variant="outlined">
      Matricule-se Agora
    </Button>
  </Hero>
);
