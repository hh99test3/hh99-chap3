import { styled } from "styled-components";
import Button from "./Button";
import { faArrowRight, faBell } from "@fortawesome/free-solid-svg-icons";

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const RedButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button
        text="Large Primary Button "
        icon={faBell}
        color="red"
        size="large"
        primary="true"
      />
      <Button text="medium" color="red" size="medium" />
      <Button text="small" color="red" />
    </ButtonGroup>
  );
};

export const BlueButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button
        text="Large Negative Button "
        icon={faArrowRight}
        color="blue"
        size="large"
        primary="true"
      />
      <Button text="medium" color="blue" size="medium" />
      <Button text="small" color="blue" />
    </ButtonGroup>
  );
};
