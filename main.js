

window.onload = function () {
    initial();
}

  

function initial() {
    alert("Load Complete!!");

    var mainInnerHtml = document.getElementById('mainInnerHtml');

    var buttonHome = document.getElementById('buttonHome');
    var buttonResume = document.getElementById('buttonResume');
    var buttonHobbies = document.getElementById('buttonHobbies');
    var buttonWorks = document.getElementById('buttonWorks');
    var buttonTest = document.getElementById('buttonTest');


    buttonHome.addEventListener('click', function () {
        buttonClicked(buttonHome.id)
    });

    buttonResume.onclick = function () {
        buttonClicked(buttonResume.id)
    };

    buttonHobbies.onclick = function () {
        buttonClicked(buttonHobbies.id)
    };

    buttonWorks.onclick = function () {
        buttonClicked(buttonWorks.id)
    };

    buttonTest.onclick = function () {
        alert("Fuck");
    }

    alert("Initial Complete!!");
}


function buttonClicked(id) {
    switch (id) {
        default:
            alert("id not include");
            break;

        case "buttonHome":
            alert("buttonHome clicked");
            var mainInnerHtml = document.getElementById('subContent');
            mainInnerHtml.innerHTML = "";
            break;

        case "buttonResume":
            alert("buttonResume clicked");
            //Load Dynamic Test Page(as html file)
            document.getElementById("subContent").innerHTML = '<object type="text/html" height="600" width="1000" data="dynamicLoadTestPage.html" ></object>';       
            break;

        case "buttonHobbies":
            alert("buttonHobbies clicked");
            break;

        case "buttonWorks":
            alert("buttonWorks clicked");
            break;
    }
}