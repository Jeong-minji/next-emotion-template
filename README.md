# GitHooks

Git Hook은 특정 git 이벤트가 발생했을 때, 자동으로 특정 스크립트를 실행할 수 있는 기능이다.<br/>
Commit 또는 Merge 할 때는 클라이언트 훅, push 할 때는 서버 훅이 실행되는데, 따로 설치할 필요 없이 모든 repository에서 지원되고 있다.

지원하는 hook 리스트이다.

<img width="331" alt="스크린샷 2022-10-01 오후 2 02 48" src="https://user-images.githubusercontent.com/20683436/193393480-62334eff-0ef1-4b71-a9da-68b7f82d7a9c.png">

<br/>
훅은  `.sample`이라는 확장자를 삭제하고 커스터마이징하면 각 상황에 맞는 훅을 적용할 수 있다. 예를 들어, 커밋 전 자동으로 실행될 pre-commit.sample을 적용하고 싶다면 다음의 과정을 거친다.

1. `vi GIT_REPOSITORY_NAME/.git/hooks/pre-commit` -> 파일 생성
2. pre-commit에서 실행될 스크립트 작성

커밋 전에 lint나 prettier를 미리 실행시켜 git에 올리기 전에 한 번 더 체크하거나, 테스트 코드를 미리 실행시켜보는 등 유용하게 사용할 수 있다.

하지만 다음과 같은 단점이 있다. <br/>
스크립트 파일을 직접 넣게 되면, 그 파일은 git으로 기록되지 않기 때문에 따로 관리해야 한다.
프로젝트 별로 설정한 git hook을 공유할 수 있지만, 작업자가 프로젝트를 clone 한 후 `./setup_hooks.sh`를 실행하지 않으면 훅을 적용할 수 없다. 즉, 팀원 사이에 충분한 공유가 이루어지지 않으면 훅을 적용하지 않고 사용할 확률이 있다.

<br/>

# Husky

Git Hook을 쉽게 사용할 수 있도록 도와주는 라이브러리로, 위와 같은 단점을 해결하기 위한 방법으로 사용한다. Git Hook을 프로젝트에서 반드시 적용할 수 있도록하며, 훅에 대해 자세히 알지 못하더라도 commit, push를 관리할 수 있다.
굳이 `.git/hooks` 폴더를 건드리지 않고도 git hook 스크립트를 제어할 수 있다.
