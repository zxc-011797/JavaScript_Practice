"use strict"; // 엄격모드
const plusBtn = document.querySelector("button.plusBtn");
const minusBtn = document.querySelector("button.minusBtn");
const testVal = document.querySelector("input#testVal");

let testVal_int = parseInt(testVal.value);

plusBtn.addEventListener("click", plusBtnFn);
function plusBtnFn() {
  // 단항(증감) 연산자는 변수나 상수에 할당된 데이터로만 연산 가능
  testVal.value = ++testVal_int;
}

minusBtn.addEventListener("click", minusBtnFn);
function minusBtnFn() {
  if (parseInt(testVal.value) <= 0) {
    alert("0 미만은 담을 수 없습니다.");
    return; // 함수 종료
  }
  testVal.value = --testVal_int;
}
