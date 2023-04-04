## Project

#### [using]

```
* react + typescript (eslint + prettier )
```

#### [개발자 초기세팅]

```
1. Tool 에 확장프로그램 설치
   - VSCode
     - ESLint
     - Prittier - Code formatter

2. Tool settings - VSCode
    * ESLint + Prettier 사용
        1) VSCode preferences -> Settings 접속 (Ctrl + ,)
        2) format on save 검색 -> Editor: Format On Save 체크
            : 파일저장 시 코드 eslint 적용 스타일로 변경
        3) default formatter 검색 -> Editor: Default Formmatter 수정
            : Prettier - Code formatter로 수정
```

#### [확장프로그램 설치] (참고)

```
* Reactjs code snippets : rsc 명령어 등으로 코드 자동완성
```

#### [구현기록]

##### [CRA]

```
1) npx create-react-app ems-front --template typescript
```

##### [초기 파일 삭제/변경]

```
- App.css
- App.test.tsx
- index.css
- index.tsx
- logo.svg



[index.tsx] 내용변경

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


[App.tsx]

function App() {
  return <div className="App">React Init</div>
}

export default App

```

##### [eslint + prettier]

```
[ESLint]
1) 더 좋은 세팅을 위해 package.json 에서 아래 지움
    "eslintConfig": {
        "extends": [
        "react-app",
        "react-app/jest"
        ]
    },
2) npm i eslint --save-dev
3) npx install-peerdeps --dev eslint-config-airbnb
    [package.json]에 아래 설치됨
    "devDependencies": {
        "eslint": "^8.2.0",
        "eslint-config-airbnb": "^19.0.4",
        "eslint-plugin-import": "^2.25.3",
        "eslint-plugin-jsx-a11y": "^6.5.1",
        "eslint-plugin-react": "^7.28.0",
        "eslint-plugin-react-hooks": "^4.3.0"
    }
4) npx eslint --init
    4-1)
    How would you like to use ESLint?
    => To check syntax, find problems, and enforce code style
    What type of modules does your project use?
    => Javascript modules (import/export)
    Which framework does yout project use?
    => React
    Does your project use Typescript?
    => No
    How would you like to define a style for your project?
    => Use a popular style guide
    Where does yout code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
    => Browser, Node 둘 다 선택(spacebar 를 누르면 둘 다 선택됩니다.)
    Which style guide do you want to follow?
    => Airbnb: https://github.com/airbnb/javascript
    What format do you want your config file to be in?
    => JSON
    Would you like to install them now with npm?
    => Yes

    4-2) [package.json]에 아래 추가 설치됨
    "devDependencies": {
        "@typescript-eslint/eslint-plugin": "^5.57.0",
        "@typescript-eslint/parser": "^5.57.0",
        ...(중략)...
    }

    4-3) [.eslintrc.json] 파일 생성됨
    {
        "env": {
            "browser": true,
            "es2021": true
        },
        "extends": [
            "plugin:react/recommended",
            "airbnb"
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            },
            "ecmaVersion": 14,
            "sourceType": "module"
        },
        "plugins": [
            "react",
            "@typescript-eslint"
        ],
        "rules": {
        }
    }

5) npx eslint src/* --fix
    아래 추가 내용 참고

```

##### [ESLint] 초기 세팅 시 불필요한 오류 삭제

```
1) "react/jsx-filename-extension"
   내용 : 확장자가 '.tsx' 인 파일에서는 jsx가 허용되지 않습니다
   해결 : .eslintrc.json 에 추가
    "rules":{
        "react/jsx-filename-extension":["warn",{"extensions":[".tsx"]} ],
    }

2) "import/no-unresolved"
   내용 : 모듈 './App'에 대한 경로를 확인할 수 없습니다
   해결 : 패키지 설치 후 .eslintrc.json 에 추가
        2-1) npm install eslint-import-resolver-typescript --save-dev
        2-2)
            "settings":{
                "import/resolver":{
                    "typescript":{}
                }
            }

3) "import/extensions"
   내용 : Missing file extension 'tsx' from './App'
   해결 : .eslintrc.json 에 추가
        "rules":{
            "import/extensions":[
                    "error",
                    "ignorePackages",
                    {
                    "ts":"never",
                    "tsx":"never"
                    }
            ]
        }

4) "no-undef"
   내용 : :"test" is not defined
   해결 : .eslintrc.json 에 추가
        "extends":[
            "plugin:@typescript-eslint/recommended"
        ]
5) 'React' must be in scope when using JSX  react/react-in-jsx-scope
    해결 : .eslintrc.json 에 추가
          "extends": [
                "plugin:react/jsx-runtime"
            ]



** 추가 사용할 규칙
1) react hooks rules
    1-1)
    "plugins":[
        "react-hooks"
    ]
    1-2)
    "rules":{
        "react-hooks/rules-of-hooks":"error",
        "react-hooks/exhaustive-deps":"warn"
    }


[참고] https://velog.io/@he0_077/React-Typescript-eslint-prettier-%EC%84%A4%EC%A0%95
```

##### [Prettier]

```
1) prettier 설치
    npm install --save-dev --save-exact prettier

2) .prettierrc.json 파일 생성
    {
        "trailingComma":"es5",
        "tabWidth":4,
        "semi":false,
        "singleQuote":true
    }

3) ESLint rules과 Prettier의 충돌 시 처리
    3-1)
        $ npm i -D eslint-config-prettier
        $ npm i -D eslint-plugin-prettier

    3-2) .eslintrc.json
        "extends":[
            "plugin:prettier/recommended"
        ]

4) prettier 실행
    npx prettier --write src/App.tsx

```

[참고] https://velog.io/@he0_077/React-Typescript-eslint-prettier-%EC%84%A4%EC%A0%95
