import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FindAccountPage() {
  const [activeTab, setActiveTab] = useState<"id" | "pw">("id");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    // TODO: 실제 API 호출
    if (activeTab === "id") {
      setResult(`입력하신 이름(${name})과 이메일(${email})로 아이디를 발송했습니다.`);
    } else {
      setResult(
        `입력하신 아이디(${username})와 이메일(${email})로 비밀번호 재설정 메일을 발송했습니다.`
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FEF1B0]">
      {!result ? (
        <div className="h-[350] w-[500px] rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold">아이디/비밀번호 찾기</h2>
          <div className="mb-6 rounded-t-md border-b border-gray-300">
            <div className="flex gap-1 border-b border-gray-300">
              <button
                onClick={() => setActiveTab("id")}
                className={`flex-1 rounded-t-md py-2 font-bold ${
                  activeTab === "id" ? "text-[#C1905C]" : "text-gray-400"
                }`}
              >
                아이디 찾기
              </button>
              <button
                onClick={() => setActiveTab("pw")}
                className={`flex-1 rounded-t-md py-2 font-bold ${
                  activeTab === "pw" ? "text-[#C1905C]" : "text-gray-400"
                }`}
              >
                비밀번호 찾기
              </button>
            </div>
          </div>
          {activeTab === "id" ? (
            <>
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                type="email"
                placeholder="가입한 이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                type="email"
                placeholder="가입한 이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
            </>
          )}
          <button
            onClick={handleSubmit}
            className="mb-2 w-full rounded bg-[#C1905C] py-2 text-white hover:bg-[#a87847]"
          >
            {activeTab === "id" ? "아이디 찾기" : "비밀번호 찾기"}
          </button>
          <div className="text-center">
            <button className="text-sm text-gray-400 hover:underline">뒤로가기</button>
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen items-center justify-center bg-[#FEF1B0]">
          <div className="flex h-[350px] w-[500px] flex-col justify-between rounded-lg bg-white p-8 text-center shadow-md">
            <div>
              <div className="mb-6 text-4xl text-green-600">✅</div>
              <div className="mb-8 whitespace-pre-line text-sm">
                {result
                  .split("로 ")
                  .map((line, index, arr) => (index < arr.length - 1 ? line + "로\n" : line))
                  .join("")}
              </div>
            </div>
            <div className="mt-auto flex flex-col gap-3 pt-6">
              <button
                className="rounded bg-[#C1905C] py-2 text-white hover:bg-[#a87847]"
                onClick={() => navigate("/login")}
              >
                로그인
              </button>
              <button
                onClick={() => {
                  setResult("");
                  setEmail("");
                  setUsername("");
                  setName("");
                }}
                className="text-sm text-gray-400 hover:underline"
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
