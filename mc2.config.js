var ditaa = require('mc2/dist/plugins/chewDitaa');
var dot = require('mc2/dist/plugins/chewDot');
var chewMathJax = require('mc2/dist/plugins/chewMathJax');
var chewDividers = require('mc2/dist/plugins/chewDividers');
var chewHighlight = require('mc2/dist/plugins/chewHighlight');
var chewHide = require('mc2/dist/plugins/chewHide');

module.exports = {
    earlyChewers: [
        chewHide.early,
        chewMathJax.early,
        ditaa.chew,
        dot.chew,
        chewHighlight.early,
        chewDividers.early
    ],
    chewers: [
        chewDividers.late,
        chewMathJax.late,
        chewHighlight.late
    ],
    delivery: "Edument Talk Day"
};
