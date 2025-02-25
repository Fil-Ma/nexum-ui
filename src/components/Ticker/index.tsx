import { useMemo } from "react";
import TickerItem, { TickerContainer, TickerList } from "./styles";

const { Container, Image, Label } = TickerItem;

type TTickerElement = {
  name: string;
  imageSrc: string;
};

interface IProps {
  elements: TTickerElement[];
  spacing?: number;
  duration?: number;
}

const Ticker = ({ elements, spacing = 32, duration = 25 }: IProps) => {
  const renderedElements = useMemo(
    () =>
      elements.map(({ name, imageSrc }) => (
        <Container key={name}>
          <Image src={imageSrc} alt="" />
          <Label>{name}</Label>
        </Container>
      )),
    []
  );

  return (
    <TickerContainer>
      <TickerList $spacing={spacing} $duration={duration}>
        {renderedElements}
      </TickerList>
      <TickerList aria-hidden="true" $spacing={spacing} $duration={duration}>
        {renderedElements}
      </TickerList>
    </TickerContainer>
  );
};

export default Ticker;
