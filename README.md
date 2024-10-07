# Fuji website clone coding seungwan

## Figma Link

[피그마 링크](<https://www.figma.com/design/vT5c6MXGCIUL5MDVHcyhb1/%ED%9B%84%EC%A7%80%ED%95%84%EB%A6%84-%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8-(Community)?node-id=0-1&node-type=canvas&t=4gubyN6IxeQYfKO4-0>)

## 레이아웃 설계 🎨

1. 너비 : 피그마 웹 기준 1374, 모바일 기준 383 픽셀이라서, max-width를 1375, min width를 380으로 설정
2. 레이어 구성 : 헤더, 히어로 캐러셀, 슬라이더 UI와 프로모션, 렌즈, 카메라, 악세서리, 프로젝터, 오리지널 굿즈, footer의 수평 영역으로 나뉨
3. 기본적으로 사진의 크기를 갈아버리고 싶지는 않고 해당 너비를 넘어간다면 다음 줄로 넘어가는 구성을 하고 싶음
4. 일단은 딱히 `react-router-dom` 모듈을 통한 라우팅이 필요하지는 않음

## Trouble Shooting

1. SVGR 컴포넌트의 import 문제 : vite는 public 디렉터리 내에 위치한 에셋을 Javascript로 불러오는 것을 허용하지 않는다. 하지만 `src` 디렉터리에 에셋을 위치시키면 문제는 여전히 발생한다. 개발환경에서의 경로와 vite 가 빌드한 뒤의 프로덕션 환경에서의 상대 경로는 다르게 적용되기 때문이다.<br><br>
   -> alias와 svgr을 모두 활용하는 케이스에 대한 해결 필요. 일단 SVGR을 사용하지 않고 vite의 번들링 최적화를 살리는 식으로 다가감
