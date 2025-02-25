import styled, { keyframes } from "styled-components";

const Container = styled.li`
  pointer-events: none;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Image = styled.img`
  height: 64px;
  width: 64px;
  object-fit: contain;
`;

const Label = styled.p`
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
`;

export default {
  Container,
  Image,
  Label,
};

export const TickerContainer = styled.div`
  display: inline-flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 128px,
    black calc(100% - 128px),
    transparent 100%
  );
`;

const infiniteScroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const TickerList = styled.ul<{ $duration: number; $spacing: number }>`
  list-style-type: none;
  padding-left: ${(props) => props.$spacing}px;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: ${(props) => props.$spacing}px;
  animation: ${infiniteScroll} ${(props) => props.$duration}s linear infinite;
`;
