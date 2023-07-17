import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 40px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  width: 20%;
  transform: scale(1);
  transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const StyledLink = styled(Link)`
  color: #000000;
`;

export const Title = styled.p`
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  text-align: center;
  max-width: 200px;
`;