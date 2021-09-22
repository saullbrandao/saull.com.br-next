import SectionWrapper from 'components/SectionWrapper'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import * as S from './styles'

const ContactSection = () => {
  return (
    <SectionWrapper id="contact">
      <S.ContactSection>
        <h1>Contact</h1>
        <S.Wrapper>
          <a href="mailto: saull@outlook.com" target="_blank" rel="noreferrer">
            <FiMail />
            <span>saull@outlook.com</span>
          </a>
          <a href="https://www.linkedin.com/in/saullbrandao/" target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>saullbrandao</span>
          </a>
          <a href="https://twitter.com/saullbrandao" target="_blank" rel="noreferrer">
            <FaTwitter />
            <span>saullbrandao</span>
          </a>
        </S.Wrapper>
      </S.ContactSection>
    </SectionWrapper>
  )
}

export default ContactSection
