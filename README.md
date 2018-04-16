# react 를 공부하기 위해 만들어 진 개인 저장소.

## react-01
- 공부하기에 앞서 공부 할 수 있는 환경구성을 셋팅함.
- webpack 을 이용해 구성.
    - babel  : `babel-core`, `babel-loader`, `babel-preset-env`, `babel-preset-react`
    - css, less : `css-loader`, `less`, `less-loader`, `style-loader`, `mini-css-extract-plugin`
    - html : `html-loader`, `html-webpack-plugin`
    - react : `react`, `react-dom`
    - webpack : `webpack`, `webpack-cli`, `webpack-dev-server`
- `npm start`
    - `webpack-dev-server` 를 실행하고, webpack 의 mode 는 development 로 동작된다.
- `npm run build`
    - `webpack --mode production` 을 실행하며, 서버는 별도로 구동하지 않는다. dist 폴더를 생성하고 빌드된 파일을 해당 폴더에 넣는다.
- `mini-css-extract-plugin` 을 이용해 `.css` 와 `.less` 파일을 별도 파일로 빌드 할 수 있도록 해두었으며, 주석처리 해두었음.
- `style-loader` 를 통해 `.less` 와 `.css` 파일을 html 문서의 head 에 바로 삽입 할 수 있도록 셋팅함. 상황에 따라 css 파일을 생성하거나 html 에 바로 삽입 할 수 있는 환경 생성.
- `html-webpack-plugin` 을 통해 html template 을 사용할 수 있음.
- 차후 실제 프로젝트 환경에서 사용할 수 있도록 이미지 로더 등등을 추가할 예정이며, 정적구성요소들의 폴더구성도 세세하게 조정할 예정.

## react-02
- react 가 실행 되면서 각각 상태별 실행되는 메서드의 순서를 파악할 수 있음.
