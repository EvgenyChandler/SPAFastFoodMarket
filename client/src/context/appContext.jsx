import { createContext, useContext, useState } from "react"

const appContext = createContext()

const AppContextProvider = ({ children }) => {

  const [deliveryFlag, setDeliveryFlag] = useState(false)

  const setDeliveryFlagHandler = (status) => {
    setDeliveryFlag(status)
  }
  
  return (
    <appContext.Provider
      value={{
        deliveryFlag,
        setDeliveryFlagHandler,
    }}
    >
      {children}
    </appContext.Provider>
  )
}

export default AppContextProvider

const useAppContext = () => useContext(appContext)

export { useAppContext } 
