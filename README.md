# 원티드 프리온보딩 챌린지 사전과제

## 과제 결과물

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/Typescript-3178C6.svg?style=for-the-badge&logo=Typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-4B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![SASS](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-blue?style=for-the-badge&logo=recoil&logoColor=white)
![React Query](https://img.shields.io/badge/reactquery-FF4154.svg?style=for-the-badge&logo=reactquery&logoColor=white)

[wanted-pre-onboarding-challenge-fe-1-api](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)의 api를 사용하여 요구사항에 맞추어 개발하였습니다.

### 실행방법

- `yarn berry`를 사용하였습니다.
- 의존성 패키지를 포함하고 있기 때문에 바로 `yarn start`를 통해 실행할 수 있습니다.

### 디렉토리 구조

```
🌳 D:\GitHub\wanted-pre-onboarding-challenge-fe-2
├── 📁 .yarn
├── 📁 public
└── 📁 src
  ├── 📁 atom
  ├── 📁 components
  ├── 📁 hooks
  ├── 📁 pages
  ├── 📁 styles
  ├── 📁 types
  └── 📁 utils
```

### 특이사항

- 요구사항에 토큰의 유효성 검증에 관한 내용이 있으나, API middleware에서 토큰이 존재하는지에 대한 내용만 검증하고 있어 똑같이 localStorage에 있는지만 체크하였습니다.
- 요구사항에서는 이메일에 `@`, `.`을 _포함하기만_ 하면 되는 것으로 나와있으나 api에서는 더 엄격하게 검증하고 있습니다. 이 부분은 포함 여부만 체크하고 요청을 보내, `BAD REQUEST`를 반환하면 화면에 메시지를 표시하는 형태로 구현하였습니다.

## 자기소개

안녕하세요!! 신입 프론트엔드 개발자 이우재입니다.

- 개발자로서의 제 소개는 [GitHub 프로필](https://github.com/prayinforrain)에서 볼 수 있습니다.
