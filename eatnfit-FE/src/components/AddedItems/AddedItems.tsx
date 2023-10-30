import { WrappedAddItems, Name, Quantity, Calory, Delete } from "./styles";
import DeleteImg from "../../img/delete.png";

type AddItemsProps = {
  items: { name: string; calory: number }[];
};

const AddItems: React.FC<AddItemsProps> = (props) => {
  return props.items.map((item) => (
    <WrappedAddItems key={item.name}>
      <Name>{item.name}</Name>
      <Quantity>
        <button type="button" className="minus">
          -
        </button>
        <input type="text" className="inp" value={1} />
        <button type="button" className="plus">
          +
        </button>
      </Quantity>
      <Calory>{item.calory}kcal</Calory>
      <Delete>
        <img src={DeleteImg} width="30px" />
      </Delete>
    </WrappedAddItems>
  ));
};

export default AddItems;
