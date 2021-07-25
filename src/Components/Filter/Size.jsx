import { useResetHandler } from "../../hooks";

export const Size = ({click}) => {
    const {resetHandler, isChecked} = useResetHandler()
    return (
        <div className={" flex-row    w-full "}>
        <div className="lg:w-72 w-full p-4 border flex flex-row items-center justify-evenly  bg-white ">
          <label>
            <input
              type="radio"
              name="sort"
              value="S"
              className="mr-2"
              checked={isChecked}
              onClick={click}
          
            />
            {"S"}
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="M"
              className="mr-2"
              checked={isChecked}
              onClick={click}
            />
            { "M"}
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="L"
              className="mr-2"
              checked={isChecked}
              onClick={click}
            />
            { "L"}
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="XL"
              className="mr-2"
              checked={isChecked}
              onClick={click}
            />
            { "XL"}
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
