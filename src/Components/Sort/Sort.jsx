import { useSortHandler, useResetHandler } from "../../hooks";


export const Sort = () => {
  const { sortHandler } = useSortHandler();
  const { resetHandler, isChecked } = useResetHandler();

  return (
    <div className={" flex-row     w-full "}>
      <div className="lg:w-72 w-full p-4 border flex flex-row items-center justify-evenly  bg-white ">
        <label>
          <input
            type="radio"
            name="sort"
            value="LOW_TO_HIGH"
            className="mr-2"
            checked={isChecked}
            onClick={(e) => {
              sortHandler(e.target.value);
            }}
          />
          {"Low To High"}
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value="HIGH_TO_LOW"
            className="mr-2"
            checked={isChecked}
            onClick={(e) => {
              sortHandler(e.target.value);
            }}
          />
          { "High To Low"}
        </label>
        <button
          className="far fa-trash-alt fa-1x cursor-pointer"
          title={"Clear"}
          onClick={resetHandler}
        ></button>
      </div>
    </div>
  );
};