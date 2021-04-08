// import Proptypes from "prop-types";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import Section from "components/molecules/Section";
import Hero from "components/molecules/Hero";
import Button from "components/atoms/Button";
import Heading from "components/atoms/Heading";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import bgHero from "assets/hero.jpg";

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
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;
