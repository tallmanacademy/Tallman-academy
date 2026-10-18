Tallman Academy website (static HTML/CSS/JS, deployed on Vercel)

Preview locally:
  cd site
  python3 -m http.server 8080
  then open http://localhost:8080

Links are root relative (/blog, /offerings), so opening index.html directly from the folder will not navigate correctly.

Contact form: a Google Form ("Tallman Academy Contact Form") embedded on every page with a Contact section.
  Edit questions:  https://docs.google.com/forms/d/1eFDlFeFHF6B-M6OthQYGCTevAosURONeKE2i57gHVpY/edit
  If you add questions, raise the .form-embed heights in assets/css/site.css so the form doesn't scroll inside its box.
