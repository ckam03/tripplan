const LandingPageNav = () => {
    return (
        <>
          <nav className="flex justify-between items-center px-8 py-2 shadow-md font-poppins">
            <h1 className="text-xl font-semibold">Trip Planit</h1>
               
               <div>

               <button className="mr-4">Log In</button>
               <button className="border rounded-lg bg-indigo-500 px-4 py-2 text-indigo-50">Sign Up</button>
               </div>
          </nav>
        </>
      );
}

export default LandingPageNav;