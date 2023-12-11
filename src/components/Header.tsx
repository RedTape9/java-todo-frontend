import logo from '../assets/logo.webp'; // Pfad zu Ihrem Logo

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">ToDo-List</h1>
        </header>
    );
}

export default Header;