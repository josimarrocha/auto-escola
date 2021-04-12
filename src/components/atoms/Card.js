import PropTypes from "prop-types";
import styled from "styled-components";

//#region CardBody
const StyledBody = styled.div`
  padding: 16px;
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region CardMedia
const StyledMidia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  height: 270px;
`;
export const CardMedia = ({ image }) => <StyledMidia image={image} />;

CardMedia.defaultProps = {
  image: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
};
//#endregion

//#region Card
const StyledCard = styled.div`
  background: #fff;
  border-radius: 4px;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
//#endregion
