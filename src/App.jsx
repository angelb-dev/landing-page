import './css/App.css'
import PricingComponent from './components/PricingComponent'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  return (
    <div className='flex-col'>
      <Header />
      <main>
        <section className='header'>
          <div className='text-center'>
            <h1>Planes de Suscripción</h1>
            <p>Elige el plan que mejor se adapte a tus necesidades.</p>
          </div>
        </section>
        <section className='md:py-24'>
          <div className='container md:px-8'>
            <PricingComponent />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
