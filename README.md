# tiny_library site

https://anthem53.github.io/tiny_library/


# 깃허브 사이트 만들때 주의사항

- http 통신 활용한 기술들이 안먹히는 경우가 많다. 해당 기술을 활용해서 다른 html를 불러오는거 테스트 했으나 로컬의 서버에서는 잘 수행되었으나 
- img는 jpg 파일은 안된다. png도 안되는거 같다. 로컬에선 인식되는데 


# vscode 로컬에서 잘 안되는 경우 

- .vscode/launch.json 파일에  "file" : "${workspaceFolder}/index.html" 추가하기
- 출처 https://myorangebox.tistory.com/38
