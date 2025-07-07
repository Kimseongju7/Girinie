export interface Child {
  id: string;
  name: string;
  age: number;
  // color: string;
  // foreign_key: number;
  avatarUrl: string;

  // // 카테고리별 레벨 
  // etiquette: number;      // 예절
  // discipline: number;     // 질서
  // independence: number;   // 자조
  // cleanliness: number;    // 청결
  // frugality: number;      // 절약
  // eatingHabits: number;   // 식습관
  // emotionControl: number; // 감정조절
  // respect: number;        // 존중

  averageLevel: number;
}



export const childList: Child[] = [
  { id: '1', name: '남혜민', averageLevel: 10, age: 22,  avatarUrl: '/public/logo.svg' },
  { id: '2', name: '김성주', averageLevel: 1, age: 8, avatarUrl: '/public/logo.svg' },
  { id: '3', name: '이영주', averageLevel: 6, age: 10, avatarUrl:'/public/logo.svg' },
  { id: '4', name: '이민정', averageLevel: 8, age: 23, avatarUrl:'/public/logo.svg' },
];
