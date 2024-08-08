import { createContext } from "react";
import { theme } from "./theme";

// Định nghĩa kiểu dữ liệu cho props của ThemeContextProvider
type ThemeContextProviderProps = {
    children: React.ReactNode
}
// Tạo context với giá trị mặc định là đối tượng theme
export const ThemeContext = createContext(theme)

// Tạo provider component để cung cấp context cho các component con
export const ThemeContextProviderProps = ({children}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}> {children}</ThemeContext.Provider>

}