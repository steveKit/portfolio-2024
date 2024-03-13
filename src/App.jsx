import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
      </Router>
    </>
  )
}

export default App
