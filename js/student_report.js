var message = '';
var student;
var searchSubmit = document.getElementById('search-submit');
var inputText = document.getElementById('text');

function print(message) {
  var outputDiv = document.getElementById('theoutput');
  outputDiv.innerHTML = message;
}

function getStudentReport( student ) {
  var report = '<p>Student: ' + student.name + '</p>';
  report += '<p>Course of Study: ' + student.course + '</p>';
  report += '<p>Results: ' + student.results + '</p>';
  report += '<p>GPA: ' + student.gpa.toFixed(1) + '</p>';
  report += '<p>Grade: ' + student.grade + '</p>';
  return report;
}

searchSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  var search = inputText.value;
   for (var i = 0; i < students.length; i += 1) {
	student = students[i];
		if ( student.name === search ) {
		  message = getStudentReport( student );
		  print(message);
		}
  }
});
