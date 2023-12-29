import { Container, ItemContainer, Img } from "./styles";
import CloseImage from "../../img/close.png";

type SearchAddItemProps = {
  selectedItemNames?: (string | undefined)[];
  onDeleteItem: (idx: number) => void;
};

export default function SearchAddItem(props: SearchAddItemProps) {
  return (
    <Container>
      {props.selectedItemNames?.map((item, idx) => (
        <ItemContainer key={`${item}-${idx}`}>
          <div>{item}</div>
          <Img src={CloseImage} onClick={() => props.onDeleteItem(idx)} />
        </ItemContainer>
      ))}
    </Container>
  );
}
