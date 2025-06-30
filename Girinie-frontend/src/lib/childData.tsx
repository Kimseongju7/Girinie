export interface Child {
  id: string;
  name: string;
  level: number;
  age: number;
  subject: string;
  avatarUrl: string;
}

export const childList: Child[] = [
  { id: '1', name: '남혜민', level: 10, age: 22, subject: "예절", avatarUrl: '/public/logo.svg' },
  { id: '2', name: '김성주', level: 1, age: 8, subject: "손씻기", avatarUrl: '/public/logo.svg' },
  { id: '3', name: '이영주', level: 6, age: 10, subject: "인사하기", avatarUrl:'/public/logo.svg' },
  { id: '4', name: '이민정', level: 8, age: 23, subject: "세수하기", avatarUrl:'/public/logo.svg' },
];
