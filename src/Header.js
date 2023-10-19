import { useEffect } from 'react';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
const Header = ({windowWidth, setWindowWidth}) => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [window])
    return (
        <header className='header'>
            {windowWidth < 1024 ?
                <MobileHeader /> :
                <DesktopHeader />
            }
        </header>
    )
}

export default Header
