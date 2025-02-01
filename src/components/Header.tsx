import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext"
const Header = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <header className="flex justify-between px-[3rem] py-[2rem] mb-[3rem] text-black dark:bg-[#2B3844] dark:text-white">
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme} className="flex items-center">
        {theme === "dark" ? (
          <>
            <Moon className="transform scale-x-[-1] stroke-yellow-400" />
            &nbsp;&nbsp;
            <span>Dark Mode</span>
          </>
        ) : (
          <>
          <Sun className="stroke-yellow-600" />
          &nbsp;&nbsp;
          <span>Light Mode</span>
          </>
        )}
      </button>
    </header>
  )
}
export default Header