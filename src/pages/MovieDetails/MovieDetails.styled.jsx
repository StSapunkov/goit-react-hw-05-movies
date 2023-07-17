import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  width: 120px;
  padding: 5px 15px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-decoration: none;
  color: #ffffff;
  background-color: #ff4500;
  border-radius: 5px;

  :hover {
    background-color: #9d3109;
  }
`;

export const ThumbDetails = styled.div`
  display: flex;
  gap: 20px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 39px -10px rgba(0, 0, 0, 0.75);
`;

export const ThumbInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListGenres = styled.ul`
  display: flex;
  gap: 5px;
`;

export const ItemGenres = styled.li`
  background-color: #78ae59;
  color: #ffffff;
  border-radius: 5px;
  padding: 5px 15px;
`;

export const ThumbAdditional = styled.div``;

export const AdditionalList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`;

export const AdditionalItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: #ff4500;
  border-radius: 5px;
`;