import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("로그인 시도:", email, password);
    // TODO: API 호출
  };

  return (
    <div className="min-h-screen bg-[#FEF1B0]">
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-[350px] w-[500px] rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold">로그인</h2>
          <input
            type="text"
            placeholder="아이디"
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <input
            type="password"
            placeholder="비밀번호"
            //autoComplete="off"
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />

          <div className="mb-4 flex justify-between text-sm text-black text-opacity-50">
            <a href="/find-account" className="hover:underline">
              아이디/비밀번호 찾기
            </a>
            <a href="/signup" className="hover:underline">
              회원가입
            </a>
          </div>
          <button className="w-full rounded bg-[#C1905C] py-2 text-white hover:bg-[#a87847]">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
