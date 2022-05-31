
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from './components/FeedbackStats.jsx'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'


function App() {
    

    

    
  return(
    <FeedbackProvider>
    <Router>
    <Header />
    <div className="Container">
      <Routes>
      <Route exact path='/' element={
        <>
          <FeedbackForm />
          <FeedbackList  />
          <FeedbackStats  />

        </>
      }>
      </Route>
      <Route path='/about' element={<AboutPage />}/> 
      </Routes>
      </div>
      </Router>
      </FeedbackProvider>
    
  )
}


export default App