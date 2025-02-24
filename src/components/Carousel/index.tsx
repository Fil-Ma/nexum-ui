import { useState, useEffect, useRef } from "react";
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselSlide,
  Indicators,
  Indicator,
} from "./styles";
import { ICarouselProps } from "./types";

const Carousel = ({
  slides,
  autoplay = false,
  autoplayInterval = 3000,
  showIndicators = true,
}: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = slides.length;

  const goToSlide = (index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(nextSlide, autoplayInterval);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayInterval, currentIndex]);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={slidesRef}>
        {slides.map((slide, index) => (
          <CarouselSlide key={index}>{slide}</CarouselSlide>
        ))}
      </CarouselWrapper>
      {showIndicators && (
        <Indicators>
          {slides.map((_, index) => (
            <Indicator
              key={index}
              $active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </Indicators>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
