//login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transition = document.getElementById('transition');
    transition.style.display = "block";
})

//Deposte button event handler
const depositeBtn = document.getElementById('addDeposite');
depositeBtn.addEventListener('click', function(){
    const depositeNumber = getInputNumber('depositeAmount');

    updateSpanText('currentDeposite', depositeNumber); 
    updateSpanText('currentBalance', depositeNumber);

    document.getElementById('depositeAmount').value = "";
}) 

//Withdraw event handler

const withdrawBtn = document.getElementById("addwithdraw");
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1* withdrawNumber);

    document.getElementById('withdrawAmount').value = "";
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

function updateSpanText(id, depositeNumber) {
    const current = document.getElementById(id).innerText;
    const currentnumber = parseFloat(current);
    const total = depositeNumber + currentnumber;
    document.getElementById(id).innerText = total;
}