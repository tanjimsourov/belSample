const boxes = document.getElementById('boxes')

function clockInit(){
    var date = new Date();
    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var clockDivs = [document.getElementById("hour"), document.getElementById("min"), document.getElementById("sec")];
    
    var hour = time[1]/2+time[0]*30;
    
    clockDivs[0].style.transform="rotate("+ hour +"deg)";
    clockDivs[1].style.transform="rotate("+ time[1]*6 +"deg)";
    clockDivs[2].style.transform="rotate("+ time[2]*6 +"deg)";
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getCookie() {
    const cookies = document.cookie.split(';');
    const cookieArray = [];

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        cookieArray.push({ name, value });
    }

    return cookieArray;
}

setCookie('Dagopbrengst', '107,73 kWh');
setCookie('Maandopbrengst', '1.972,05 kWh');
setCookie('Jaaropbrengst', '28,37 MWh');

const cookies = getCookie();

function addBox(name, value){
    const html = `<div class="box">
    <h3 class="box-title"> ${name}</h3>
    <div class="details">
        <img class="box-image" src="assets/img/solar.png" alt="">
        <p class="box-subtitle">${value}</p>
    </div>
</div>`

boxes.innerHTML += html 

}

window.onload = function() {
    // Load clockInit function
    clockInit();
    // Call clockInit function at 1 second interval
    setInterval(clockInit, 1000);

    cookies.forEach( cookie => {
        addBox(cookie.name, cookie.value)
    } )

};