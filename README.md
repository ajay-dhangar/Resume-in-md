<link rel="stylesheet" type="text/css" href="./style.css">

<h2>Education</h2>
<p>Bachelor of Engineering, [Your University], [Your Graduation Year]</p>
<p>Major: [Your Major]</p>
<p>GPA: [Your GPA]</p>

<!-- Add the following HTML code to your README.md file -->
<h2>Skills</h2>
<button id="skills-button">Show</button>
<div id="skills-content">
  <p>- [Skill 1]</p>
  <p>- [Skill 2]</p>
  <p>- [Skill 3]</p>
</div>

<!-- Add the following JavaScript code to your README.md file -->
<script>
  // Get references to the button and content elements
  const skillsButton = document.querySelector('#skills-button');
  const skillsContent = document.querySelector('#skills-content');

  // Hide the content initially
  skillsContent.style.display = 'none';

  // Add a click event listener to the button
  skillsButton.addEventListener('click', function() {
    // Toggle the visibility of the content
    if (skillsContent.style.display === 'none') {
      skillsContent.style.display = 'block';
      skillsButton.textContent = 'Hide';
    } else {
      skillsContent.style.display = 'none';
      skillsButton.textContent = 'Show';
    }
  });
</script>
