import { Link } from "react-router-dom"


const Header = () => {
  return (

    <nav className="bg-indigo-500 shadow-lg shadow-indigo-700 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.linkedin.com/company/analystt-ai/about/" className="flex items-center">
          <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Typescript</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lgmd:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link to='/' className="block py-2 pl-3 pr-4 md:p-0 text-white " aria-current="page" >
                Home
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header