# 테이블만들기

> [HTML테이블태그](https://molra0000.tistory.com/9)

- `<table>` : 테이블을 만드는 태그

  > 테이블을 만들려면 가장 최상단에 `<table>`태그로 감싸야한다.

- `<tr>` : 테이블 내부의 행 태그

  > 행 추가하는 태그

- `<th>` : 행 내부의 **제목 셀** 태그

  > 헤더 셀(기본 bold 처리되어 있음)

- `<td>` : 행 내부의 **일반 셀** 태그

  > 헤더가 아닌 셀

- `<caption>` : 테이블의 제목 또는 간단한 설명을 작성하는 태그
- `colspan` 속성 : 열을 합칠 수 있다.(좌, 우)
- `rowspan` 속성 : 행을 합칠 수 있다.(위, 아래)

```html
    <table border="1">
        <tr>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
            <th>일</th>
        </tr>
        <tr>
            <td colspan="2">쌀밥</td>
            <td colspan="3">잡곡밥</td>
            <td>스파게티</td>
            <td>짜장면</td>
        </tr>
        <tr>
            <td>불고기</td>
            <td>떡갈비</td>
            <td>미니돈까스</td>
            <td>오징어볶음</td>
            <td>제육볶음</td>
            <td rowspan="2">피클</td>
            <td>단무지</td>
        </tr>
        <tr>
            <td>배추김치</td>
            <td>깍두기</td>
            <td>미소된장국</td>
            <td>동치미</td>
            <td>고추절임</td>
            <td>짬뽕국물</td>
        </tr>
    </table>
```

- 다중 tbody를 활용하면 다중 헤더셀을 사용할 수 있다. `<thead>`는 하나여야 하지만 헤더셀을 다중으로 써서 종류별로 셀을 분류하고 싶을 때 활용할 수 있다.



# 페이지네이션(pagenation)