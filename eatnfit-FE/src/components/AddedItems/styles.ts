import styled from "styled-components";

const WrappedAddItems = styled.div`
  border: 1px solid #e0ebff;
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

export { WrappedAddItems, Name, Quantity, Calory, Delete };
