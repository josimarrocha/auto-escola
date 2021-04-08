import styled from "styled-components";
import { BreakpointSizes, breakAt } from "styles/Breakpoints";

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSizes.md)} {
    padding: 0 16px;
  }
  ${breakAt(BreakpointSizes.lg)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

export default Container;
