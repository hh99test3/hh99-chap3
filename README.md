
### 팀원
김민승, 김태현

###코드컨밴션

1. 변수명은 카멜케이스 (ex homePage(0) homepage(x) , 파일명은 퍼스칼케이스 ( ex Home (0) home(x))
1. 이벤트 함수 “on” + [이벤트종류] + Handler
1. Props 이벤트 함수 => props 명 = on + [이벤트종류] (ex onRemove , onChange, onInsert)
1. 폴더 구조 => 기능적 폴더 구조 , 파일타입별 폴더구조
1. Git flow
    - organization
    본인 이름 작업 브랜치
    Dev =>  테스트
    Main => 최종

Git commit message = > [명령어]  [작성자]  [메시지]  [이슈]



### 기능적 폴더 구조
- features
— ui
- Pages
— home
- Redux
      — modules
      — config

Redux =>  plain redux

### 업무
- 민승.   :  모달 , 버튼
- 태현  : 슬랙트 , 인풋

### [참고]git commit 메세지 명령어
  - feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
  - fix : 기능에 대한 버그 수정
  - build : 빌드 관련 수정
  - chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
  - ci : CI 관련 설정 수정
  - docs : 문서(주석) 수정
  - style : 코드 스타일, 포맷팅에 대한 수정
  - refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
  - test : 테스트 코드 추가/수정
  - release : 버전 릴리즈
