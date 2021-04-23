import styled from 'styled-components';
export const Container = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  .categories {
    align-self: start;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
  }
`;
export const Category = styled.span`
  padding: 0.5rem 1rem;
  margin: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  color: #7a7a7a;
  cursor: pointer;
  font-size: 1.1rem;
  ${({ active }) => active && `border-color: red;`}
`;
