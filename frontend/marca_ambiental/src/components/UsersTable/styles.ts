import { About } from './../../pages/About';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
  }
  
  td {
    padding: 1rem 2rem;
    border: 0;
    background: #FFF;
    color: var(--text);

  }
  
  button{
    background: var(--red-button);
    color: #FFF;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem;
    
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    img{
      height: 1rem;
      width: 1rem;
    }
  }
`;