import {createContext,useContext,useReducer,useState,useEffect} from 'react'
import {productReducer,initialState} from '../reducers/product'
import axios from 'axios'
export const ProductContext = createContext({})

export const ProductProvider = ({ children }) => {
    const [state,dispatch] = useReducer(productReducer,initialState)
    const [product,setProduct] = useState() 

    useEffect(()=>{
        (async()=>{
            try {
                const response = await axios.get("fakecart.json")
                
                dispatch({
                    type: "ON_SUCCESS",
                    payload: response.data,
                  });
            }catch (err) {
                console.log("Unable to Fetch Product, Try Again!!")
            }
        })()
    },[])

  return (
    <ProductContext.Provider value={{ productState:state,productDispatch:dispatch,setProduct,product }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = ()=>useContext(ProductContext)