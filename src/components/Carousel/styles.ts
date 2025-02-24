import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: #f5f5f5;
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

export const Indicator = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  background: ${(props) => (props.$active ? "#6200ee" : "rgba(0, 0, 0, 0.5)")};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #6200ee;
  }
`;
