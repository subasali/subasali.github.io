<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Subas Ali — Academic Profile</title>
  <meta name="description" content="Academic profile of Subas Ali: Research interests, Publications, Teaching, Contact." />
  <meta name="theme-color" content="#0b0c0f" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">

  <!-- Typewriter-style font -->
  <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">

  <style>
    :root{
      --bg:#ffffff; --fg:#0a0a0a; --muted:#555; --link:#0a0a0a; --card:#f8f8f8; --accent:#0a0a0a; --max:860px;
      --br:14px;
    }
    @media (prefers-color-scheme: dark){
      :root{
        --bg:#0b0c0f; --fg:#e8e8e8; --muted:#a3a3a3; --link:#e8e8e8; --card:#14161b; --accent:#e8e8e8;
      }
    }

    /* Global */
    html, body { margin:0; padding:0; background:var(--bg); color:var(--fg); }
    body {
      font-family:"Courier Prime", "Courier New", Courier, monospace;
      line-height:1.6; font-size:16px;
    }
    a{ color:var(--link); text-decoration:underline; text-underline-offset:3px; }
    a:hover{ text-decoration-thickness:2px; }
    .wrap{ max-width:var(--max); margin:0 auto; padding:28px 18px 80px; }

    /* Header */
    header{ display:flex; justify-content:space-between; align-items:flex-end; gap:16px; margin:0 0 28px; }
    .name{ font-weight:700; font-size:clamp(22px, 3.6vw, 28px); letter-spacing:.5px; }
    .nav a{ margin-left:14px; text-decoration:none; border-bottom:1px dashed currentColor; padding-bottom:2px; }
    .nav a:hover{ border-bottom:2px solid currentColor; }

    /* Hero */
    .hero{ display:grid; grid-template-columns: 1.2fr .8fr; gap:22px; align-items:start; margin:16px 0 18px; }
    .hero h1{ font-size:clamp(28px, 6vw, 44px); line-height:1.15; margin:.2rem 0 .6rem 0; }
    .hero .sub{ color:var(--muted); margin:.2rem 0 1rem; }
    .box{ background:var(--card); border:1px solid rgba(127,127,127,.25); border-radius:var(--br); padding:14px 14px 12px; }

    .chips{ display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
    .chip{ border:1px dashed rgba(127,127,127,.6); padding:6px 10px; border-radius:999px; font-size:13px; }

    /* Sections */
    section{ margin:44px 0 12px; }
    h2{ font-size:18px; text-transform:uppercase; letter-spacing:.1em; margin:0 0 8px; }
    .grid-2{ display:grid; grid-template-columns:1fr 1fr; gap:18px; }
    .list{ margin:0; padding-left:1.2rem; }
    .list li{ margin:.25rem 0; }

    /* Cards / blocks */
    .card{ background:var(--card); border:1px solid rgba(127,127,127,.25); border-radius:var(--br); padding:14px; }
    .kv{ margin:0; padding:0; list-style:none; }
    .kv li{ display:flex; gap:10px; }
    .kv b{ min-width:120px; }

    /* Footer */
    footer{ margin:52px 0 0; padding-top:14px; border-top:1px dashed rgba(127,127,127,.35); color:var(--muted); display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; }

    /* Responsive */
    @media (max-width:860px){
      .hero{ grid-template-columns:1fr; }
      .grid-2{ grid-template-columns:1fr; }
      header{ flex-direction:column; align-items:flex-start; }
      .nav a{ margin-left:0; margin-right:12px; }
    }

    /* Print */
    @media print{
      a{ text-decoration:none; }
      .nav, .chips, #copyEmail{ display:none !important; }
      .wrap{ padding:0; }
      footer{ border-top:none; }
    }
  </style>

  <!-- Schema.org Person for rich results -->
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"YOUR NAME",
    "jobTitle":"YOUR TITLE (e.g., PhD Candidate / Lecturer)",
    "affiliation":{"@type":"Organization","name":"YOUR INSTITUTION"},
    "email":"mailto:YOUR.EMAIL@DOMAIN.TLD",
    "url":"https://YOUR-DOMAIN.TLD",
    "sameAs":[
      "https://scholar.google.com/citations?user=YOURID",
      "https://orcid.org/YOUR-ORCID",
      "https://www.semanticscholar.org/author/YOURID"
    ]
  }
  </script>
</head>

