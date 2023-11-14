       // 문제. 버튼을 눌렀을 때, 웹 페이지의 숫자가 변하는 로직
        // 조건) 감소버튼 클릭했을 때, 0 밑으로는 떨어지지 않게 (음수 출력X)

        // 1. 사용하고 싶은 HTML 태그에 접근 (p, button)
        // 2. 각 버튼에 이벤트를 정의 
        // 3. 결과값은 p태그에 출력되게 한다.

        let p_tag = document.getElementById("p-tag")
        let btn_plus = document.getElementById("btn-plus");
        let btn_minus = document.getElementById("btn-minus")
 
        let num = Number(p_tag.textContent)
 
        btn_plus.addEventListener("click", function() {
 
            p_tag.textContent = num += 1
        })
 
        btn_minus.addEventListener("click", function() {
 
             if(num > 0 ){
             p_tag.textContent = num -= 1
             }else{
             num == 0
             alert("더 이상 내려갈곳이 없어. 돌아가.")
             }
         })