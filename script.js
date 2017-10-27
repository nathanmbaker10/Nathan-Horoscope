//hi
function setUpVars() {

    thirtyOneDays = ["January", "March", "May", "July", "August", "October", "December"];
    thirtyDays = ["April", "June", "September", "November"];
    monthBox = document.getElementById("selectMonth");
    dayBox = document.getElementById("selectDay");
    nameTextBox = document.getElementById("nameTextBox");
    signDayArray = [20, 18, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
    signNameArray = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

    horoscopeArray = [" Troubles with friends and possibly a romantic partner over the past day or two could have you feeling unloved, " +
        "insecure, and emotionally blocked. All signs indicate that these feelings aren't accurate. Your friends haven't changed their attitude" +
        " toward you. There's still a lot of love directed your way. Whatever problems you may have had are just a bump in the road.",
        "You may have sniffles or a sore throat, possibly necessitating taking time off from work. This could be unwelcome, as it keeps you from going out on a date as well. " +
        "Try to keep your mind occupied with activities that don't tire you physically. And take some vitamin C!",





    ]
}


function populateDaySelectBox() {

    var monthBoxElement = monthBox.options[monthBox.selectedIndex].textContent;
    var correctNumber;

    if (thirtyOneDays.indexOf(monthBoxElement) != -1) {
        correctNumber = 31;
    } else if (thirtyDays.indexOf(monthBoxElement) != -1) {
        correctNumber = 30;
    } else {
        correctNumber = 28;
    }
    dayBox.options.length = 0;
    var firstEl = document.createElement("option");
    firstEl.textContent = "Choose Day!--";
    firstEl.value = 0;
    dayBox.appendChild(firstEl);
    for (var i = 1; i <= correctNumber; i++){
        var newOpt = String(i);
        var el = document.createElement("option");
        el.textContent = newOpt;
        el.value = i;
        dayBox.appendChild(el);

        //document.getElementById("dayBox").innerHTML += "<option value='" + i+1 + " '>" + i+1 + "</option>";
    }

}



function onSubmit() {
    console.log(dayBox.value);
    console.log(monthBox.value);

    if (nameTextBox.value == "" || nameTextBox.value == " " || dayBox.value == 0 || monthBox.value == 0) {
        document.getElementById("output").innerHTML = "You may have forgotten to correctly fill in one of the fields."
    } else {
        var userSign = determineSign(dayBox.value, monthBox.value);
        var userHoroscope = determineHoroscope(userSign);
        var userImage = determineImage(userSign);
        var userName = nameTextBox.value;

        document.getElementById("output").innerHTML = "Hi " + userName + ", your sign is " + userSign + ".";
        document.getElementById("image").innerHTML = "<image src = 'img/" + userImage + "'>"
    }
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


