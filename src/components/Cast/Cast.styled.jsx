import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 25px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 39px -10px rgba(0, 0, 0, 0.75);
`;

export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 10%;

  cursor: pointer;

  transform: scale(1);
  transition: transform 2s cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 12px;
`;