const DesktopHeader = () => {
    return (
        <>
            <section className='header__topbar'>
                <img className='header__logo' src={require('./images/logo.svg').default} alt='logo'/>

                <ul className="header__list">
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </section>
            
            
        </>
    )
}

export default DesktopHeader
