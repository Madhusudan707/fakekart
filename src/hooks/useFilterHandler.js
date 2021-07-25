import { useProduct } from "../contexts/product_context";
import {useResetHandler} from './useResetHandler' 

export const useFilterHandler=()=>{
    const { productState, productDispatch } = useProduct();
    const {resetHandler} = useResetHandler()
    const filterHandler = (filterStr,filterValue) => {
   
   
        switch (filterStr) {
        
          case "FILTER_BY_GENDER":
           
            const gender = productState.data.filter(
              (item) => item.gender === filterValue
            );
          
            productDispatch({ type: "FILTER_BY_GENDER", payload: {response:gender} });
            break;
    
          case "FILTER_BY_BRAND":
           
          if(filterValue!=="0"){
            console.log(filterValue)
            const brand = productState.data.filter(
              (item) => item.brand === filterValue
            );
            console.log(brand)
            productDispatch({ type: "FILTER_BY_BRAND", payload: {response:brand}});
          }
            else{
              console.log(filterValue)
              productDispatch({ type: "ON_SUCCESS", payload:productState.data});
            }
            break;
            case "FILTER_BY_SIZE":
           
        
            const size = productState.data.filter(
              (item) => item.size === filterValue
            );
            productDispatch({ type: "FILTER_BY_SIZE", payload: {response:size}});
        
          
            break;
          default:
            resetHandler()
        }
      };

      return {filterHandler}
}