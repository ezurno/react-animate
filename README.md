# ✨ **React-Animate 프로젝트** ✨

[React-Animate](https://ezurno.github.io/react-animate/)

React의 라이브러리를 활용한 애니메이션

<br/>

## 사용한 기술 🛠️

- styled-component
- react-icons
- framer-motion
- Recoil

<br/>
<hr/>

> ## **MAIN**

<br/>
<br/>
<p align="center">
<img src ="md_resources\resource_1.png" height="150"/>
<img src ="md_resources\resource_2.png" height="150"/>
<img src ="md_resources\resource_17.png" height="150"/>
</p>
<br/>
<br/>

- 메인화면의 **DRAG** 를 drag 시 글자가 흩어지는 애니메이션
- 글자를 계속 누르고 있으면 뱅글뱅글 돌아감

<br/>
<hr/>

> ## **LOGO**

<br/>
<br/>
<p align="center">
<img src ="md_resources\resource_4.png" height="150"/>
<img src ="md_resources\resource_3.png" height="150"/>
<img src ="md_resources\resource_5.png" height="150"/>
</p>
<br/>
<br/>

- **SVG** 의 **varients**를 조절해 로고가 그려지는 애니메이션

<br/>
<hr/>

> ## **BOX**

<br/>
<br/>
<p align="center">
<img src ="md_resources\resource_6.png" height="200"/>
<img src ="md_resources\resource_7.png" height="200"/>
</p>
<br/>
<br/>

- BOX 내에 있는 블럭을 이동 시킬 때 밖으로 나오지 못함
- 드래그 시 모양이 바뀌며 드래그 종료 시 다시 돌아감 **dragSnapOrigin**

<br/>
<hr/>

> ## **SLIDER**

<br/>
<br/>
<p align="center">
<img src ="md_resources\resource_8.png" height="200"/>
<img src ="md_resources\resource_9.png" height="200"/>
<img src ="md_resources\resource_10.png" height="200"/>
<img src ="md_resources\resource_11.png" height="200"/>
</p>
<br/>
<br/>

- 버튼을 클릭하면 점차 사라지며 우측에서 다음 **BOX** 가 나오는 애니메이션
- 양방향으로도 애니메이션이 작동 함

<br/>
<hr/>

> ## **DRAG**

<br/>
<br/>

<p align="center">
<img src ="md_resources\resource_12.png" height="180"/>
<img src ="md_resources\resource_14.png" height="180"/>
<img src ="md_resources\resource_13.png" height="180"/>
</p>

<br/>
<br/>

- 가운데의 **BOX**를 움직이면 뒷 배경 색이 바뀌는 애니메이션
- **dragSnapOrigin** 으로 인해 드래그 종료 시 원점으로 돌아감

<br/>
<hr/>

> ## **OVERLAY**

<br/>
<br/>

<p align="center">
<img src ="md_resources\resource_15.png" height="200"/>
<img src ="md_resources\resource_16.png" height="200"/>
<p/>
<br/>
<br/>

- **id**를 지정한 **BOX**가 **overlay** 되는 애니메이션

<br/>
<hr/>

> ## **그 외**

<br/>
<br/>
<img src ="md_resources\resource_18.png" height="100"/>

<br/>
<br/>

- **hover** 시 애니메이션을 줌
- **Recoil** 을 활용해 네비게이션 바를 누르면 특정 **components**가 나오게 만듦
- **react-router-v6** 로 **navigatior** 사용 할 예정

<br/>

```ts
import { atom } from "recoil";

export const navState = atom<number>({
  key: "navState",
  default: 0,
});
//////////////////////////
<Wrapper>
  <Header />
  {viewer === 0 ? (
    <Main />
  ) : viewer === 1 ? (
    <Logo />
  ) : viewer === 2 ? (
    <Box />
  ) : viewer === 3 ? (
    <Slider />
  ) : viewer === 4 ? (
    <Drag />
  ) : viewer === 5 ? (
    <Overlay />
  ) : null}
  <Footer />
</Wrapper>;
```

<br/>
