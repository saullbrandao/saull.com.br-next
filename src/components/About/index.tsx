import SectionWrapper from 'components/SectionWrapper'
import * as S from './styles'

const About = () => {
  return (
    <SectionWrapper id="about">
      <S.AboutSection>
        <h1>About</h1>
        {/* TODO: write about me */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          voluptatum cum enim dolorem excepturi culpa hic, rem nulla amet dolore
          rerum molestias doloremque repellendus labore harum temporibus
          repellat? Voluptatem reprehenderit officia odit corporis fugiat
          laborum sed veniam impedit? Veritatis, sint?
        </p>
      </S.AboutSection>
    </SectionWrapper>
  )
}

export default About
