
import { Navbar,Product,Sort,Filter } from './Components';
const App=()=> {


  return (
    <div className="App">
      <Navbar/>
      <div className="flex ">
      
        <div className='flex flex-col w-1/3  mt-8'>
        <Sort/>
        <Filter/>
        </div>
        <div className='flex w-3/3 px-4 mt-8'>
        <Product/>
        </div>
       
      
      </div>
      
    </div>
  );
}

export default App;
