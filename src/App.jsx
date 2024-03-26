import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from './GlobalStyles';
import Header from './looks/Header';
import AnimatedRoutes from './AnimatedRoutes';
function App() {

  return (
    <Router>
      <GlobalStyles />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
    </Router>
  )
}

export default App
