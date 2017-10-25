function setUpVars() {

    thirtyOneDays = ["January", "March", "May", "July", "August", "October", "December"];
    thirtyDays = ["April", "June", "September", "November"];
    monthBox = document.getElementById("selectMonth");
    dayBox = document.getElementById("selectDay");

    signDayArray = [20, 18, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
    signNameArray = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
}


function populateDaySelectBox() {

    var monthBoxElement = monthBox.options[monthBox.selectedIndex].textContent;
    console.log(monthBox.value);
    var correctList;


    console.log(dayBox.options);

    if (thirtyOneDays.indexOf(monthBoxElement) != -1) {
        correctList = new Array(31);
    } else if (thirtyDays.indexOf(monthBoxElement) != -1) {
        correctList = new Array(30);
    } else {
        correctList = new Array(28);
    }
    dayBox.options.length = 0;
    var firstEl = document.createElement("option");
    firstEl.textContent = "Choose Day!--";
    firstEl.value = 0;
    dayBox.appendChild(firstEl);
    for (var i = 1; i <= correctList.length; i++){
        var newOpt = String(i);
        var el = document.createElement("option");
        el.textContent = newOpt;
        el.value = i;
        dayBox.appendChild(el);

        //document.getElementById("dayBox").innerHTML += "<option value='" + i+1 + " '>" + i+1 + "</option>";
    }

}



function onSubmit() {
    var userSign = determineSign(dayBox.value, monthBox.value);
    var userHoroscope = determineHoroscope(userSign);
    var userImage = determineImage(userSign);
    var userName = document.getElementById("nameTextBox").value;

    document.getElementById("output").innerHTML = "Hi " + userName + ", your sign is " + userSign + ".";

}

function determineSign(dayValue, monthValue) {
    var sum = monthValue * 100 + dayValue;
    if(dayValue < signDayArray[monthValue - 1]) {
        return signNameArray[monthValue - 2]
    } else {
        return signNameArray[monthValue - 1];
    }
}

function determineHoroscope(sign) {

}

function determineImage(sign) {
    return sign + ".png";
}


