const Menu = ({setOpenMenu}) => {
    return (
        <section className='header__menupopup'>
            <img 
                src={require('./images/icon-menu-close.svg').default}
                alt='Close Menu'
                onClick={() => setOpenMenu(false)}
            />
            <ul className="header__list">
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </section>
    )
}

export default Menu
