import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
        explicabo velit officia, facere maiores nobis est assumenda? Quasi
        molestiae vitae architecto nemo doloremque, voluptatum mollitia fugit
        incidunt adipisci vel voluptas!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
