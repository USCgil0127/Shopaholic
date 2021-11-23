  // 1. list의 아이템 지우기
  let table = document.querySelector("#grocery-list");

  function clickDelete(e) {
      let btn = e.target.closest('.delete');
      if(!btn) { return; }
      btn.parentElement.remove();
  }

  table.addEventListener( 'click', clickDelete );

  // 2. list의 아이템 더하기 - submit event
  let add_item = document.querySelector('#add-item');

  function clickAdd(e) {
      e.preventDefault();
     // let text = document.querySelector('#add-item input');
      let text = add_item.querySelector('input');
      // console.log(text.value);
      if( !(text.value.trim().length) ) { 
          alert("빈 칸을 채워주세요."); 
          text.value = "";
          return;
      }
      
      let LI = document.createElement('li');
      let span_name = document.createElement('span');
      // class를 추가하는 2 가지 방법
      // 1.
      //span_name.setAttribute( "class", "item" );
      // 2.
      span_name.classList.add('item');
      span_name.textContent = text.value;
      let span_delete = document.createElement('span');
      //span_delete.setAttribute("class", "delete");
      span_delete.classList.add('delete');
      span_delete.textContent = "delete";

      LI.append( span_name, span_delete );

      let UL = document.querySelector("#grocery-list ul");

      UL.append( LI );
      //UL.prepend( LI );
      
      //text.value = "";
      // 이렇게도 텍스트 창을 비울 수 있다.
      text.value = null;
  }

  add_item.addEventListener( 'submit', clickAdd );

  
    // 3. checkbox에 hide 활성화 시키기
    // checkbox는 change 이벤트가 default로 fire 된다.

 let checkbox = document.querySelector('#hide');

 checkbox.addEventListener( 'change', clickHide );
 
 function clickHide(e) {
   //  console.log("It works");
   //  console.dir(e);
     let hidden_list = document.querySelector('#wrapper');
     let tg = hidden_list.children[2];
 
     // 방법 1
     // if( tg.classList.value === "" ){
     //     tg.classList.add("checked");
         
     // }
     // else if( tg.classList.value === "checked" ){
     //     tg.classList.remove("checked");
     // }
   
     // 방법 2 => checked 라는 얘를 이렇게 접근하는지 몰랐음
     // 짚어온 태그의 dir를 찍어보고, 가능한 method들을 확인해보자
     // 
     if( checkbox.checked ){
         tg.style.display = "none";
     } else {
         tg.style.display = "block";
     }
     
     // tg.style.display = "none";
 }
 
 // 4. search 기능 만들기 => 대소문자 구분 없이
     // keyup을 키보드에서 키를 놓을 때마다 발생한다.
     // 현재, 검색 버튼이 없기 때문에, 키보드를 놓을 때마다
     // 자동적으로 발생해야 함

     // s만 있으면, s가 맨 앞에 나와있는 거만

     // 다르게 짚어오기
     // const SEARCH = document.forms['search-item'].querySelector('input');
     let search = document.querySelector("#search-item input[type='text']");

     search.addEventListener( "keyup" , function (e) {
        
        let list = document.querySelectorAll("#grocery-list ul li");
       // console.log( list );
       // console.log( list[1].firstElementChild.outerText[0] );
       let item = search.value;

        for( let i = 0; i<list.length; i++){
            // 목록의 갯수니까 4번
            for( let j = 0; j< item.length; j++ ){
                // 각 알파벳 별로 확인하고 싶은 거잖아
                if( item[j].toUpperCase() !== list[i].firstElementChild.outerText[j].toUpperCase() ){

                        list[i].style.display = "none";                   
                }
                else{ // 이 부분 때문에 검색이 이상하게 됨

                    // 검색창에 문자가 하나 이상이라면,
                    // 바로 전 문자와 검색값이 동일하지 않을 경우
                    // 안 보이게 한다.
                    // 이것은 안 해주면, sum에서 m만을 보고 판단하기 때문에
                    // 검색값이 j번째에 m이 있는 단어들이 나온다.
                    if( j >= 1 ){
                        
                        if( item[j-1].toUpperCase() !== list[i].firstElementChild.outerText[j-1].toUpperCase() ){
                            list[i].style.display = "none"; 
                        }
                    }
                    else{
                        list[i].style.display = "block";
                    }
                }

            } // end of inner for

            // 검색창을 다 지웠을 경우, list 원상 복귀
            if( item.length === 0 ){
                list[i].style.display = "block";
            }
        } // end of outer for

     });

    //////////////// 나의 접근법

    let btns = document.querySelectorAll("footer .bottom_btn");

    let hidden_content = document.querySelector(".btn_content1");

    btns[0].addEventListener( 'click', function (e) {
       
        // "Food Joke" 클릭시, 하위 창을 열었다 닫았다 합니다.
        if( hidden_content.style.display === "none" ){
            hidden_content.style.display = 'block';
            hidden_content2.style.display = 'none';
            btns[0].style.background = 'darkgrey';
            btns[1].style.background = 'rgba(211, 211, 211, 0.644)';
        }
        else{
            hidden_content.style.display = 'none';
            btns[0].style.background = 'rgba(211, 211, 211, 0.644)';

         }    
    } );

    // "Did you know" 클릭시,
    let hidden_content2 = document.querySelector(".btn_content2");

    btns[1].addEventListener( 'click', function (e) {
       
       // "Did you know" 클릭시, 하위 창을 열었다 닫았다 합니다.
       if( hidden_content2.style.display === "none" ){
           hidden_content2.style.display = 'block';
           hidden_content.style.display = 'none';
           btns[1].style.background = 'darkgrey';
           btns[0].style.background = 'rgba(211, 211, 211, 0.644)';
       }
       else{
           hidden_content2.style.display = 'none';
           btns[1].style.background = 'rgba(211, 211, 211, 0.644)';
          
        }    
   } );

    

     // "Answer 버튼 클릭시,"
     hidden_content.addEventListener( 'click', function (e) {
            let btn = document.querySelector('.btn_content1 button');

           // alert( "It works" );

            if( !( btn.classList.contains("btn_style") ) ){
                btn.textContent = "다이아몬드"
                btn.classList.add("btn_style"); 
            }
            else {
                btn.textContent = "Answer";
                btn.classList.remove("btn_style");
            }
        } )