import { useState } from 'react'
import Menu from './Menu'

const MobileHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOpenStyle = `
        html, body {
            margin: 0;
            height: 100%; 
            overflow: hidden;
        }
        body{
            background-color: hsla(0, 0%, 12%, 0.15);
        }
         
    `
    return (
        <>
            <section className='header__topbar'>
                <img className='header__logo' src={require('./images/logo.svg').default} alt='logo'/>
                <img 
                    className='header__menu' 
                    src={require('./images/icon-menu.svg').default} 
                    alt='menu'
                    onClick={() => setOpenMenu(!openMenu)}
                />
                {openMenu && (
                    <>
                        <Menu setOpenMenu={setOpenMenu}/>
                        <style>{menuOpenStyle}</style>
                    </>
                )}
            </section>
            
            <img 
                className='header__img'
                src={require('./images/image-web-3-mobile.jpg')}
                alt='illustration'
                width={'686'}
                height={'600'}
            />
        </>
    )
}

export default MobileHeader
