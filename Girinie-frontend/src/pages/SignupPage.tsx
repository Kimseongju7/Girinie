import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const [emailLocal, setEmailLocal] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [customEmailDomain, setCustomEmailDomain] = useState("");
  const [isCustomDomain, setIsCustomDomain] = useState(false);

  const email = `${emailLocal}@${isCustomDomain ? customEmailDomain : emailDomain}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    // TODO: 회원가입 API 연동
    console.log("회원가입 시도:", id, password);
  };

  return (
    <div className="min-h-screen bg-[#F7E0AF]">
      <div className="flex items-center justify-center pt-20">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold">회원가입</h2>

          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              placeholder="이메일"
              value={emailLocal}
              onChange={(e) => setEmailLocal(e.target.value)}
              className="flex-1 rounded border border-gray-300 p-2"
            />
            <span>@</span>
            {!isCustomDomain ? (
              <select
                value={emailDomain}
                onChange={(e) => {
                  if (e.target.value === "custom") {
                    setIsCustomDomain(true);
                    setEmailDomain("");
                  } else {
                    setIsCustomDomain(false);
                    setEmailDomain(e.target.value);
                  }
                }}
                className={`flex-1 rounded border border-gray-300 p-2 ${
                  emailDomain === "" ? "text-black text-opacity-50" : "text-black"
                }`}
              >
                <option value="" disabled>
                  선택...
                </option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.com">daum.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="nate.com">nate.com</option>
                <option value="custom">직접입력</option>
              </select>
            ) : (
              <input
                type="text"
                placeholder="도메인 입력"
                value={customEmailDomain}
                onChange={(e) => setCustomEmailDomain(e.target.value)}
                className="flex-1 rounded border border-gray-300 p-2 text-black"
                style={{ minHeight: "40px", width: "100%" }}
              />
            )}
          </div>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="mb-4 w-full rounded border border-gray-300 p-2"
          />

          <button
            type="submit"
            className="w-full rounded bg-[#C1905C] py-2 text-white hover:bg-[#a87847]"
          >
            회원가입
          </button>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-sm text-black text-opacity-50 hover:underline"
            >
              뒤로가기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
