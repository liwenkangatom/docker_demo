import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="container mx-auto p-4 m-0">   
       <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    
    <a className="flex-none text-xl font-semibold dark:text-white" href="http://localhost">Demo</a>
    <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:pl-5">
    <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to={`/`}>Home</Link>
    <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500" to={`/about`}>About</Link>
  </div>
  </nav>
</header>
      <div id="detail" className="container mx-auto p-4 m-0">
        <Outlet />
      </div>
    </div>
  );
}
