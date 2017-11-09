function setUpVars() {

    thirtyOneDays = ["January", "March", "May", "July", "August", "October", "December"];
    thirtyDays = ["April", "June", "September", "November"];
    monthBox = document.getElementById("selectMonth");
    dayBox = document.getElementById("selectDay");
    nameTextBox = document.getElementById("nameTextBox");
    signDayArray = [20, 18, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
    signNameArray = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];

    horoscopeArray = [
        "Don't get stuck doing just one thing today. The more varied your activity, the easier it will be for you to integrate the different pieces of the puzzle. This is a day to think big." +
        " The more you know, the greater an asset you'll be when it comes time to solve the biggest problems." +
        " Learn how to multitask effectively.",
        "You might be in a whirlwind today, and there will be information buzzing around asking you to do this and go there. You're the one most perfectly suited to deal with the tone of the day." +
        " Stay lively and upbeat. Don't get stuck on any one thing." +
        " Keep the energy moving. The answer will be right there waiting for you.",
        " Troubles with friends and possibly a romantic partner over the past day or two could have you feeling unloved, " +
        "insecure, and emotionally blocked. All signs indicate that these feelings aren't accurate. Your friends haven't changed their attitude" +
        " toward you. There's still a lot of love directed your way. Whatever problems you may have had are just a bump in the road.",
        "You may have sniffles or a sore throat, possibly necessitating taking time off from work. This could be unwelcome, as it keeps you from going out on a date as well. " +
        "Try to keep your mind occupied with activities that don't tire you physically. And take some vitamin C!",
        "You may have a lot of professional or personal calls to make today. emails could flood your inbox. A lot of people could vie for your attention." +
        " Your ego will receive a much-needed boost from all the acknowledgment." +
        " Don't be embarrassed or guilty. Everyone needs a pat on the back now and then. Relax and enjoy the spotlight!",
        "Recent study of philosophical or spiritual matters might inspire you to express your insights creatively." +
        " Whether you choose to write, make music, or paint pictures, you'll notice a difference in your style." +
        " This may not last, as it's at least partially due to what's on your mind now, but make the most of it today." +
        " You might produce quality work that surprises even you.",
        "Try not to read too much into other people's words today. You may have spent hours tearing apart every off-the-cuff remark. " +
        "You may build up a wild scenario in your head regarding what that person is thinking." +
        " Instead of trying to sneak up on the answer through the back door, try the direct approach. Simply ask your question.",
        " Long-term trends are coming to an important climax now. This dramatic period is highlighted by the added amount of information being thrown your way. " +
        "Try to make small adjustments to your direction that incorporate this new information. Be aware of the prevailing winds and your relationships will be much better off.",
        "Take a break from what you're doing. Look at what people are doing around you. " +
        "Check your plans in relation to those of others and see if there's a way you can combine forces and kill more birds with fewer stones. Cooperation instead of competition is the lesson that needs to be emphasized today. " +
        "The better you learn this today, the better off you'll be tomorrow.",
        "Get involved with the energy of today so you don't get left out of the loop. Your contribution to the group is important. You should foster positive relationships among all parties." +
        " Think big. You can do no wrong by expanding your mind out into the minds of others." +
        " Make a commitment to quench your thirst for knowledge and freedom through information.",
        "Get involved with the energy of today so you don't get left out of the loop. Your contribution to the group is important. You should foster positive relationships among all parties." +
        " Think big. You can do no wrong by expanding your mind out into the minds of others." +
        "Make a commitment to quench your thirst for knowledge and freedom through information.",
        "Join others before you make your big travel plans. The smallest idea can be quickly transformed into a huge plan of attack, thanks to the prevailing winds of the day." +
        " There's a light, communicative feeling in the air encouraging cooperation." +
        " If you find that people aren't chiming into the group effort, you may want to excuse them from the group."
    ];

    birthDayHoroscopes = [
        "Love will probably be on your mind most of today, so give your heart your full attention. You're having trouble communicating with a loved one now, so try to be patient." +
        " He moves left and you move right." +
        " You move left and she moves right. Each time you bump into each other. Let the other person make the first move.",
        "Issues regarding love and romance are in your favor. There's a strong force spurring you to take action. Heed this helpful energy. " +
        "Feel free to display yourself openly in the social arena." +
        " Talk among friends could be rewarding for you now. All sorts of connections are favored for you today.",
        "Tension in the romance department may arise for you. You want to get things started in a relationship that's important to you, yet something always seems to stand in the way of the plan." +
        " Instead of trying to sidestep your way into the picture, take a direct approach." +
        " If you don't try, you're just as bad off as if you'd tried and failed. Go for it.",
        "You may feel the urge to put your loved one on a pedestal today. You want to see him or her as the perfect mate for you." +
        " You're willing to go to great lengths to bring this person pleasure. " +
        "You're wearing your rose-colored glasses, so very little will convince you of anything but the fact that things are perfect and beautiful.",
        "Romance isn't going perfectly for you. Things may be a bit unclear in this realm. Events may crop up today that will make it hard for you to ignore the issue any longer. " +
        "Communication is key to helping you sort through the feelings associated with these issues. Don't be too judgmental in your approach.",
        "Love and romance are most certainly in the cards today. Play the hand you're dealt and you should come away from the table victorious." +
        " There's some transformation that may take place regarding issues of the heart. " +
        "Don't compromise yourself in any way. Settle for nothing but the best. This is a day to shine.",
        "Issues regarding romance could be a big part of the picture today. The scales could tip either way in terms of your success at this game. The decision is up to you. " +
        "You're probably better off keeping things light and entertaining. Reveal the scope of your passionate and powerful emotions on another day.",
        "Matters of the heart are in your favor today. You should prepare for a day full of social activities and good conversation. Your creative spirit may also be heightened. " +
        "You can't go wrong picking the right item in a clothing store or flea market. Your taste for the elegant is impeccable, so feel free to indulge.",
        "You might focus on romance today, but it's possible that you're having problems figuring out a way to express your feelings." +
        " There's power influencing the scene, and certainly no shortage of passion. " +
        "You might find that there's a bit of superficiality to the situation that makes it hard to commit with all of your energy.",
        "When it comes to issues regarding romance, don't hold back today. Things are working in your favor. You shouldn't hesitate to act forcefully and confidently. Show others that you're serious." +
        " Don't back down as things heat up even more." +
        " This is a sign that things are progressing in your favor and you shouldn't mistake this intensity for anything but true passion.",
        "The center of your power might find it difficult to commit to anything today. " +
        "Issues regarding love and romance could arise, and you may feel the need to start something moving in this department." +
        " You may be indecisive about which way to go. Spruce up and get out in the social arena. You can let someone else take the lead from there.",
        "In matters involving love and romance, things might get a little sticky today." +
        " You might want to charge ahead with a plan, while a close partner wants to sit, discuss, and work things out together." +
        " Tempers might flare. You'd do well to be ready to compromise. A hotheaded approach will do more harm than good."
    ];

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
        var horoscopeObject = determineHoroscope(userSign);
        var userHoroscope;
        if (horoscopeObject["birthday"]) {
            userHoroscope = "<p>It's your Birthday! HBD Bro!</p>" + horoscopeObject["horoscope"];
        } else {
            userHoroscope = horoscopeObject["horoscope"];
        }

        var userImage = determineImage(userSign);
        var userName = nameTextBox.value;

        document.getElementById("output").innerHTML = "Hi " + userName + ", your sign is " + userSign + "." + "<p>" + userHoroscope + "</p>";
        document.getElementById("image").innerHTML = "<image src = 'img/" +  userImage + "' " + "width = '400' height = '400'" + ">"
    }
}

function determineSign(dayValue, monthValue) {
    if(dayValue < signDayArray[monthValue - 1]) {
        if (monthValue - 2 == -1) {
            return "Capricorn"
        } else {
            return signNameArray[monthValue - 2]
        }
    } else {
        return signNameArray[monthValue - 1];
    }
}

function determineHoroscope(sign) {
    var date = new Date();
    var currentMonth = date.getMonth() + 1;
    var currentDate = date.getDate();

    if (monthBox.value == currentMonth && dayBox.value == currentDate) {
        return {
            "horoscope": birthDayHoroscopes[signNameArray.indexOf(sign)],
            "birthday": true
        };
    } else {
        return {
            "horoscope": horoscopeArray[signNameArray.indexOf(sign)],
            "birthday": false
        };
    }
}

function determineImage(sign) {
    return sign + ".png";
}


