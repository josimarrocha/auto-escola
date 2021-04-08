import Proptypes from "prop-types";
import styled, { css } from "styled-components";
import { breakAt, BreakpointSizes } from "styles/Breakpoints";

const breakColumnAt = (size) => (props) =>
  props[size] &&
  css`
    ${breakAt(BreakpointSizes[size])} {
      grid-template-columns: repeat(${(prop) => prop[size]}, 1fr);
    }
  `;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr;

  ${breakColumnAt("sm")}
  ${breakColumnAt("md")}
  ${breakColumnAt("lg")}
  ${breakColumnAt("xl")}
`;

const GridWrapper = (props) => <Grid {...props} />;

GridWrapper.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

GridWrapper.propTypes = {
  sm: Proptypes.number,
  md: Proptypes.number,
  lg: Proptypes.number,
  xl: Proptypes.number,
};

export default GridWrapper;
