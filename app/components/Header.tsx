import Logo from "./Logo"


function Header() {
  return (
   <header className="m-10 sticky z-50 bg-white dark:bg-gray-900">
      <nav className=" bg-white dark:bg-gray-900">
        <Logo/>
        <div>
          {/* Language Select */}
          {/* Session */}
        </div>
    </nav>
    {/* Upgrade Banner */}
   </header>
  )
}

export default Header