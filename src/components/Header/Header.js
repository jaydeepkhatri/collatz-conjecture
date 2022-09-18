const Header = () => {
    return (
        <>
            <header className="relative w-full flex bg-slate-900 text-white flex-wrap items-center m-auto justify-center py-4 shadow-lg">
                <nav className="relative flex md:container md:mx-auto flex-wrap items-center navbar justify-center flex-col md:flex-row md:justify-between px-0 md:px-12 ">
                    <h1 className="text-xl font-semibold">Collatz.</h1>
                    <ul className="flex flex-wrap pl-0 list-style-none mt-4 md:mt-0">
                        <NavLink name="Github" link="https://github.com/jaydeepkhatri" />
                        <NavLink name="Twitter" link="https://twitter.com/jaydeepkhatri79" />
                        <NavLink name="Video Source" link="https://www.youtube.com/watch?v=094y1Z2wpJg" />
                    </ul>   
                </nav>
            </header>
        </>
    )
}

const NavLink = ({name, link}) => {
    return (
        <li className="nav-item px-4">
            <a className="nav-link" title={name} target="_blank" href={link}>{name}</a>
        </li>
    )
}

export default Header;