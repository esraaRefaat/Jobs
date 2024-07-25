import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CategoryCard from './components/Category'
import FeaturedJobsCard from './components/FeaturedJobsCard'


function App() {
  return (
    <div style={{marginLeft:'30px',display:'flex'}}>
    <CategoryCard/>
    <div style={{marginLeft:'15px'}}>
<FeaturedJobsCard/>
</div>
    </div>
  )
}

export default App
