# 배포 가이드

## GitHub 저장소 생성 및 푸시

1. GitHub에 새 저장소를 생성합니다.
2. 다음 명령어를 실행합니다:

```bash
git init
git add .
git commit -m "Initial commit: Next.js 프로젝트 변환"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Vercel 배포

### 방법 1: Vercel 웹사이트를 통한 배포

1. [Vercel](https://vercel.com)에 로그인합니다.
2. "New Project"를 클릭합니다.
3. GitHub 저장소를 선택합니다.
4. 프로젝트 설정:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. "Deploy" 버튼을 클릭합니다.

### 방법 2: Vercel CLI를 통한 배포

```bash
npm i -g vercel
vercel
```

## 주의사항

### Import 경로 수정 필요

일부 UI 컴포넌트 파일에서 버전 번호가 포함된 import 경로가 있을 수 있습니다. 
다음 패턴을 찾아서 수정해주세요:

- `@radix-ui/react-xxx@1.2.3` → `@radix-ui/react-xxx`
- `class-variance-authority@0.7.1` → `class-variance-authority`
- `lucide-react@0.487.0` → `lucide-react`

### 환경 변수

현재 프로젝트에는 환경 변수가 필요하지 않습니다. 
필요한 경우 Vercel 대시보드에서 환경 변수를 설정할 수 있습니다.

## 문제 해결

### 빌드 오류

빌드 오류가 발생하는 경우:

1. `npm install`을 실행하여 모든 의존성을 설치합니다.
2. TypeScript 오류를 확인합니다: `npm run build`
3. Import 경로를 확인합니다.

### 이미지 최적화

Next.js Image 컴포넌트를 사용하는 경우, `next.config.js`에 이미지 도메인을 추가해야 합니다.

