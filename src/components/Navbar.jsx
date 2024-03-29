

const Navbar = ()=>{
    return (
        <>
            <div className="navbar-container">
                <div className="search">
                    <input type="text"  ></input>
                    <div className="searchIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </div>


                <div className='nav-comp'>
                    <div><p>Categories</p></div>
                    <div><p>Website Builders</p></div>
                    <div><p>Today's Deals</p></div>

                </div>
            </div>
        </>
    )
}

export default Navbar;