# Github Finder
goormthon fullstack training PBL 03

### 주요 기능
1. 검색창에 username을 입력하고 `enter`키 또는 `search button`을 누르면 해당하는 Github 유저 정보를 열람할 수 있다.
2. 조회되는 정보로는
    * 프로필 이미지
    * Public Repo, Public Gists, Followers, Following 등 수치 정보
    * Company, Website, Location 등 유저 정보
    * Contribute Calendar (잔디밭) (활용 API: [Github Chart API](https://ghchart.rshah.org/))
    * Latest Repository - 가장 최근에 수정한 리포지토리 5개가 표시되며, 이름을 클릭하면 해당 리포지토리로 이동.

### preview
![github finder preview](/assets/readme-img/preview.gif)
****************************************************************
> ### 프로젝트 목표
> * OOP를 이용한 JavaScript 구현
> * 비동기 통신 구현
> * 잔디밭, Spinner 등 추가 기능 구현

> ### Error Handling
> * username 데이터가 존재하지 않는 경우 : '찾을 수 없음'
>   ![user not found](/assets/readme-img/user-not-found.png)
> * 유저의 Contribution Calendar를 불러올 수 없는 경우 : display="none"