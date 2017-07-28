/* === practice problems === */

var minimum_duration = 0;
var number_practice = 2;
var scale = ["Not at all","Slightly","Moderately","Very","Extremely"];

var practice = []; // 3 problems

practice[0] = {
  type: "survey-likert",
  questions: ["<br><br>How attractive?"],
  labels: [scale],
  data: { status: "practice_bia" }
};

practice[1] = {
  type: "survey-likert",
  questions: ["<br><br>If white: How attractive?","If black: How attractive?<br><br>"],
  labels: [scale,scale],
  data: { status: "practice_context" }
};

var practice_block = {
  timeline: practice
};
