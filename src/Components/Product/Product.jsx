// import { useProductFetch } from "../../hooks/useProductFetch"
import { useProduct } from "../../contexts/product_context";

export const Product = () => {
    const {productState} = useProduct()
    return (
        <div className='flex'>
            {productState.response.map((product)=>{
                return (
                   <div key={product.id} className='flex flex-col border w-full justify-between items-center px-4 shadow-md'>
                       <p className='text-sm p-2'>{product.title}</p>
                       <img src={product.image} className="w-48 h-48" alt={product.title} />
                       <span className='border-t-2 mt-4'>₹{product.price}</span>
                   </div>
                )
            })}
        </div>
    )
}
