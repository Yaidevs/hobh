import logo from '../assets/logo2.jpg';

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="font-bold text-3xl">
          <img src={logo} className="w-24 h-16" alt="Logo" />
        </a>
        <div className="space-x-2">
          <a
            href="/login"
            className="px-4 py-2 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="px-4 py-2 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
