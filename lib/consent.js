/* define welcome message block */
var study_consent = [];

/* general intro */
study_consent[0] = {
  type: "text",
  text: "<br><p>Welcome to this study!</p>" +
  "<p>Press any key to continue. </p>"
};

/* consent trial */
study_consent[1] = {
  type: "text",
  cont_key: "y",
  text: "<div id='consent-text'>" +
"<p style='text-align:center;'><strong>THE UNIVERSITY OF ???? &ndash; Department of Psychology</strong><br><strong>Principal Investigator: Dr. John Doe</strong></p>" +
"<p>We are asking you to participate in a research study. You may discontinue participation at any time by closing the browser window or the program to withdraw from the study. <br></div>" +
"<br>" +
"<strong><p>If you agree that you: " +
"<p>Don't have any questions about this information&#59;</p>" +
"<p>Understand the information that has been provided to you&#59; and</p>" +
"<p>You consent to participate in this study&#59;</p><p>Then press &quot;<b>y</b>&quot; key to begin.</p></strong>" //,
  /*data: {  worker_id: worker_id, worker_ip: worker_ip, worker_consent: 'yes',
    user_agent: navigator.userAgent, platform: navigator.platform, language: navigator.language }*/
};

var consent_block = {
  timeline: study_consent
};
