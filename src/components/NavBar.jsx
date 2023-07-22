import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="">
            <nav className="fixed top-0 left-0 right-0">

                <ul className="w-full h-16 text-white bg-slate-900 flex flex-row jusfify-left space-x-5">

                    <li className="item-menu">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="item-menu">
                        <Link to="/aboutHackers">About Hackers</Link>
                    </li>
                    
                    <li className="item-menu">
                        <Link to="/hackersType">Hackers Type</Link>
                    </li>


                    <ul className="flex flex-row">
                        <li className="item-menu">Login</li>
                        <li className="item-menu">Register</li>
                    </ul>


                </ul>


            </nav>

            
        </div>
    )
}

export default NavBar;