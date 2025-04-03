import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex justify-between xsm:px-2 xsm:text-sm xsm:mb-[1rem] xl:px-[3rem] py-6 mb-[3rem] bg-white text-black dark:text-white dark:bg-[#2B3844] desktop:px-[11.5rem]">
      <h1 className="xsm:text-sm font-bold xl:text-xl">Where in the world?</h1>
      <button onClick={toggleTheme} className="flex items-center xl:text-small">
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
  );
};
export default Header;
