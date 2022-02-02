# build-reac-for-homework

1) Скачать zip-архив.
2) Разархивировать в папку с будущим проектом.
3) В файле package.json в строке "homepage": "" в кавычки вставить ссылку на билд проекта.
   К примеру - "homepage": "https://eugen-ko.github.io/goit-react-hw-01-components",
4) Запустить npm install для установки пакетов из package.json.

После этого можно создавать проект в папке '/src'.

Реализовано:
npx create-react-app .
npm i styled-components
npm i prop-types
npm i gh-pages --save-dev
npm i --save-dev prettier husky lint-staged

Добавлено в package.json 
"scripts":
  {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
  }
  
Прописаны конфиги:
.huskyrc
.lintstagedrc
.prettierrc.yaml
jsconfig.json (для абсолютных путей)
