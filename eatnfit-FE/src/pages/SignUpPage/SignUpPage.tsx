import { useState } from "react";

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
      <form action=""></form>
    </div>
  );
}
