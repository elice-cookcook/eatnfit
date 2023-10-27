import { useState } from "react";
import {
  TbLock,
  TbLockCheck,
  TbMail,
  TbUser,
  TbMan,
  TbHeartFilled,
  TbHeart,
} from "react-icons/tb";

export default function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [goalWeight, setGoalWeight] = useState<number>();
  return (
    <div>
      <h2>회원가입</h2>
      <form action="">
        <div>
          <TbUser></TbUser>
          <input type="text" value={name} placeholder="이름"></input>
        </div>
        <div>
          <TbMail></TbMail>
          <input type="text" value={email} placeholder="아이디(이메일)"></input>
        </div>
        <div>
          <TbLock></TbLock>
          <input
            type="password"
            value={password}
            placeholder="비밀번호"
          ></input>
        </div>
        <div>
          <TbLockCheck></TbLockCheck>
          <input
            type="password"
            value={confirmPassword}
            placeholder="비밀번호 확인"
          ></input>
        </div>
        <div>
          <TbMan></TbMan>
          <input type="number" value={height} placeholder="신장(키)"></input>
          <span>cm</span>
        </div>
        <div>
          <TbHeart></TbHeart>
          <input
            type="number"
            value={height}
            placeholder="체중(몸무게)"
          ></input>
          <span>kg</span>
        </div>
        <div>
          <TbHeartFilled></TbHeartFilled>
          <input
            type="number"
            value={goalWeight}
            placeholder="목표 체중(몸무게)"
          ></input>
          <span>kg</span>
        </div>
      </form>
      <button>회원가입</button>
    </div>
  );
}
