import React, { createContext, useEffect } from 'react'

import Aos from 'aos'

import 'aos/dist/aos.css'

export interface FadeInterface {
  Aos: any
}

export const FadeContext = createContext<FadeInterface>({ Aos })

export const FadeContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return <FadeContext.Provider value={{ Aos }}>{children}</FadeContext.Provider>
}
