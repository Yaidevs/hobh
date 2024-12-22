export function NavBar() {
  return (
    <nav className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a to="/" className="font-bold text-xl">
          BRAINLY
        </a>
        <div className="space-x-4">
          <a
            to="/login"
            className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            Log in
          </a>
          <a
            to="/signup"
            className="px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
