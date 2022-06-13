import { useDispatch } from "react-redux";
import { changeCurrency } from "../../store/modules/redux/actions";

export function ChangeCurrency() {
  const dispatch = useDispatch();

  const handleSelected = (e: any) => {
    if (e.target.value !== "") {
      dispatch(changeCurrency({ currency: e.target.value }));
    }
  };

  return (
    <div>
      <label>Country Selector</label>
      <select
        onChange={handleSelected}
        className="browser-default"
        data-testid="select"
      >
        <option value="" disabled selected>
          Choose your country
        </option>
        <option value="1">Australia</option>
        <option value="1.4">USA</option>
        <option value="1.75">UK</option>
      </select>
    </div>
  );
}
