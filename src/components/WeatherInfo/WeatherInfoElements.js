import styled from "styled-components";

export const WeatherInfoContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.greyishBlue};
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${({ theme }) => theme.mediaQueries.bellow1024} {
    width: 40%;
  }
  @media ${({ theme }) => theme.mediaQueries.bellow568} {
    width: 100%;
  }
`;

export const WeatherImgWrap = styled.div`
  /* border: 1px solid aquamarine; */
  height: 70%;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const WeatherInfoWrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;
export const Temperature = styled.h2`
  font-weight: 500;
  font-size: 9rem;
  line-height: 169px;
`;
export const TempDegrees = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  font-size: 3rem;
  line-height: 56.35px;
`;
export const WeatherCondition = styled.h3`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 1rem 0;

  @media ${({ theme }) => theme.mediaQueries.bellow568} {
    margin: 2rem 0;
  }
`;

export const Date = styled.div`
  font-size: 1.125rem;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const DotIconWrapper = styled.span`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  display: flex;
`;

export const Location = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 2rem;
  display: flex;
`;

export const LocationIcon = styled.div`
  padding-right: 0.5rem;
`;
