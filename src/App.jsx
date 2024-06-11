import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <div>
      <Header />
      <main>
        <div  className='DefaultTemplate'>
          <Banner />
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
