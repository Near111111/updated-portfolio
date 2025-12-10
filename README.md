# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Showcasing professional experience, projects, skills, and achievements.

## Features

- **Responsive Design** - Fully responsive layout that works on mobile, tablet, and desktop
- **Modern UI** - Clean and professional design with smooth animations
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Smooth navigation between sections
- **Interactive Elements** - Hover effects and animations
- **Accessibility** - Keyboard navigation support and semantic HTML
- **Performance** - Optimized for fast loading and smooth interactions
- **SEO Friendly** - Proper meta tags and semantic structure

## Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── css/
│   └── styles.css       # All styling
├── js/
│   └── main.js          # Interactive features
├── assets/
│   └── images/          # Profile and project images
├── README.md            # This file
└── .gitignore           # Git ignore rules
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, etc.) for editing
- Git (optional, for version control)

### Installation

1. **Clone or download the repository**

```bash
git clone <repository-url>
cd portfolio
```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for better experience)

### Using a Local Server

**Python 3:**

```bash
python -m http.server 8000
```

**Python 2:**

```bash
python -m SimpleHTTPServer 8000
```

**Node.js (with http-server):**

```bash
npm install -g http-server
http-server
```

Then open `http://localhost:8000` in your browser.

## Customization

### Update Personal Information

1. **Open `index.html`** and update:
   - Your name in the title and hero section
   - Professional title and description
   - Location information
   - Contact email
   - Experience items
   - Project details
   - Certifications

### Add Your Profile Picture

1. Place your image in `assets/images/`
2. Update the `src` in the profile image tag:

```html
<img src="assets/images/profile.jpg" alt="Your Name" class="profile-img" />
```

### Customize Colors

Edit the CSS variables in `css/styles.css`:

```css
:root {
  --primary-color: #007bff; /* Main brand color */
  --accent-purple: #8b5cf6; /* Purple accent */
  --text-dark: #1a1a1a; /* Dark text */
  --bg-light: #f8f9fa; /* Light background */
  /* ... more variables ... */
}
```

### Update Social Links

Find the "Social Links" section in `index.html` and update the href attributes:

```html
<a href="https://linkedin.com/in/yourprofile" class="social-link">
  <i class="fab fa-linkedin"></i>
</a>
```

## Sections

- **Hero** - Introduction and call-to-action buttons
- **About** - Professional background and summary
- **Experience** - Timeline of work experience and education
- **Tech Stack** - Skills and technologies
- **Beyond Coding** - Personal interests
- **Projects** - Recent projects and portfolio work
- **Certifications** - Professional certifications
- **Recommendations** - Testimonials
- **Contact** - Contact information and social links
- **Memberships** - Professional associations

## Features Explained

### Responsive Navigation

- Sticky navbar that stays at the top while scrolling
- Mobile hamburger menu for small screens
- Smooth link animations on hover

### Interactive Elements

- Smooth scrolling to sections
- Hover animations on cards and buttons
- Active nav link indicators
- Intersection observer for reveal animations

### Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Respects `prefers-reduced-motion` setting

### Performance

- Optimized CSS with minimal bloat
- Efficient JavaScript with event delegation
- Lazy loading support for images
- Smooth 60fps animations

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

### External Libraries

- **Font Awesome 6.4.0** - Icon library (CDN)
- **Google Fonts** - Typography (optional, uses system fonts by default)

No build process or package manager required - it's vanilla HTML, CSS, and JavaScript!

## Best Practices Implemented

✅ **Semantic HTML** - Proper use of semantic elements
✅ **Mobile-First** - Responsive design starting from mobile
✅ **Performance** - Optimized assets and efficient code
✅ **Accessibility** - WCAG compliance basics
✅ **SEO** - Proper meta tags and structure
✅ **Clean Code** - Well-organized and commented code
✅ **Maintainability** - Easy to update and customize

## Tips for Enhancement

1. **Add a Contact Form** - Connect to a backend service (Formspree, Netlify Forms, etc.)
2. **Blog Section** - Add a section for articles/blog posts
3. **Dark Mode** - Implement dark mode toggle
4. **Analytics** - Add Google Analytics or similar
5. **Animations** - Enhance with CSS animations library (AOS.js)
6. **CMS Integration** - Connect to a headless CMS for dynamic content

## Deployment

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Auto-deploys on push

### Vercel

1. Push code to GitHub
2. Import project on Vercel
3. Auto-deploys on push

### GitHub Pages

1. Push code to GitHub repository
2. Enable GitHub Pages in settings
3. Site will be available at `username.github.io`

### Traditional Hosting

- Upload files via FTP to your web hosting provider
- Ensure `index.html` is the default page

## License

This template is free to use and modify. Feel free to customize it for your portfolio!

## Support

For issues or questions:

1. Check the code comments
2. Review the HTML structure
3. Inspect the CSS variables
4. Check browser console for errors

---

**Happy coding! 🚀**
