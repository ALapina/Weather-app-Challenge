import styled from "styled-components";

export const CurrentLocationWrapper = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  min-width: 100%;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 21px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LocationIconWrapper = styled.div`
  padding-right: 0.5rem;
`;

export const LocationTextWrapper = styled.div`
  max-width: 80%;
  overflow-wrap: break-word;
`;
