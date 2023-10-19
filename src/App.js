import { useState } from 'react';
import Header from './Header';
import Article from './Article';
import New from './New';
import OtherArticles from './OtherArticles';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <div className="App">
      <Header windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>
      {windowWidth >= 1024 && 
        <img 
          className='header__img'
          src={require('./images/image-web-3-desktop.jpg')}
          alt='illustration'
          width={'1460'}
          height={'600'}
      />}
      <Article />
      <New />
      <OtherArticles />
    </div>
  );
}

export default App;
