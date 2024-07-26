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




import CategoryCard from './components/Category'
import FeaturedJobsCard from './components/FeaturedJobsCard'
import { useTranslation } from 'react-i18next';


function App() {
  const {t,i18n}=useTranslation()
  return (
    <div style={{marginLeft:'30px',display:'flex'}}>
      <p style={{fontFamily:'Roboto-ThinItalic'}}> test</p>
    <CategoryCard/>
    <div style={{marginLeft:'15px'}}>
<FeaturedJobsCard/>
</div>
    </div>
  )
}

export default App;

