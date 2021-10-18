import styled from  'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: #424242;
  height: 4.5rem;
  padding: 0 10rem;

  a {
    text-decoration: none;
  }
  
  .item {
    cursor: pointer;
    width: 3rem;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: white;
    }
  }
  
  .item.active {
    svg {
      fill: yellowgreen;
    }
  }
  
  @media(max-width: 750px) {
    gap: 2rem;
  }
`

export {
  Container
}