import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className='flex justify-around font-bold py-2 bg-blue-400'>
                <li className='border rounded-md p-2 shadow-md bg-white hover:scale-105 hover:shadow-lg'>
                    <Link to="/">About You</Link>
                </li>
                <li className='border rounded-md p-2 shadow-md bg-white hover:scale-105 hover:shadow-lg'>
                    <Link to="/experience">Experience</Link>
                </li>
                <li className='border rounded-md p-2 shadow-md bg-white hover:scale-105 hover:shadow-lg'>
                    <Link to="/hobby">Hobby</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
