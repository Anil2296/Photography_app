import { Provider } from 'react-redux';
import { store } from './store/store';
import MainPage from "./components/HomePage/MainPage";
import { LoadingProvider } from './context/LoadingContext';
import { GlobalLoadingMask } from './components/Common/GlobalLoadingMask';

function App() {
  return(
    <Provider store={store}>
      <LoadingProvider>
        <MainPage/>
        <GlobalLoadingMask />
      </LoadingProvider>
    </Provider>
  )
}
export default App;
