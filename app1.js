 // 4. 다른 접근법

 const SEARCH = document.forms['search-item'].querySelector('input');

 // add our event listener
 SEARCH.addEventListener( 'keyup', (e) => {
     // lets grab the user text
     let text = e.target.value.toLowerCase();
    // console.log(text);
    
    let groceryList = document.querySelector('#grocery-list ul');
    let groceries = groceryList.getElementsByTagName('li');
    // 태그네임은 HTML컬렉션으로 리턴한다.
    // 이것은 배열처럼 보이지만, 배열이 아니다. 그래서 많은 method를 사용불가
    // 지금 forEach를 사용하고 싶은데, 그러지 못하니
    // 이 HTMLCollection 을 Array로 바꿔보자!!

    // 이것을 바꿀 수 있는 한 가지 방법은 Array.from() 이다

    let groceriesArray = Array.from(groceries);

    groceriesArray.forEach( grocery => {
        let groceryName = grocery.firstElementChild.textContent;
        
       groceryNameLower = groceryName.toLowerCase();

       // now we can use indexOf to see if our text can be found within our grocery name.
       // If nothing is found, a value of -1 is returned and we can hide the item.
     if( groceryNameLower.indexOf(text) === -1 ){
         grocery.style.display = "none";
     } else {
         grocery.style.display = 'block';
     }
     // 이거 더 간단하고 ㄱㅊ은 방법이네.
     // 하지만, 이 방법은 p를 타입했을 때는 문제가 생긴다.
     // 여기에 나의 마지막 if 절만 붙인다면, 코드가 더 완벽해질 것이다.
    });

 })