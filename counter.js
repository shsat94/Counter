const add=document.querySelector("#add");
    const sub=document.querySelector("#sub");
    const reset=document.querySelector("#reset");
    const count=document.querySelector("h1");
    sub.disabled=true;
    reset.disabled=true;
    
    add.addEventListener("click",()=>{
        count.innerText=Number(count.innerText)+1;
        sub.disabled=false;
        reset.disabled=false;

    })
    sub.addEventListener("click",()=>{
        count.innerText=Number(count.innerText)-1;
        count.innerText=='0'?(sub.disabled=true,reset.disabled=true):"";
    })
    reset.addEventListener("click",()=>{
        count.innerText="0";
        sub.disabled=true;
        reset.disabled=true;
    })