import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BackLink = ({ to, children }) => {
  return <BackStyledLink to={to}>{children}</BackStyledLink>;
};

const BackStyledLink = styled(Link)`
  font-size: 13px;
  padding: 10px;
  border-radius: 10px;
  background-color: orange;
  &:hover {
    background-color: rgb(255, 119, 0);
  }
`;

export const MovieDetailsBox = styled.div`
  display: flex;
  width: 800px;
  & > div > img {
    margin-top: 20px;
    width: 300px;
    height: 400px;
  }
`;

export const InfoLink = ({ to, children }) => {
  return <InfoStyledLink to={to}>{children}</InfoStyledLink>;
};

const InfoStyledLink = styled(Link)`
  width: 70px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  &.active {
    background-color: orange;
  }
`;

export const AdditionalInformationBox = styled.div`
  display: flex;
  gap: 50px;
`;