<body>
  <div class="wrap">

    <header>
      <div class="name">YOUR NAME</div>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#publications">Publications</a>
        <a href="#teaching">Teaching</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero">
      <div>
        <h1>YOUR TITLE<br>YOUR INSTITUTION</h1>
        <p class="sub">Research areas: TOPIC A · TOPIC B · TOPIC C</p>

        <div class="box">
          <ul class="kv">
            <li><b>Affiliation</b> <span>DEPT / SCHOOL, UNIVERSITY</span></li>
            <li><b>Location</b> <span>CITY, COUNTRY</span></li>
            <li><b>Email</b> <span><a id="email" href="mailto:YOUR.EMAIL@DOMAIN.TLD">YOUR.EMAIL@DOMAIN.TLD</a></span></li>
            <li><b>Links</b> <span>
              <a href="https://scholar.google.com/citations?user=YOURID" target="_blank" rel="noopener">Google Scholar</a> ·
              <a href="https://orcid.org/YOUR-ORCID" target="_blank" rel="noopener">ORCID</a> ·
              <a href="https://www.linkedin.com/in/YOURID" target="_blank" rel="noopener">LinkedIn</a> ·
              <a href="CV.pdf" target="_blank">CV (PDF)</a>
            </span></li>
          </ul>
        </div>

        <div class="chips">
          <span class="chip">Available for collaboration</span>
          <span class="chip">Supervision inquiries welcome</span>
          <button class="chip" id="copyEmail" title="Copy email to clipboard">Copy email</button>
        </div>
      </div>

      <div class="box">
        <h2>Highlights</h2>
        <ul class="list">
          <li><b>2025</b> — Paper in <i>Journal Name</i> on TOPIC.</li>
          <li><b>2024</b> — Invited talk at CONFERENCE/INSTITUTE.</li>
          <li><b>2023</b> — Grant/Prize NAME for PROJECT.</li>
        </ul>
      </div>
    </section>

    <section id="about">
      <h2>About</h2>
      <div class="grid-2">
        <div class="card">
          <p>
            SHORT BIO — 3–5 sentences about your research focus, methods, and broader contribution.
            Mention current project(s), lab or group, and any cross-disciplinary work.
          </p>
        </div>
        <div class="card">
          <p><b>Keywords.</b> KEYWORD 1; KEYWORD 2; KEYWORD 3; METHODS; REGION; THEORY</p>
          <p><b>Education.</b> YEAR — DEGREE, UNIVERSITY<br>YEAR — DEGREE, UNIVERSITY</p>
        </div>
      </div>
    </section>

    <section id="research">
      <h2>Research</h2>
      <div class="card">
        <p><b>Project A:</b> One-sentence summary of goal and approach. <i>(Funding: AGENCY / GRANT NO.)</i></p>
        <p><b>Project B:</b> One-sentence summary of goal and approach.</p>
        <p><b>Open Data / Code:</b> <a href="https://github.com/YOURUSER/YOURREPO" target="_blank" rel="noopener">GitHub repository</a></p>
      </div>
    </section>

    <section id="publications">
      <h2>Publications</h2>
      <div class="card">
        <ol class="list">
          <li>YOUR NAME, COAUTHOR (2025). “Paper Title.” <i>Journal</i>, VOL(ISSUE), pp-pp. <a href="#">DOI</a> · <a href="#">PDF</a> · <a href="#">BibTeX</a></li>
          <li>YOUR NAME (2024). “Chapter Title.” In <i>Book Title</i>, Publisher. <a href="#">Link</a></li>
          <li>YOUR NAME, COAUTHOR (2023). “Conference Paper.” In <i>CONF</i>. <a href="#">Proceedings</a></li>
        </ol>
      </div>
    </section>

    <section id="teaching">
      <h2>Teaching</h2>
      <div class="card">
        <ul class="list">
          <li><b>COURSE NAME</b> — ROLE (TERM YEAR), brief line on syllabus focus.</li>
          <li><b>COURSE NAME</b> — ROLE (TERM YEAR), brief line on syllabus focus.</li>
          <li><b>Supervision</b> — Topics welcome: A, B, C.</li>
        </ul>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <div class="card">
        <p><b>Email:</b> <a href="mailto:YOUR.EMAIL@DOMAIN.TLD">YOUR.EMAIL@DOMAIN.TLD</a></p>
        <p><b>Office:</b> BUILDING / ROOM, CAMPUS, CITY</p>
        <p><b>Postal:</b> DEPARTMENT, UNIVERSITY, ADDRESS LINE, CITY, POSTCODE, COUNTRY</p>
      </div>
    </section>

    <footer>
      <div>© <span id="y"></span> YOUR NAME</div>
      <div>Last updated: <span id="lastmod"></span></div>
    </footer>

  </div>

  <script>
    // Auto-year & last modified
    document.getElementById('y').textContent = new Date().getFullYear();
    const lm = new Date(document.lastModified);
    document.getElementById('lastmod').textContent = lm.toISOString().slice(0,10);

    // Copy email helper
    const btn = document.getElementById('copyEmail');
    const email = document.getElementById('email')?.textContent || "YOUR.EMAIL@DOMAIN.TLD";
    if(btn){
      btn.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(email.trim()); btn.textContent = "Copied!"; setTimeout(()=>btn.textContent="Copy email",1500); }
        catch { btn.textContent = "Unable to copy"; }
      });
    }
  </script>
</body>
</html>
