import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 24px;
  }

  a {
    img {
      height: 12px;
      padding-left: 4px;
    }
  }

  h1 {
    margin: 0;
    font-size: clamp(34px, 5.2vw, 46px);
    line-height: 1;
    font-family: 'Diablo';
  }

  h6 {
    width: 300px;
    text-align: right;
    font-size: 16px;
    margin-top: 6px;
    font-family: 'Diablo-Light';
  }
`

export const Image = styled.img`
  width: clamp(200px, 34vw, 240px);
`

export const Text = styled.p`
  margin-top: 24px;
  font-size: 18px;
`
