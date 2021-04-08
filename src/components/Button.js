import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const getMainColor = ({ theme: { colors }, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return colors.primary.main;
    case ButtonColors.danger:
      return colors.danger.main;
    default:
      return "#e0e0e0";
  }
};
const getDarkColor = ({ theme: { colors }, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return colors.primary.dark;
    case ButtonColors.danger:
      return colors.danger.dark;
    default:
      return "#5a6268";
  }
};
const getColorText = ({ theme: { colors }, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return colors.primary.text;
    case ButtonColors.danger:
      return colors.danger.text;
    default:
      return "#212121";
  }
};

const getOutlinedText = (props) => {
  if (props.color === ButtonColors.default) {
    return props.theme.colors.primary.text;
  }
  return getMainColor(props);
};

const getLinkText = (props) => {
  if (props.color === ButtonColors.default) {
    return "#757575";
  }
  return getMainColor(props);
};

const Button = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  &:hover:enabled {
    background-color: ${getDarkColor};
    border: 2px solid ${getDarkColor};
  }
`;

const ButtonOutlined = styled(Button)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:enabled {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonLink = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding: inherit;

  &:hover:enabled {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;

const ButtonWrapper = (props) => {
  switch (props.variant) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props} />;
    case ButtonVariants.link:
      return <ButtonLink {...props} />;
    default:
      return <Button {...props} />;
  }
};

ButtonWrapper.defaultProps = {
  type: "Button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
};

export default ButtonWrapper;
