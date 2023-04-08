document.getElementById('deposit-btn').addEventListener('click', function(){
    const dpFiled = document.getElementById('deposit-filed');
    const dpFiledValue = dpFiled.value;
    const parseFloatDpValue = parseFloat(dpFiledValue);

    dpFiled.value = '';

    if (isNaN(parseFloatDpValue)){
        alert('PLEASE PROVIDE A VALID NUMBER');
        return;
    }

    const dpAmount = document.getElementById('deposit-amount');
    const dpAmountInnerText = dpAmount.innerText;
    const parseFloatDpInnerText = parseFloat(dpAmountInnerText);
    const totalDeposit = parseFloatDpInnerText + parseFloatDpValue; 
    dpAmount.innerText = totalDeposit;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const parseFloatBalanceTotal = parseFloat(balanceTotalInnerText);
    const grandTotalBalance = parseFloatBalanceTotal + parseFloatDpValue;
    balanceTotal.innerText = grandTotalBalance;
})


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const wdFiled = document.getElementById('withdraw-filed');
    const wdFiledInnerValue = wdFiled.value;
    const wdFiledParseFloar = parseFloat(wdFiledInnerValue);

    wdFiled.value = '';

    if (isNaN(wdFiledParseFloar)){
        alert('PLEASE PROVIDE A VALID NUMBER');
        return;
    }

    const wdAmount = document.getElementById('withdraw-amount');
    const wdAmountInnerText = wdAmount.innerText;
    const wdAmountParseFloat = parseFloat(wdAmountInnerText);

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalInnerText = balanceTotal.innerText;
    const parseFloatBalanceTotal = parseFloat(balanceTotalInnerText);

    if(wdFiledParseFloar > parseFloatBalanceTotal){
        alert('YOUR BALANCE IS NOT SUFFICIENT');
        return;
    }
   
    const totalWithdraw = wdAmountParseFloat + wdFiledParseFloar;
    wdAmount.innerText = totalWithdraw;

    const grandTotalBalance = parseFloatBalanceTotal - wdFiledParseFloar;
    balanceTotal.innerText = grandTotalBalance;
})