<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>YOUR NAME — Academic Profile</title>
  <meta name="description" content="Academic profile of Subas Ali: research interests, publications, teaching, and contact." />

  <!-- Typewriter Font -->
  <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg: #ffffff;
      --fg: #0a0a0a;
      --muted: #555;
      --card: #f7f7f7;
      --max: 860px;
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --bg: #0b0c0f;
        --fg: #f1f1f1;
        --muted: #a3a3a3;
        --card: #14161b;
      }
    }
    body {
      font-family: "Courier Prime", "Courier New", monospace;
      background: var(--bg);
      color: var(--fg);
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }
    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .wrap {
      max-width: var(--max);
      margin: 0 auto;
      padding: 40px 18px 80px;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      flex-wrap: wrap;
      gap: 12px;
    }
    .name {
      font-size: 26px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
    nav a {
      margin-left: 16px;
      text-decoration: none;
      border-bottom: 1px dashed currentColor;
      padding-bottom: 2px;
    }
    nav a:hover {
      border-bottom: 2px solid currentColor;
    }
    h1 {
      font-size: 36px;
      margin-bottom: 6px;
    }
    h2 {
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 0.1em;
      margin-top: 40px;
      margin-bottom: 10px;
    }
    .card {
      background: var(--card);
      padding: 14px 16px;
      border-radius: 12px;
      margin-bottom: 20px;
      border: 1px solid rgba(127,127,127,.2);
    }
    .list {
      padding-left: 1.2rem;
    }
    footer {
      border-top: 1px dashed rgba(127,127,127,.3);
      margin-top: 50px;
      padding-top: 12px;
      color: var(--muted);
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }
    @media (max-width: 700px) {
      header {
        flex-direction: column;
        align-items: flex-start;
      }
      nav a { margin: 0 10px 0 0; }
      h1 { font-size: 28px; }
    }
  </style>
</head>

<body>
<div class="wrap">

  <header>
    <div class="name">YOUR NAME</div>
    <nav>
      <a href="#about">About</a>
      <a href="#research">Research</a>
      <a href="#publications">Publications</a>
      <a href="#teaching">Teaching</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="intro">
    <h1>YOUR TITLE / POSITION</h1>
    <p><b>Institution:</b> YOUR DEPARTMENT, UNIVERSITY</p>
    <p><b>Email:</b> <a href="mailto:YOUR.EMAIL@DOMAIN.TLD">YOUR.EMAIL@DOMAIN.TLD</a></p>
    <p><b>Research Areas:</b> FIELD A · FIELD B · FIELD C</p>
  </section>

  <section id="about">
    <h2>About</h2>
    <div class="card">
      <p>
        Write a short academic biography — your research focus, teaching areas, and intellectual interests.
        Mention current projects or collaborations, and note key themes or disciplines you engage with.
      </p>
      <p>
        <b>Education:</b><br>
        PhD, University Name, Year<br>
        MSc, University Name, Year
      </p>
    </div>
  </section>

  <section id="research">
    <h2>Research</h2>
    <div class="card">
      <p><b>Current Project:</b> "Project Title" — one sentence description of your research focus or question.</p>
      <p><b>Keywords:</b> Method, Theme, Region, Theory</p>
    </div>
  </section>

  <section id="publications">
    <h2>Selected Publications</h2>
    <div class="card">
      <ol class="list">
        <li>YOUR NAME (2025). “Paper Title.” <i>Journal Name</i>, Volume(Issue), pp–pp. <a href="#">DOI</a></li>
        <li>YOUR NAME, COAUTHOR (2024). “Book Chapter.” In <i>Book Title</i>, Publisher.</li>
        <li>YOUR NAME (2023). “Conference Paper.” <i>Conference Name</i>, Location.</li>
      </ol>
    </div>
  </section>

  <section id="teaching">
    <h2>Teaching</h2>
    <div class="card">
      <ul class="list">
        <li><b>Course Name</b> — role, term, and brief description.</li>
        <li><b>Course Name</b> — role, term, and brief description.</li>
      </ul>
    </div>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <div class="card">
      <p><b>Email:</b> <a href="mailto:YOUR.EMAIL@DOMAIN.TLD">YOUR.EMAIL@DOMAIN.TLD</a></p>
      <p><b>Office:</b> Room #, Building, Campus, City</p>
      <p><b>Links:</b> 
        <a href="https://scholar.google.com/">Google Scholar</a> · 
        <a href="https://orcid.org/">ORCID</a> · 
        <a href="https://linkedin.com/">LinkedIn</a>
      </p>
    </div>
  </section>

  <footer>
    <div>© <span id="year"></span> YOUR NAME</div>
    <div>Last updated: <span id="lastmod"></span></div>
  </footer>

</div>

<script>
  // Auto year and last modified
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastmod').textContent = new Date(document.lastModified).toISOString().slice(0,10);
</script>

</body>
</html>
