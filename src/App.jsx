import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import { BackgroundColorProvider } from "./context/BackgroundColorContext";
import GlobalStyles from './GlobalStyles';
import Header from "./views/Header"
import InitialLoad from "./components/InitialLoad";

const AnimatedRoutes = lazy(() => import('./AnimatedRoutes'));

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={< InitialLoad />}>
        <BackgroundColorProvider>
          <Header />
          <main>
              <AnimatedRoutes />
          </main>
        </BackgroundColorProvider>
      </Suspense>
    </Router>
  )
}

export default App
