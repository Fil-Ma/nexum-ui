import styled from "styled-components";

export const DialogHeader = styled.div`
  padding: 16px 24px;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
`;

export const DialogContent = styled.div`
  padding: 16px 24px;
  font-size: 16px;
  color: #333;
  flex: 1;
  overflow-y: auto;
`;

export const DialogActions = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  border-top: 1px solid #e0e0e0;
`;
