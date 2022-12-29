import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import commonEn from '../public/locales/en/common.json'

const useTranslate = () => {
  const { t: translate, i18n } = useTranslation()
  const [ready, setReady] = useState(false)

  const ownTranslate = text => {
    // * Si aún no está listo, devolver el texto en inglés por defecto.
    if (!ready) return commonEn[text] || text

    // * Regresar el texto traducido.
    return translate(text)
  }

  useEffect(() => {
    setReady(true)
  }, [])

  return {
    t: ownTranslate,
    ready,
    i18n
  }
}

export default useTranslate
