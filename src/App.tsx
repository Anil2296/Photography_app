import MainPage from "./components/HomePage/MainPage";
import { LoadingProvider } from './context/LoadingContext';
import { GlobalLoadingMask } from './components/Common/GlobalLoadingMask';

function App() {
  return(
    <LoadingProvider>
      <MainPage/>
      <GlobalLoadingMask />
    </LoadingProvider>
  )
}
export default App;
