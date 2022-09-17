window.addEventListener('load', function(){
    const number=document.getElementById("number")
    const increase=document.getElementById("increase")
    const decrease=document.getElementById("decrease")
    const reset=document.getElementById("reset")
    let score=0;
    const addOne=()=>{
        score=score+1;
        number.innerHTML=score;
    }

    increase.addEventListener("click",addOne)

    const minusOne=()=>{
        score=score-1;
        number.innerHTML=score;
    }

    decrease.addEventListener("click",minusOne)
    

    const resetZero=()=>{
        score=0;
        number.innerHTML=score;
    }

    reset.addEventListener("click",resetZero)
})