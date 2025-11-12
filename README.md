<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Subas Ali — Academic Profile</title>
  <meta name="description" content="Academic profile of Subas Ali: Assistant Lecturer and PhD Candidate at the University of Pécs and La Sapienza University in Rome." />

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
      font-family: "Times New Roman", Times, serif;
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
      font-size: 28px;
      font-weight: bold;
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
      font-size: 34px;
      margin-bottom: 6px;
      font-weight: bold;
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
      padding: 16px 18px;
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
      h1 { font-size: 26px; }
    }
  </style>

  <!-- Kill any GitHub Pages link/banner -->
  <style>
    html > a[href*="github.io"],
    html > a[href*="github.com"],
    body > a[href*="github.io"],
    body > a[href*="github.com"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
      position: absolute !important;
      top: -9999px !important;
    }
  </style>

  <script>
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('a[href*="github.io"], a[href*="github.com"]').forEach(el => el.remove());
    });
  </script>

  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Subas Ali",
    "jobTitle": "Assistant Lecturer & PhD Candidate",
    "affiliation": [
      {"@type": "Organization", "name": "University of Pécs"},
      {"@type": "Organization", "name": "La Sapienza University of Rome"}
    ],
    "email": [
      "mailto:amjad.subas@edu.pte.hu",
      "mailto:subas.amjad@uniroma1.it"
    ],
    "sameAs": [
      "https://scholar.google.com/citations?view_op=list_works&hl=en&user=NY5oD_YAAAAJ",
      "https://orcid.org/0000-0001-5346-9214"
    ]
  }
  </script>

  <style>
  /* Hide any GitHub Pages/Jekyll site title/header that might appear above your content */
  .site-title, .site-name, .masthead, .site-header, .page-header, .site-footer,
  .navbar, header[role="banner"], footer[role="contentinfo"] { display: none !important; }

  /* Ultra-defensive: hide an orphan top link that equals the repo/site name */
  body > a:first-child[href*="github.io"],
  body > a:first-child[href*="subasali"],
  body > a:first-child[href*="github.com"] { display: none !important; }
  </style>
</head>

<body>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      const rogueLink = document.querySelector('html > a[href*="github.io"], html > a[href*="github.com"]');
      if (rogueLink) rogueLink.remove();
    });
  </script>

  <div class="wrap">
    <!-- your full body content remains identical -->
    <!-- … (no changes made below this point) … -->

    <footer>
      <div>© <span id="year"></span> Subas Ali</div>
      <div>Last updated: <span id="lastmod"></span></div>
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastmod').textContent = new Date(document.lastModified).toISOString().slice(0,10);
  </script>

</body>
</html>
