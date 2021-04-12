import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "components/molecules/Section";
import Hero from "components/molecules/Hero";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";
import ProductGrid from "components/organisms/ProductGrid";
import Feature from "components/atoms/Feature";
import Footer from "components/organisms/Footer";
import bgHero from "assets/hero.jpg";
import PlaceHolderImage from "stories/assets/bg-car.jpg";
import AboutVideo from "assets/about.mp4";

const products = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    summary: "adipisicing elit",
    image: PlaceHolderImage,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    summary: "adipisicing elit",
    image: PlaceHolderImage,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    summary: "adipisicing elit",
    image: PlaceHolderImage,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    summary: "adipisicing elit",
    image: PlaceHolderImage,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    summary: "adipisicing elit",
    image: PlaceHolderImage,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    summary: "adipisicing elit",
    image: PlaceHolderImage,
  },
];

const Home = () => (
  <>
    <Hero image={bgHero}>
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
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={<FaCar />} title="Maior e melhor frota">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaKey />} title="Habilitação mais rápida">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
        <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
      <ProductGrid products={products} />
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>Rocha Auto Escola</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            sapiente corporis optio aut ratione quod magni voluptatum iure
            cupiditate consequuntur, rem tempore pariatur dolorum omnis officiis
            laborum reiciendis nihil repudiandae?
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop />
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

export default Home;
