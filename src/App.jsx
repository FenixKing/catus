import { useEffect, useState } from 'react'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

function App() {
  const [menu, setMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const updateDimensions = () => {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

  return (
    <div>
      <Header width={width} menu={menu} setMenu={setMenu} />
        {
          menu ? (
            <></>
          ): (
            <main>
              <div  className='DefaultTemplate'>
                <Banner />
                <ProductList />
              </div>
            </main>
          )
        }
         {
          menu ? (
            <></>
                ): (
            <Footer />
          )
        }
    </div>
  )
}

export default App
