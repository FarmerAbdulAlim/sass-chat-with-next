import DarkModeToggle from "./DarkModeToggle"
import Logo from "./Logo"


function Header() {
  return (
   <header className="m-5 sticky z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-900 max-w-7xl mx-auto p-2">
        <Logo/>
        <div className="flex-1">
          {/* Language Select */}
          {/* Session */}
          {/* DarkMode Toggle */}
          <DarkModeToggle/>
          {/* User Button */}

        </div>
    </nav>
    {/* Upgrade Banner */}
   </header>
  )
}

export default Header