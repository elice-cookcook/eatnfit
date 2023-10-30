import { Wrap, RecordHeader, Main } from "./styles";
import { Link } from "react-router-dom";
import {
  CloseBtn,
  SubmitBtn,
  SelectBtn,
  LongBtn,
  Footer,
} from "../../components";

export default function ExerciseRecordPage() {
  const kind = ["유산소", "무산소", "스트레칭"];
  const body = [
    "전신",
    "팔",
    "복근",
    "허리",
    "등",
    "하체",
    "어깨",
    "가슴",
    "엉덩이",
    "코어",
  ];
  const intensity = ["격렬하게", "강하게", "적당하게", "가볍게"];

  return (
    <Wrap>
      <RecordHeader>
        <CloseBtn />
        <SubmitBtn />
      </RecordHeader>
      <Main>
        <h2>10월 26일 운동기록</h2>
        <Link to="/exerciserecord/search">
          <LongBtn text="+ 운동 검색하기" />
        </Link>
        <div className="name">
          <h4>운동명</h4>
          <span>배드민턴</span>
        </div>
        <div className="time">
          <h4>운동 시간</h4>
          <span>30분</span>
        </div>
        <div className="kind">
          <h4>운동 종류</h4>
          <SelectBtn items={kind} />
        </div>
        <div className="body">
          <h4>운동 부위</h4>
          <SelectBtn items={body} />
        </div>
        <div className="intensity">
          <h4>운동 강도</h4>
          <SelectBtn items={intensity} />
        </div>
      </Main>
      <Footer />
    </Wrap>
  );
}
