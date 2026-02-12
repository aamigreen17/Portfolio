# Student Developer Portfolio

A modern, professional portfolio website showcasing both game development and software engineering projects. Built with vanilla HTML, CSS, and JavaScript for easy deployment to GitHub Pages.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and JavaScript-powered scroll effects
- **Professional Aesthetic**: Clean grey color scheme with blue, orange, and green accents
- **Dual Focus**: Separate sections for game development and software development projects
- **Interactive Elements**: Hover effects, smooth scrolling, and form validation
- **Static & Fast**: No build process required, loads instantly

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `your-username.github.io`)
4. Make it public
5. Don't initialize with README, .gitignore, or license (we already have these files)

### Step 2: Upload Your Files

You have two options:

#### Option A: Using Git Command Line

```bash
# Initialize git in your portfolio folder
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. Go to your new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all files (index.html, styles.css, script.js, README.md)
4. Click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for deployment
7. Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

If you named your repository `YOUR-USERNAME.github.io`, it will be available at `https://YOUR-USERNAME.github.io/`

## Customization Guide

### Update Personal Information

1. **Contact Information** (index.html, search for these):
   - Email: Change `your.email@example.com` to your actual email
   - GitHub: Update `github.com/yourusername` to your GitHub profile
   - LinkedIn: Update `linkedin.com/in/yourprofile` to your LinkedIn

2. **Education** (index.html, line ~780):
   - Update "University Name" to your actual university
   - Update graduation date "May 2027"
   - Update GPA "3.8"

3. **Projects** (index.html, lines ~500-700):
   - Replace project titles, descriptions, and dates
   - Update project images (use Unsplash or your own screenshots)
   - Modify technology tags to match your actual stack

4. **About Section** (index.html, lines ~780-900):
   - Rewrite the bio to match your background
   - Update coursework list
   - Modify achievements

### Change Colors

In `styles.css`, update the CSS variables at the top:

```css
:root {
    --blue-600: #2563eb;    /* Primary blue */
    --green-500: #22c55e;   /* Accent green */
    --orange-500: #f97316;  /* Accent orange */
    /* ... other colors ... */
}
```

### Add Real Project Links

In `script.js`, find the icon button click handlers (around line 130) and replace the alert messages with actual links:

```javascript
iconButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('YOUR-GITHUB-REPO-URL', '_blank');
    });
});
```

### Connect Contact Form

To make the contact form functional, you can:

1. **EmailJS**: Free service to send emails from static sites
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their integration guide
   - Update the form submission handler in `script.js`

2. **Formspree**: Simple form backend
   - Sign up at [Formspree](https://formspree.io/)
   - Update the form action in `index.html`

3. **Netlify Forms**: If you deploy to Netlify instead
   - Add `netlify` attribute to form
   - Forms will appear in your Netlify dashboard

### Add Your Resume

1. Create a PDF of your resume
2. Add it to your repository (e.g., `resume.pdf`)
3. Update the download button in `index.html`:

```html
<a href="./resume.pdf" download class="btn btn-small btn-primary">
    Download Resume
</a>
```

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file with all content
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies
- Optimized CSS with minimal repaints
- Debounced scroll events
- Lazy loading for images
- Intersection Observer for animations

## Tips for Success

1. **Use High-Quality Images**: Replace placeholder images with your own screenshots or professional photos
2. **Write Compelling Copy**: Customize all text to tell your unique story
3. **Keep It Updated**: Regularly add new projects and skills
4. **Test Responsiveness**: Check on multiple devices and screen sizes
5. **SEO**: Update meta tags in the `<head>` section of index.html
6. **Analytics**: Add Google Analytics or similar to track visitors

## Additional Features You Can Add

- Dark/Light mode toggle
- Blog section
- Testimonials
- Download resume button with actual PDF
- Real-time contact form with backend integration
- Project filtering by technology
- Detailed project pages

## Support

If you encounter any issues:
1. Check browser console for errors
2. Ensure all file paths are correct
3. Verify GitHub Pages is enabled in repository settings
4. Clear browser cache and hard refresh

## License

Feel free to use this template for your own portfolio. No attribution required, but appreciated!

---

Built with ❤️ using HTML, CSS, and JavaScript
