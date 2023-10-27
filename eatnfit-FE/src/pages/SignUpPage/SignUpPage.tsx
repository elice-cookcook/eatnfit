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
          <div>
            <TbUser></TbUser>
            <input type="text" value={name} placeholder="이름"></input>
          </div>
          <p>이름을 정확히 입력하세요.</p>
        </div>
        <div>
          <div>
            <TbMail></TbMail>
            <input
              type="email"
              value={email}
              placeholder="아이디(이메일)"
            ></input>
          </div>
          <p>아이디는 이메일 형식으로 입력해주세요.</p>
        </div>
        <div>
          <div>
            <TbLock></TbLock>
            <input
              type="password"
              value={password}
              placeholder="비밀번호"
            ></input>
          </div>
          <p>비밀번호는 8자 이상이어야 합니다. </p>
        </div>
        <div>
          <div>
            <TbLockCheck></TbLockCheck>
            <input
              type="password"
              value={confirmPassword}
              placeholder="비밀번호 확인"
            ></input>
          </div>
          <div>비밀번호가 일치하지 않습니다.</div>
        </div>
        <div>
          <div>
            <TbMan></TbMan>
            <input type="number" value={height} placeholder="신장(키)"></input>
            <span>cm</span>
          </div>
          <div></div>
        </div>
        <div>
          <div>
            <TbHeart></TbHeart>
            <input
              type="number"
              value={height}
              placeholder="체중(몸무게)"
            ></input>
            <span>kg</span>
          </div>
        </div>
        <div>
          <div>
            <TbHeartFilled></TbHeartFilled>
            <input
              type="number"
              value={goalWeight}
              placeholder="목표 체중(몸무게)"
            ></input>
            <span>kg</span>
          </div>
        </div>
      </form>
      <button>회원가입</button>
    </div>
  );
}
