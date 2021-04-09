import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "components/molecules/Section";
import Hero from "components/molecules/Hero";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import bgHero from "assets/hero.jpg";
import AboutVideo from "assets/about.mp4";
import Footer from "components/organisms/Footer";

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
