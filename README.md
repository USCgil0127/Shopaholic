# Sprint Shopaholic
- hover 기능
![](https://images.velog.io/images/gil0127/post/dbed9673-225a-44dc-8e36-0c3389a477d9/p1.gif)

- delete와 add 기능
![](https://images.velog.io/images/gil0127/post/a3e8c6e3-621e-4981-8c4a-31ebdbcfa8f8/p2.gif)

- hide 기능
![](https://images.velog.io/images/gil0127/post/ad61d903-3bb8-48d3-a9be-8490e2f40578/3333.gif)

- 해당 리스트 조회 기능
  -  대문자, 소문자 상관없이 case-insensitive 하다.
![](https://images.velog.io/images/gil0127/post/7ea5d0cd-7168-4d7f-9151-c7be33b0d2d6/p4.gif) 

- 최하단에 간단한 퀴즈와 느낀점 첨부
![](https://images.velog.io/images/gil0127/post/62303445-aa43-4e88-9c0e-24d972391968/last.gif)

----------------

- 미니 프로젝트 진행 목적
HTML, CSS, DOM을 이용한 미니 프로젝트를 진행했다. 핵심은 어떤 상황에서 무슨 이벤트를 사용하지 아는 점과 HTML과 CSS 를 이용한 적절한 UI 구현이다.

!codepen[uscgil0127/embed/OJjYQpr?default-tab=html%2Cresult]

- 어려웠던 점
검색 기능 구현시, "검색 버튼"이 따로 없기 때문에, 키보드를 땔때마다, 반응하여, 검색창의 알파벳들에 맞는 검색기능을 구현해야 했다. 
그러나, keyup 으로 타입된 단어들은 리스트의 단어 중 일부만 해당 알파벳들이 속해있어도, 검색 되기 때문에, 추가적인 조치가 필요했다.
  - ex) 리스트에  "pizza", "zzapi", "zpiza" 가 존재한다고 할 때, 검색 창에 "pi"가 타입됐다면, 위의 3단어들이 모두 다 검색창에 뜬다. 그러나, 내가 원하는 것은 오직 "pizza"만 뜨기를 원한다. 
  - **사용된 해결법 1** : 해당 문제를 해결해주기 위해서 2중 for문을 사용했다. (outer)리스트의 갯수와 (inner)검색창에 알파벳의 갯수로 설정한 뒤, 한 단어씩 모든 리스트들의 알파벳들과 순서대로 검색한 결과, 많은 문제를 해결할 수 있었다. 
  - **가능한 또다른 해결법 2** : indexOf() + if절로 예기치 못한 예외 처리 
  => 2중 for문은 리스트가 길면 길수록, 퍼포먼스가 느려지기 때문에, 리스트가 길어진다면, indexOf()를 통해 검색창에 타입된 단어를 찾고, 예기치 못하게 발생하는 예외처리를 if절로 해줘서 고칠 수도 있다. app1.js에 구현해봤다.

- 배운 점
DOM과 이벤트를 다루는 데, 더 능숙해진 것같다. 그러나, 앞으로 더 많은 이벤트들을 공부해봐야 할 것같다. 아직도 내가 알지 못하는 이벤트들이 너무 많고, 그 중에 어떤 이벤트들은 똑같은 문제를 더 쉽게 해결할 수 있기 때문에, 앞으로도 꾸준한 학습이 필요하다.

