# tiny_library site

https://anthem53.github.io/tiny_library/


# 깃허브 사이트 만들때 주의사항

- http 통신 활용한 기술들이 안먹히는 경우가 많다. 해당 기술을 활용해서 다른 html를 불러오는거 테스트 했으나 로컬의 서버에서는 잘 수행되었으나 
- 로컬에서는 대소문자 좀 틀려줘도 인식해줘서 몰랐는데 깃헙에서는 칼같이 보는거 같다.
- 폴더에 정보 찾아갈때 "폴더이름/파일" 로 해야지 "/폴더이름/파일" 로 하면 안된다.
- 아마 현재 폴더를 할때는 ./ 으로 해줘야하는 듯 하다.


# vscode 로컬에서 잘 안되는 경우 

- .vscode/launch.json 파일에  "file" : "${workspaceFolder}/index.html" 추가하기
- 출처 https://myorangebox.tistory.com/38
