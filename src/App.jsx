import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
function App() {

  return (
    <Router>
      <GlobalStyles />
      {/* <Router> */}
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
      {/* </Router> */}
    </Router>
  )
}

export default App
