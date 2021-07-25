import { Gender,Brand,Size } from "."
 import { useFilterHandler } from "../../hooks/"
export const Filter = () => {
    const {filterHandler} = useFilterHandler()
    return (
        <div className='flex flex-col '>
            <Gender click={(e) => {
                filterHandler("FILTER_BY_GENDER",e.target.value);
              }}/>
             
              <Size click={(e) => {
                filterHandler("FILTER_BY_SIZE",e.target.value);
              }} />
               <Brand change={(e) => {
                filterHandler("FILTER_BY_BRAND",e.target.value);
              }} />
        </div>
    )
}
