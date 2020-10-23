// alert('Welcome! You are going to test your hearing.\nPlay the notes first, then choose the right answer :)')

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");
var audio4 = document.getElementById("audio4");
var audio5 = document.getElementById("audio5");

let jawaban = ''

function playA() {
    result.innerHTML = 'RESULT'
    audio1.play();
    jawaban += 'a'
}
function playE() {
    result.innerHTML = 'RESULT'
    audio2.play();
    jawaban += 'e'
}
function playG() {
    result.innerHTML = 'RESULT'
    audio3.play();
    jawaban += 'g'
}
function playF() {
    result.innerHTML = 'RESULT'
    audio4.play();
    jawaban += 'f'
}
function playC() {
    result.innerHTML = 'RESULT'
    audio5.play();
    jawaban += 'c'
}

function klikJawaban(apa) {
    if (jawaban === apa) {
        result.innerHTML = 'You are a genius!! You guessed the right answer!'
        jawaban = ''
    } else{
        result.innerHTML = 'You are a tone deaf HAHAHA joking. It\'s okay, perfect pitch can be trained ;)'
        jawaban = ''
    }
}

var optionC = document.getElementById("c");
var optionD = document.getElementById("d");
var optionE = document.getElementById("e");
var optionF = document.getElementById("f");
var optionG = document.getElementById("g");
var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var result = document.getElementById("result");
