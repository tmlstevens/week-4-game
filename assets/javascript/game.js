$(document).ready(function() {

// Initialize the variables
var winMessage = "You WON!!  But can you do it again?";
var loseMessage = "Try not to SUCK in the next game!!";
var wins = 0;
var losses = 0;
var goal = Math.floor((Math.random() * 120) + 19);
var score = 0;
var diamond = Math.floor((Math.random() * 12) + 1);
var sapphire = Math.floor((Math.random() * 12) + 1);
var emerald = Math.floor((Math.random() * 12) + 1);
var ruby = Math.floor((Math.random() * 12) + 1);

// Run game() on page load and after each win/loss
function game() {
    $("#message").empty();
    goal = Math.floor((Math.random() * 120) + 19);
    score = 0;
    diamond = Math.floor((Math.random() * 12) + 1);
    sapphire = Math.floor((Math.random() * 12) + 1);
    emerald = Math.floor((Math.random() * 12) + 1);
    ruby = Math.floor((Math.random() * 12) + 1);
    $("#goal").html(goal);
    $("#score").html(score);
};
game();

// Run check() every time crystal is clicked
function check() {
    if (score == goal) {
        wins++;
        $("#wins").html(wins);
        $("#score").html(score);
        $("#message").html(winMessage);
        setTimeout(function() {
            game();
        }, 3000);
    }
    else if (score > goal) {
        losses++;
        $("#losses").html(losses);
        $("#score").html(score);
        $("#message").html(loseMessage);
        setTimeout(function() { 
            game();
        }, 3000);
    }
};

// Updates score and initiates check() on every click
$("#diamond").click(function() {
    score += diamond;
    $("#score").html(score);
    check();
});
$("#sapphire").click(function() {
    score += sapphire;
    $("#score").html(score);
    check();
});
$("#emerald").click(function() {
    score += emerald;
    $("#score").html(score);
    check();
});
$("#ruby").click(function() {
    score += ruby;
    $("#score").html(score);
    check();
});

// Expand/collapse for game instructions
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

});

