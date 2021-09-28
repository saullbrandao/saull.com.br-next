import { useRouter } from 'next/router'
import { FaGlobe } from 'react-icons/fa'
import * as S from './styles'

type LanguageTogglerProps = {
  title?: string
}

const LanguageToggler = ({ title }: LanguageTogglerProps) => {
  const router = useRouter()

  const handleLang = () => {
    const locale = router.locale === 'en-US' ? 'pt-BR' : 'en-US'
    document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
    router.push(router.route, router.route, { locale })
  }

  return (
    <S.Toggle
      aria-label={
        router.locale === 'pt-BR' ? 'Trocar idioma' : 'Change language'
      }
      onClick={handleLang}
    >
      {title}
      <FaGlobe />
    </S.Toggle>
  )
}

export default LanguageToggler
