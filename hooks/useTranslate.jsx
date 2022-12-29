import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const useTranslate = () => {
  const { t: translate, i18n } = useTranslation()
  const [ready, setReady] = useState(false)

  const ownTranslate = text => {
    if (!ready) return text
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
