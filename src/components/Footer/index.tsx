import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import * as S from './styles'

const Footer = ({ showIcons = true }) => {
  return (
    <S.FooterSection showIcons={showIcons}>
      <span>© 2021 Saull Brandão. All rights reserved.</span>
      {showIcons && (
        <S.Wrapper>
          <a
            href="https://github.com/saullbrandao"
            target="_blank"
            rel="noreferrer"
            aria-label="Github page"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saullbrandao/"
            target="_blank"
            rel="noreferrer"
            aria-label="Linkedin page"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto: saull@outlook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email address"
          >
            <FiMail />
          </a>
          <a
            href="https://twitter.com/saullbrandao"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter page"
          >
            <FaTwitter />
          </a>
        </S.Wrapper>
      )}
    </S.FooterSection>
  )
}

export default Footer
