## Project

#### [using]

```
* react + typescript (eslint + prettier )

* i18next: "^22.4.14"

* react-router-dom: "^6.10.0"
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

    * 위 설정으로 코드 저장 시, .prettierrc.json 에 정의된 문법으로 자동수정
    * 코드 저장 시 ESLint 문법 충돌로 에러가 남아 있다면 아래 명령어 실행
        $ npx eslint ./src --fix

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
* 실행
    npx eslint src/* --fix

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

6) Expected linebreaks to be 'LF' but found 'CRLF'
    내용 : Typescript + ESLint 쓰면 위 사항이 자꾸에러남
    해결 : .eslintrc.json 에 추가
        "rules":[
            "prettier/prettier": ["off", {"singleQuote": true}],
            "linebreak-style": 0
        ]

7) Missing trailing comma.
    해결 : .eslintrc.json 에 추가
    "rules":[
        "comma-dangle": ["error", "never"]
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

##### [.eslintrc.json 전문]

```
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 14,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "react-hooks"],
  "rules": {
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": ["off", { "singleQuote": true }],
    "linebreak-style": 0,
    "comma-dangle": ["error", "never"]
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}


```

##### [Prettier]

```
1) prettier 설치
    npm install --save-dev --save-exact prettier

2) .prettierrc.json 파일 생성
    {
        "trailingComma": "es5",
        "semi": true,
        "singleQuote": true,
        "tabWidth": 2,
        "useTabs": false,
        "quoteProps": "as-needed",
        "printWidth": 80
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

##### [.prettierrc.json 전체옵션 v1.19.1]

```
{
  "arrowParens": "avoid", // 화살표 함수 괄호 사용 방식
  "bracketSpacing": false, // 객체 리터럴에서 괄호에 공백 삽입 여부
  "endOfLine": "auto", // EoF 방식, OS별로 처리 방식이 다름
  "htmlWhitespaceSensitivity": "css", // HTML 공백 감도 설정
  "jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  "jsxSingleQuote": false, // JSX에 singe 쿼테이션 사용 여부
  "printWidth": 80, //  줄 바꿈 할 폭 길이
  "proseWrap": "preserve", // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
  "quoteProps": "as-needed" // 객체 속성에 쿼테이션 적용 방식
  "semi": true, // 세미콜론 사용 여부
  "singleQuote": true, // single 쿼테이션 사용 여부
  "tabWidth": 2, // 탭 너비
  "trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "useTabs": false, // 탭 사용 여부
  "vueIndentScriptAndStyle": true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
  "parser": '', // 사용할 parser를 지정, 자동으로 지정됨
  "filepath": '', // parser를 유추할 수 있는 파일을 지정
  "rangeStart": 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  "rangeEnd": Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
  "requirePragma": false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  "insertPragma": false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
  "overrides": [
    {
      "files": "*.json",
      "options": {
        "printWidth": 200
      }
    }
  ], // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
}
```

##### [다국어처리 - i18n]

```
1) 설치
    npm install react-i18next i18next

[참고]
https://velog.io/@zlemzlem5656/react-i18next-typescript
https://github.com/micahang0127/react-basic-settings

```

##### [public & assets]

```
* public VS assets

React에서 빌드 시 이미지를 포함하는 방법은 크게 2가지이다. (CRA에서)
1) public 디렉토리에 모든 것이 서버로 복사된다
    번들러에 의해 처리되어 js 파일내로 임포트한다
2) src 아래 모든 것이 JS 파일로 가져오게 된다.
     절대 경로를 통해 url을 참조한다.

=> 따라서,
1) 이미지를 컴포넌트로 import 
    1-1) 이미지 파일을 src폴더 아래 어딘가(src/assets/images/..) 에 넣는다
    1-2) 이것만으로 바로 사용할수 없다. React 컴포넌트로 가져와야 한다.

    ex> import companyLogo from './path/to/logo.jpg';

2) 이미지파일을 public 디렉토리에
    이미지 파일을 퍼블릭 폴더에 넣을 수 있다(Create React App이 아닌 경우 서버에 복사될 폴더에 놓을 수 있다)
    퍼블릭 폴더를 "root" 디렉토리(/)로 취급한다고 가정하면(public/images/thing.jpg) 아래와 같이 사용한다.

    file  public/images/thing.jpg
    ex>  <img src="images/logo.jpg" alt="BigCo Inc. logo"/>

    이 방법을 사용하면 웹 서버에서 이미지를 일반 파일로 사용할 수 있고
    브라우저에서 http://localhost:3000/images/logo.jpg(또는 실제 도메인 이름) 경로로 해당 파일을 오픈할 수 있다.


무엇을 사용해야 하는가)
    일회성 이미지의 경우 import를 사용하는 것이 좋다.
    1) src 파일 안에 이미지를 import 하여 사용 할 경우, 전처리되어 번들링이 되고, 퍼블릭 폴더의 어떤 파일도 전처리되거나 최적화되지 않는다.
    2) assets은 누락된 파일이 있을 경우 배포후 404 오류 대신, 컴파일 시 오류를 발생시켜 배포 전, 오류를 발견할수 있다. 반면, public폴더 내에는 파일이 누락되어도 해당 파일은 컴파일 시간에 호출되지 않기에, 사용자에게 404 오류가 발생할 수 있다.
    3) assets은 결과 파일 이름에는 콘텐츠 해시가 포함되므로 브라우저가 이전 버전을 캐싱하는 것에 대해 걱정할 필요가 없다.
    public 폴더 내에는 파일 이름에 콘텐츠 해시가 포함되지 않으므로 해당 파일이 변경될 때마다 (소스에서) 쿼리 인수를 추가하거나 해당파일의 이름을 바꿔야 한다. 

    => 즉, 기본적으로 앱에 포함되는 리소스는 에셋 형태로 번들링 하는 것이 좋습니다.
    하지만 실제 개발 시, 사용할 모든 이미지를 import 를 명시하여 사용하기란 매우 불편한 사항이었다. 
    때문에 나는 이미지 파일은 public에 넣어 사용 하고, css, js 파일들은 assets에서 관리하는 방법을 택하였다.


[참고]
https://itchallenger.tistory.com/683

```

##### [router]

```
1) 설치
    npm i react-router-dom



```


[참고] https://velog.io/@he0_077/React-Typescript-eslint-prettier-%EC%84%A4%EC%A0%95
