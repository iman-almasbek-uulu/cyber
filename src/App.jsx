import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import RoutesPage from './routes/routes'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    <div className='wrapper'>
      <Header/>
      <RoutesPage />
      <Footer />
    </div>
  )
}

export default App
