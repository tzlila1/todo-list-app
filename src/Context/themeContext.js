import React,  {useState, useContext} from "react";
 

const ThemeContext = React.createContext()
const ThemeContextUpdate = React.createContext()

export function useTheme(){
  return useContext(ThemeContext)  
} 

export function useThemeUpdate(){
    return useContext(ThemeContextUpdate)
}

export function ThemeContextProvider ({children}) {
    const [darkTheme, setDarkTheme] = useState(false)
    const toggleDarkTheme = () =>{
        setDarkTheme(!darkTheme)
    }

    return <ThemeContext.Provider value={darkTheme}>
                <ThemeContextUpdate.Provider value={toggleDarkTheme}>
                    {children}
                </ThemeContextUpdate.Provider>
             </ThemeContext.Provider>


}

