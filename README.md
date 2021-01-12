# cra-templete-redux-typescript

[npx create-react-app my-app --template redux-typescript

\# or

yarn create react-app my-app --template redux-typescript]

## eslint install

[yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin]

## prettier install

[yarn add -D prettier eslint-config-prettier]

## .eslintrc.json

[
{
"extends": [
"eslint:recommended",
"plugin:@typescript-eslint/recommended",
"prettier",
"prettier/@typescript-eslint"
],
"plugins": ["@typescript-eslint"],
"parser": "@typescript-eslint/parser",
"parserOptions": {
"sourceType": "module"
},
"env": { "browser": true, "node": true, "es6": true },
"rules": {
// 適当なルール
}
}
]

### vs.code setting

[
{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},
}
]
