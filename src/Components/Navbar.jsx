import logo from '../assets/pngegg.png';

export const Navbar = () => {
  return (
    <header className="bg-gray-200 shadow-md">
      <div className="container mx-auto p-4 flex items-center">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800 ml-2">Dreammonks</h1>
        <ul className="flex space-x-4 ml-auto">
          <li className="flex items-center">Home</li>
          <li className="flex items-center">Explore</li>
          <li className="flex items-center">About</li>
          <li className="flex items-center">Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar;
