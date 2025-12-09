# UNOMEDIA - Next.js 프로젝트

피그마 메이크에서 디자인한 프로젝트를 Next.js로 변환한 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   ├── page.tsx      # 홈 페이지
│   │   └── globals.css   # 전역 스타일
│   ├── components/       # React 컴포넌트
│   │   ├── Header.tsx    # 헤더 컴포넌트
│   │   ├── Hero.tsx      # 히어로 섹션
│   │   ├── Footer.tsx    # 푸터 컴포넌트
│   │   └── ui/           # UI 컴포넌트 라이브러리
│   └── styles/           # 스타일 파일
├── public/               # 정적 파일
├── next.config.js        # Next.js 설정
├── tailwind.config.ts    # Tailwind CSS 설정
└── tsconfig.json         # TypeScript 설정
```

## 배포

### Vercel 배포

1. GitHub에 프로젝트를 푸시합니다.
2. [Vercel](https://vercel.com)에 로그인합니다.
3. "New Project"를 클릭합니다.
4. GitHub 저장소를 선택합니다.
5. 자동으로 배포가 시작됩니다.

### 환경 변수

현재 프로젝트에는 환경 변수가 필요하지 않습니다.

## 라이선스

이 프로젝트는 개인 프로젝트입니다.
