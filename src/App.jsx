import './App.css'
//MUI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//custom fonts
import './fonts/Roboto-Black.ttf'
import './fonts/Roboto-BlackItalic.ttf'
import './fonts/Roboto-Bold.ttf'
import './fonts/Roboto-BoldItalic.ttf'
import './fonts/Roboto-Italic.ttf'
import './fonts/Roboto-Light.ttf'
import './fonts/Roboto-LightItalic.ttf'
import './fonts/Roboto-Medium.ttf'
import './fonts/Roboto-MediumItalic.ttf'
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Thin.ttf'
import './fonts/Roboto-ThinItalic.ttf'

import { Provider } from "react-redux";
import store from "./redux/store";
import { router } from './routing/routing.jsx';
import { RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function App() {
  return (
    <>
      <Provider store={store}>
        <SignUp/>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <ToastContainer />
      </Provider>
    </>
  );
}

export default App;

