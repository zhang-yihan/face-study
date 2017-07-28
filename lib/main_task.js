/* === main_task problems === */

var minimum_duration = 0;
var number_trial = 2;
var scale = ["Not at all","Slightly","Moderately","Very","Extremely"];

var main_task = []; // 3 problems

main_task[0] = {
  type: "survey-likert",
  questions: ["<br><br>How attractive?"],
  labels: [scale],
  data: { status: "main_task_bia" }
};

main_task[1] = {
  type: "survey-likert",
  questions: ["<br><br>If white: How attractive?","If black: How attractive?<br><br>"],
  labels: [scale,scale],
  data: { status: "main_task_context" }
};

var main_task_block = {
  timeline: main_task
};
