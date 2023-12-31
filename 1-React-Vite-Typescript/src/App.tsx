
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter as Router } from "react-router-dom"
import { Container, ToastContainer } from "react-bootstrap"
import Loader from "./components/Loader/Loader"
import { Suspense } from "react"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
    <Router>
          <Header/>
            <Container style={{minHeight: '100vh', minWidth: '100vh', padding: '0'}}>
              <Suspense fallback={<Loader/>}>
                <AppRoutes/>
              </Suspense>
            </Container>         
          <Footer/>
    </Router>
    </>
  )
}

export default App
