import styled from "styled-components";
import DeleteImg from "../../img/delete.png";

type AddItemsProps = {
  items: { name: string; calory: string }[];
};

const AddItems: React.FC<AddItemsProps> = (props) => {
  return props.items.map((item) => (
    <WrappedAddItems key={item.name}>
      <Name>{item.name}</Name>
      <Quantity>
        <button type="button" className="minus">
          -
        </button>
        <input type="text" className="inp" value="1" />
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

const WrappedAddItems = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 4px 0;
  padding: 4px 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  width: 120px;
`;

const Quantity = styled.div`
  position: relative;
  overflow: hidden;
  width: 66px;
  height: 22px;

  border: 1px solid #ddd;

  & > button {
    border: 0;
    background: #ddd;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 0;
    font-size: 15px;
  }
  .minus {
    left: 0;
  }
  .plus {
    right: 0;
  }
  .inp {
    border: 0;
    height: 22px;
    text-align: center;
    display: block;
    width: 100%;
    padding: 0;
  }
`;

const Calory = styled.div`
  margin-left: 12px;
  color: gray;
`;

const Delete = styled.div`
  margin-left: auto;
`;
