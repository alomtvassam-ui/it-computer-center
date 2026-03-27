<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IT Computer Center</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f5f7fa; color: #333; }
    header { background: #0d47a1; color: #fff; padding: 20px; text-align: center; }
    nav { background: #1565c0; padding: 10px; text-align: center; }
    nav a { color: #fff; margin: 0 15px; text-decoration: none; font-weight: bold; }
    section { padding: 40px 20px; max-width: 1100px; margin: auto; }
    .cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .card { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    footer { background: #0d47a1; color: #fff; text-align: center; padding: 15px; }
    button { background: #0d47a1; color: #fff; border: none; padding: 10px 18px; border-radius: 5px; cursor: pointer; }
  </style>
</head>
<body>

<header>
  <h1>IT Computer Center</h1>
  <p>Computer Training • Digital Services • IT Solutions</p>
</header>

<nav>
  <a href="#about">About</a>
  <a href="#courses">Courses</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>

<section id="about">
  <h2>About Us</h2>
  <p>IT Computer Center is a professional computer training and digital service institute. We provide quality education, practical skills, and digital solutions to students and the local community.</p>
</section>

<section id="courses">
  <h2>Our Courses</h2>
**Add Netlify Functions with JWT auth protection for courses and users**

* Implement serverless functions for `courses` and `users`
* Add GET and POST endpoints for courses
* Introduce JWT-based authentication middleware
* Enforce admin-only access for course creation (POST /courses)
* Add reusable `requireAdmin` authorization helper
* Integrate frontend with protected API endpoints
* Handle validation, error states, and loading UI
* Include test cases for auth and API behavior

**Notes:**

* Uses static secret (to be moved to environment variables)
* Data currently in-memory (no database persistence yet)

**Next Steps:**

* Integrate Supabase database
* Replace mock auth with real authentication system
* Add enrollments and payment flow
