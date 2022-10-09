const Header = () => {
    return (
        <>
            <header className="relative w-full flex bg-slate-900 text-white flex-wrap items-center m-auto justify-center p-4 shadow-lg">
                <nav className="relative flex md:container md:mx-auto flex-wrap items-center navbar justify-center flex-col md:flex-row md:justify-between px-0 md:px-12 ">
                    <h1 className="text-xl font-semibold"><a href="/">Collatz.</a></h1>
                    <ul className="flex flex-wrap pl-0 list-style-none mt-4 md:mt-0">
                        <NavLink name="Github" link="https://github.com/jaydeepkhatri/collatz-conjecture" />
                        <NavLink name="Info" link="https://www.youtube.com/watch?v=094y1Z2wpJg" />
                    </ul>   
                </nav>
            </header>
        </>
    )
}

const NavLink = ({name, link}) => {
    return (
        <li className="nav-item">
            <a className="nav-link inline-block px-4 py-1 mx-2 hover:text-blue-400 duration-100" title={name} target="_blank" rel="noreferrer" href={link}>{name}</a>
        </li>
    )
}

export default Header;