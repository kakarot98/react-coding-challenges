import { createContext, useState } from "react";



const ThemeContext = createContext({})

const ThemeContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const changeTheme = () => {
        setDarkTheme(prev => {console.log(!prev); return !prev})
      }


    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }