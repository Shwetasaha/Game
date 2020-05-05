var f=0;
var count=0;

function start_timer() {
    var t=30;
    count=0;

    if(f==0)
    {
        var x=setInterval(function () {
            f=1;
            --t;
            document.getElementById("secs").innerHTML = t;
            if (t <= 0) {
                f=0;
                clearInterval(x);
                document.getElementById("secs").innerHTML = "Time Up";
                alert("Total Score: "+count);
            }
        }, 1000)
    }

    else
        alert("Game has already Started!!!");
};

function count_it() {
    if (f==1)
    {
        ++count;
        document.getElementById("score").innerHTML = "Score: "+count;
    }

    else
    {
        alert("Please Start the game");
    }
};