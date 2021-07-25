import { useProduct } from "../../contexts/product_context"

export const Brand = ({change}) => {
    const {productState} = useProduct()
    
    return (
        <div className='flex flex-col ml-4'>
            <select onChange={change} className='p-4 w-72'>
                <option value="0">Select Brand</option>
            {productState.data.map((product)=>{
                return (
                    <option key={product.id}>{product.brand}</option>

                    
                )
            })}
            </select>

            {/* {productState.data.map((product)=>{
                return (
                    <label>
                    <input
                      type="checkbox"
                      name="brand"
                      value={product.brand}
                      className="mr-2"
                     
                      onClick={change}
                  
                    />
                    {product.brand}
                  </label>
                )
              
            })} */}
            </div>
    )
}
