import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    
        useEffect(() => {
                localStorage.setItem('theme', theme);
                const localTheme = localStorage.getItem('theme');
                document.querySelector('html').setAttribute('data-theme', localTheme)
            }, [theme])

            const handelTheme = isDark => {
                setTheme(isDark ? "dark" : "light")
            }

            const themeInfo = {
                theme,
                handelTheme
            }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;