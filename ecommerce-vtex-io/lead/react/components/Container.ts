import styled from  'styled-components'

const Container = styled.div`
  background: #424242;
  border-radius: 10px;
  height: 50vh;
  width: 20vw !important;
  margin-top: 10vh;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
  }

  .error {
    color: red;
  }

  .success {
    color: #59ff00;
  }

  @media (max-width: 820px) {
    width: 100vw !important;
    height: 22vh;
    margin-top: 1rem;
    padding: 0.5rem;

    h2 {
      font-size: 1rem;
    }
  }
  
`

export {
  Container
}