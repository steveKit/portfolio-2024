import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BackgroundColorProvider } from "./context/BackgroundColorContext";
import GlobalStyles from './GlobalStyles';
import Header from "./views/Header"

const AnimatedRoutes = lazy(() => import('./AnimatedRoutes'));

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Suspense >
        <Header />
        <main>
          <BackgroundColorProvider>
            <AnimatedRoutes />
          </BackgroundColorProvider>
        </main>
      </Suspense>
    </Router>
  )
}

export default App
