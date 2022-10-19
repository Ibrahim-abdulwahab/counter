window.addEventListener('load', function(){
    const number=document.getElementById("number")
    const increase=document.getElementById("increase")
    const decrease=document.getElementById("decrease")
    const reset=document.getElementById("reset")
    let score=0;

    const color=()=>{
        if (score<0){
            number.style.color="red"
        }
        else if (score>0){
            number.style.color="green"
        }
        else {number.style.color = "black"}
    }

    const addOne=()=>{
        score=score+1;
        number.innerHTML=score;
        color();
    }

    increase.addEventListener("click",addOne)

    const minusOne=()=>{
        score=score-1;
        number.innerHTML=score;
        color();
    }

    decrease.addEventListener("click",minusOne)
    

    const resetZero=()=>{
        score=0;
        number.innerHTML=score;
        color();
    }

    reset.addEventListener("click",resetZero)
})