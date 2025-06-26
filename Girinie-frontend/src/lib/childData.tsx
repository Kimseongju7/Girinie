export interface Child {
  id: string;
  name: string;
  avatarUrl?: string;
}

export const childList: Child[] = [
  { id: '1', name: '남혜민', avatarUrl: '/public/logo.svg' },
  { id: '2', name: '이름2', avatarUrl: '/public/logo.svg' },
  { id: '3', name: '이름3', avatarUrl:'/public/logo.svg' },
];
