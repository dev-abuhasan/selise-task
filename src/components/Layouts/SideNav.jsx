import './style.scss';
import { Link } from 'react-router-dom';
const SideNav = () => {
    return (
        <div id="main_side_nav" className='d-flex flex-column'>
            <Link to="/">Authors</Link>
            <Link to="/favorite-authors">Favorite&nbsp;Authors</Link>
        </div>
    );
};

export default SideNav;