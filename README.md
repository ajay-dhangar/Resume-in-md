<link rel="stylesheet" type="text/css" href="./style.css">

<div class="container">
    <header>
      <h1>Ajay Dhangar</h1>
      <nav>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#leadership">Leadership Experience</a>
        <a href="#extracurricular">Extracurricular Activities</a>
        <a href="#dei">Diversity, Equity, and Inclusion Efforts</a>
        <a href="#work">Work Experience</a>
        <a href="#projects">Projects</a>
        <a href="#awards">Awards and Honors</a>
        <a href="#volunteer">Volunteer Experience</a>
        <a href="#references">References</a>
      </nav>
    </header>
    <main>
      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>Bachelor of Engineering, [Your University], [Your Graduation Year]</li>
          <li>Major: [Your Major]</li>
          <li>GPA: [Your GPA]</li>
        </ul>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>[Skill 1]</li>
          <li>[Skill 2]</li>
          <li>[Skill 3]</li>
        </ul>
      </section>
      <section id="leadership">
        <h2>Leadership Experience</h2>
        <ul>
          <li>[Leadership Position 1], [Organization], [Dates]
            <ul>
              <li>[Description of your role and accomplishments]</li>
            </ul>
          </li>
          <li>[Leadership Position 2], [Organization], [Dates]
            <ul>
              <li>[Description of your role and accomplishments]</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="extracurricular">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>[Extracurricular Activity 1], [Organization], [Dates]
            <ul>
              <li>[Description of your role and accomplishments]</li>
            </ul>
          </li>
          <li>[Extracurricular Activity 2], [Organization], [Dates]
            <ul>
              <li>[Description of your role and accomplishments]</li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="dei">
        <h2>Diversity, Equity, and Inclusion Efforts</h2>
        <ul>
          <li>[DEI Effort 1], [Organization], [Dates]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
      <li>[DEI Effort 2], [Organization], [Dates]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
    </ul>
  </section>
  <section id="work">
    <h2>Work Experience</h2>
    <ul>
      <li>[Job Title], [Company], [Dates]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
      <li>[Job Title], [Company], [Dates]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
    </ul>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>[Project Name 1], [Project Description], [GitHub Link]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
      <li>[Project Name 2], [Project Description], [GitHub Link]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
    </ul>
  </section>
  <section id="awards">
    <h2>Awards and Honors</h2>
    <ul>
      <li>[Award/Honor 1], [Organization/Institution], [Date]</li>
      <li>[Award/Honor 2], [Organization/Institution], [Date]</li>
    </ul>
  </section>
  <section id="volunteer">
    <h2>Volunteer Experience</h2>
    <ul>
      <li>[Volunteer Position 1], [Organization], [Dates]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
      <li>[Volunteer Position 2], [Organization], [Dates]
        <ul>
          <li>[Description of your role and accomplishments]</li>
        </ul>
      </li>
    </ul>
  </section>
  <section id="references">
    <h2>References</h2>
    <p>Available upon request.</p>
  </section>
</main>
</div>
<button id="color-btn">Change Color</button>
<script>
    const colorBtn = document.querySelector('#color-btn');
    const body = document.querySelector('body');

    colorBtn.addEventListener('click', function() {
      body.style.backgroundColor = randomColor();
    });

    function randomColor() {
      const colors = ['#ff7f50', '#87cefa', '#6495ed', '#ff69b4', '#ffa07a', '#00fa9a'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  </script>
    
