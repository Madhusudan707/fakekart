import { useState } from "react";
import { useProduct } from "../contexts/product_context";
import axios from 'axios' 

export const useResetHandler = () => {
  const [isChecked, setIsChecked] = useState();
  const { productDispatch } = useProduct();

  const resetHandler = async () => {
    setIsChecked(false);

    try {
      const response = await axios.get("fakecart.json")
      productDispatch({ type: "ON_SUCCESS", payload: response.data});
    } catch (err) {
      productDispatch({ type: "ON_FAILURE", payload: "" });
    }
    setIsChecked();
  };

  return{resetHandler,isChecked}
};
