import { useProduct } from "../contexts/product_context";

export const useSortHandler=()=>{
    const { productState, productDispatch } = useProduct();
    const sortHandler = (value) => {
      console.log(value.length)
        switch (value) {
          case "LOW_TO_HIGH":
           
            const ascSort = [...productState.data].sort(
              (a, b) => parseFloat(a.price) - parseFloat(b.price)
            );
            productDispatch({ type: "LOW_TO_HIGH", payload:{response:ascSort}});
            break;
          case "HIGH_TO_LOW":
            const dscSort = [...productState.data].sort(
              (a, b) => parseFloat(b.price) - parseFloat(a.price)
            );
            productDispatch({ type: "HIGH_TO_LOW", payload:{response: dscSort} });
            break;
          default:
            throw new Error();
        }
      };

      return {sortHandler}
}