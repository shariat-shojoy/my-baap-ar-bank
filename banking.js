function valueCalculation(input){
    const newAction=document.getElementById(input);
    const newActionText=newAction.value;
    const newActionAmount=parseFloat(newActionText)
    newAction.value='';
    return newActionAmount;
} 
function updatedTotal(inputid, amount){
    const previousTotal= document.getElementById(inputid)
    const previousTotalText=previousTotal.innerText
    const previousTotalAmount= parseFloat(previousTotalText)


    const totalBalance= previousTotalAmount+amount;
    previousTotal.innerText=totalBalance;

    
}

function updatebalance(input, isAdd){
   
    const previousWidthdraw=document.getElementById(input)
    const previousWidthdrawText=previousWidthdraw.innerText;
    const previousWidthdrawAmount=parseFloat(previousWidthdrawText);

    if(isAdd==true){
        const totalWithdraw=newWidthdrawAmount+previousWidthdrawAmount;
    }
    else{
        const totalWithdraw=newWidthdrawAmount-previousWidthdrawAmount;
    }

    previousWidthdraw.innerText=totalWithdraw;
}



document.getElementById('deposite-button').addEventListener('click',function(){
    // chapter-1 deposite box
     const depositeAmount=valueCalculation('deposite')
    
    updatedTotal('previous-deposite',depositeAmount )
    

    updatedTotal('previous-total',depositeAmount)
    // clear box
    deposite.value='';

})

// chapter1 withdraw box
document.getElementById('withdraw-button').addEventListener('click',function(){
    const newWidthdrawAmount= valueCalculation('withdraw')

    

    updatebalance('previous-Widthdraw',true)
    updatebalance('previous-total',false)
})