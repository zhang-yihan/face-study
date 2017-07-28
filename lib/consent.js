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
"<p>We are asking you to participate in a research study. This form will give you some information about the study. Please read the form carefully and feel free to direct any questions that you may have to the researchers using the contact information provided below.<br><br>" +
"<strong>1. Project Description</strong><br> (a) The purpose of this study is to learn more about human perception. In this study, you will be asked to rate face images, as well as answer a couple of demographic questions.<br> (b) The estimated time to complete this study is approximately 15 minutes.<br> (c) The research is being conducted with the goal of publication in academic journals&nbsp;and presentation at academic conferences.<br> (d) For participating in this study, you will be compensated with $1.50 deposited to your Amazon payments account.<br><br>" +
"<strong>2. Risks and Benefits</strong><br> The risks to your participation in this online study are those associated with basic computer tasks, including boredom, fatigue, or mild stress. As with all research, there is a chance that confidentiality of the information we collect from you could be breached. We will take steps to minimize this risk, as discussed in more detail below in this form. By participating in this research, you will (a) experience participating in a psychology study and (b) further our scientific understanding.<br><br>" +
"<strong>3. Confidentiality</strong><br> (a) Your personal contact information is in the protected database maintained by Amazon Mechanical Turk. Your Mechanical Turk Worker ID and the unique ID assigned to you in Qualtrics (the software we use to collect your survey answers) will be linked to your research data. Please be aware that any work performed on Amazon MTurk can potentially be linked to information about you on your Amazon public profile page, depending on the settings you have for your Amazon profile. We will not be accessing any personally identifying information about you that you may have put on your Amazon public profile page.<br>" +
" (b) Note that Amazon Mechanical Turk and Qualtrics have specific privacy policies of their own. You should be aware that these web services may be able to link your responses to your ID in ways that are not bound by this consent form and the data confidentiality procedures used in this study, and if you have concerns you should consult these services directly.<br><br>" +
"<strong>4. Contacts</strong><br> (a) If you have any questions or concerns about this study, you may contact Kyoung whan Choe at kywch@uchicago.edu or Professor Marc Berman at bermanmturk@gmail.com<br> (b) If you have any questions about your rights as a participant in this research, you may contact the following office at the University of Chicago:<br>" +
"Social and Behavioral Science Institutional Review Board<br>University of ????<br>Phone: (999) 123-4567, E-mail: irb@????.edu<br></p>" +
"<strong>5. Subject's Rights</strong><br>Your participation is voluntary. You may discontinue participation at any time by closing the browser window or the program to withdraw from the study. Partial data will not be analyzed.<br></div>" +
"<br>" +
"<strong><p>If you agree that you:</p><p>Are at least 18 years old&#59;</p>" +
"<p>Don't have any questions about this information&#59;</p>" +
"<p>Understand the information that has been provided to you&#59; and</p>" +
"<p>You consent to participate in this study&#59;</p><p>Then press &quot;<b>y</b>&quot; key to begin.</p></strong>" //,
  /*data: {  worker_id: worker_id, worker_ip: worker_ip, worker_consent: 'yes',
    user_agent: navigator.userAgent, platform: navigator.platform, language: navigator.language }*/
};

var consent_block = {
  timeline: study_consent
};
