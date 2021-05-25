import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustraytion
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedir de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
