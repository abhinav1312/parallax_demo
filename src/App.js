import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Moon from './img/moon.png'
import Cat from './img/cat.gif'
import Land from './img/land.png'
import { useState } from 'react'
function App() {

  const [fs, setFs] = useState(5);
  const[fs1, setFs1] = useState(0);
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      // setScrollTop(scrollTop);
      setFs(5 - scrollTop*.01)
      setFs1(scrollTop/100)
    };

  return (
    <div>
      <Parallax pages={6} className='bg-black' style={{height: '100vh', overflow: 'scroll'}} onScroll={handleScroll} onScrollCapture={handleScroll}>
        <ParallaxLayer offset={0} factor={2} speed={0.2}  style={{backgroundImage: `url(${Moon})`, backgroundSize: 'cover'}} className='bg-black text-5xl flex justify-center items-center font-bold text-white'>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={.1} factor={6} style={{backgroundImage: `url(${Land})`, backgroundSize: 'cover'}}></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0, end: 6 }}
          className='flex justify-center items-center'
          factor={0}
        >
          <img src={Cat} alt='Cat' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.4}
          speed={2}
          // onClick={() => ref.current.scrollTo(3)}
        >
          <h2 style={{fontSize: `${fs}rem`}} className='font-bold text-white text-center'>Welcome to my website</h2>
        </ParallaxLayer>
        


        <ParallaxLayer
          offset={1}
          speed={1}
        >
          <h2 style={{fontSize: `${fs1*.4}rem`}} className='font-bold text-white text-center' >Scroll genlty for safer landing </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.5}
          speed={1}
        >
          <h2 style={{fontSize: `${3}rem`}} className='font-bold text-white text-center'> Heading for a safer landing </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={1}
        >
          <h2 style={{fontSize: `${fs1*1.5/10}rem`}} className='font-bold text-white text-center'> Doing great hooman </h2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.45}
          speed={2}

        >
          <h2 className='text-5xl font-bold text-white text-center'>Thanks hooman for the safe landing !!</h2>
        </ParallaxLayer>
      </Parallax>

      <h1>Hello</h1>
    </div>
  );
}

export default App;
