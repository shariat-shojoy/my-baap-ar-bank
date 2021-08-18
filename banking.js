document.getElementById('deposite-button').addEventListener('click',function(){
    // chapter-1 deposite box
    const deposite=document.getElementById('deposite')
    const depositeText=deposite.value;
    const depositeAmount=parseFloat(depositeText)
    // chapter-2 total deposite
    const previousDeposite= document.getElementById('previous-deposite')
    const previousDepositeText= previousDeposite.innerText
    const previousDepositeAmount=parseFloat(previousDepositeText)
    

    const totalDeposite= depositeAmount+previousDepositeAmount;
    previousDeposite.innerText=totalDeposite;
    
    // totalBalance
    const previousTotal= document.getElementById('previous-total')
    const previousTotalText=previousTotal.innerText
    const previousTotalAmount= parseFloat(previousTotalText)


    const totalBalance= previousTotalAmount+ depositeAmount;
    previousTotal.innerText=totalBalance;


    // clear box
    deposite.value='';

})

// withdraw section


// chapter1 withdraw box
document.getElementById('withdraw-button').addEventListener('click',function(){
    const newWidthdraw=document.getElementById('withdraw');
    const newWidthdrawText=newWidthdraw.value;
    const newWidthdrawAmount=parseFloat(newWidthdrawText)

    const previousWidthdraw=document.getElementById('previous-widthdraw')
    const previousWidthdrawText=previousWidthdraw.innerText;
    const previousWidthdrawAmount=parseFloat(previousWidthdrawText);

    const totalWithdraw=newWidthdrawAmount+previousWidthdrawAmount;

    previousWidthdraw.innerText=totalWithdraw;

    const previousTotal= document.getElementById('previous-total')
    const previousTotalText=previousTotal.innerText
    const previousTotalAmount= parseFloat(previousTotalText)  


    const updatedTotal= previousTotalAmount-newWidthdrawAmount;
    previousTotal.innerText=updatedTotal;

    newWidthdraw.value='';

})