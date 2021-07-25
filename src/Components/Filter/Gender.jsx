import { useResetHandler } from "../../hooks";

export const Gender = ({click}) => {
    const {resetHandler, isChecked} = useResetHandler()
    return (
        <div className={" flex  left-12  w-full "}>
        <div className="lg:w-72 w-full p-4 border flex flex-row items-center justify-evenly  bg-white ">
          <label>
            <input
              type="radio"
              name="sort"
              value="M"
              className="mr-2"
              checked={isChecked}
              onClick={click}
          
            />
            {"MEN"}
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="F"
              className="mr-2"
              checked={isChecked}
              onClick={click}
            />
            { "WOMEN"}
          </label>
          <button
            className="far fa-trash-alt fa-1x cursor-pointer"
            title={"Clear"}
            onClick={resetHandler}
          ></button>
           </div>
    </div>
    )
}
