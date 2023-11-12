import styled from 'styled-components';

export const CastList = styled.ul`
  justify-content: space-around;
  border-radius: 5px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const CastItem = styled.li`
  text-align: center;
  width: 300px;
  & > img {
    width: 300px;
  }
`;
