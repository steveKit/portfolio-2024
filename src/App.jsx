import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from "react";
import GlobalStyles from './GlobalStyles';
import Header from './views/Header';
const AnimatedRoutes = lazy(() => import('./AnimatedRoutes'));
import InitialLoaderScreen from "./components/InitialLoaderScreen";
function App() {

  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={ <InitialLoaderScreen /> }>
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
      </Suspense>
    </Router>
  )
}

export default App
