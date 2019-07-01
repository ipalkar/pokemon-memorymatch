$(document).ready(initiateApp);

var pictures = ["pichu.png", "cleffa.png", "azuril.png", "igglybuff.png", "munchlax.png", "teddiursa.png", "togepi.png", "wynaut.png", "happiny.png","pichu.png", "cleffa.png", "azuril.png", "igglybuff.png", "munchlax.png", "teddiursa.png", "togepi.png", "wynaut.png","happiny.png"];
var imgSrc = null;
var images = [];
var compareCard = [];
var matches = 0;
var attempts = 0;


function initiateApp(){
    $('.start').click(startGame);
    createCards();
    $('.card').click(clickBackOfCard);
    $('.backButton').click(back);
    $('.resetButton').click(reset);
}

function startGame(){
    $('.game').removeClass('hidden');
    $('.start').addClass('hidden');
    //$('.pikachu').addClass('hidden');
}

function back(){
    $('.start').removeClass('hidden');
    $('.game').addClass('hidden');
    $('.pikachu').removeClass('hidden');
}

function createCards(){
    shuffle(pictures);
    for (i=0; i<18;i++) {
        var cardContainer = $('<div></div>', {class: "cardContainer"});
        var card = $('<div></div>', {class: "card"});
        $(cardContainer).append(card);
        var cardFront = $('<div></div>', {class: "cardFront"});
        var cardBack = $('<div></div>', {class: "cardBack"});
        var cardFrontImage = $('<img>',{class: "cardFront",src:pictures[i]});
        var cardBackImage = $('<img>',{class: 'egg',src:'pokeball-icon-3.png'});
        $(card).append(cardFront);
        $(cardFront).append(cardFrontImage);
        $(card).append(cardBack);
        $(cardBack).append(cardBackImage);
        $('.cardArea').append(cardContainer);
    }
}

function clickBackOfCard(){

    if (compareCard[0] === this) {
        return;
    }
    compareCard.push(this);
    $(this).find('.cardBack').addClass('hidden');
    imgSrc = $(this).find('.cardFront img').attr("src");
    images.push(imgSrc);
    compareCards();
}

function hideWrongCards(){
    $(compareCard[0]).find('.cardBack').removeClass('hidden');
    $(compareCard[1]).find('.cardBack').removeClass('hidden');
    images = [];
    compareCard = [];
}


function turnCardsOn(){
    $('.card').click(clickBackOfCard);

}

function compareCards(){

    if (images.length == 2 && images[0] != images[1]){
        setTimeout(hideWrongCards,1000);
        $('.card').off();
        attempts++;
        $('.responseDiv').empty().append(attempts);
        setTimeout(turnCardsOn,1000);
    }
    else if(images[0]===images[1]){
        images =[];
        compareCard = [];
        attempts++;
        matches++;
        $('.responseDiv').empty().append(attempts);
        $('.responseMatches').empty().append(matches);
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function reset(){
    attempts=0;
    matches=0;
    $('.cardContainer').remove();
    createCards();
    $('.card').click(clickBackOfCard);
    $('.responseDiv').empty();
    $('.responseMatches').empty();
}

function youWin(){
    if(matches === 9){
    }
}

function youLose(){
    $('.card').off('click');
}