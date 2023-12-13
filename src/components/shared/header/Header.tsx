import { Link } from "react-router-dom"
// import { Home } from "../../../Pages"


const Header = () => {
  return (

    <nav className="bg-blue-950 shadow-lg shadow-indigo-950 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://www.linkedin.com/company/analystt-ai/about/" className="flex items-center">
          <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Typescript</span>
        </a>
        <div className=" md:w-auto" id="navbar-default">
          <ul className="">
            <li>
              <Link to='/home' className="flex sm:w-auto text-white" aria-current="page" >
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