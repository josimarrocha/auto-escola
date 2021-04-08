import Proptypes from "prop-types";
import styled from "styled-components";

const Root = styled.div`
  text-align: center;

  & h5 {
    margin: 16px 0;
    min-height: 3.9rem;
    background: red;
  }
  & p {
    background: red;
    margin: 0;
  }
`;

const getPrimaryColor = ({ theme }) => theme.colors.primary.main;

const IconRoot = styled.div`
  display: inline-block;
  width: 116px;
  height: 116px;
  padding: 8px;
  border-radius: 50%;

  &:hover {
    border: 1px solid ${getPrimaryColor};

    > * {
      color: #fff;
      background: ${getPrimaryColor};
    }
  }
`;

const IconContainer = styled.div`
  border: solid 1px #e9e9e9;
  border-radius: 50%;
  font-size: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary.main};
`;

const Feature = ({ icon, title, children }) => (
  <Root>
    <IconRoot>
      <IconContainer>{icon}</IconContainer>
    </IconRoot>
    <h5>{title}</h5>
    <div>{children}</div>
  </Root>
);

Feature.defaultProps = {
  icon: undefined,
  title: "",
  children: undefined,
};

Feature.propTypes = {
  icon: Proptypes.node,
  title: Proptypes.string,
  children: Proptypes.node,
};

export default Feature;
