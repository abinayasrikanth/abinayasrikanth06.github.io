# Abinaya Srikanth - Portfolio Website

Professional portfolio website showcasing my research and projects in Mechanical Engineering, Vehicle Systems, and Robotics.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Project Showcase**: Detailed descriptions of research projects including:
  - V2X Communication Optimization with Deep RL
  - Anti-Lock Braking System for Three-Wheelers (Published)
  - Hydrogen Fuel Pressure Regulator
  - Firefly Swarm Synchronization
  - Multi-Robot Systems with Distributed Control
- **Skills Section**: Comprehensive technical skills display
- **Contact Information**: Easy ways to connect

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com and log in (or create an account)
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `abinayasrikanth.github.io` (or any name you prefer)
4. Make it **Public**
5. Click "Create repository"

### Step 2: Push Code to GitHub

```bash
cd C:\Users\abina\portfolio-website
git add .
git commit -m "Initial commit: Professional portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/abinayasrikanth.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/abinayasrikanth.github.io/`

## Custom Domain (Optional)

If you want a custom domain like `abinayasrikanth.com`:

1. Buy a domain from Namecheap, Google Domains, etc.
2. Add a CNAME file to your repository with your domain name
3. Configure DNS settings in your domain registrar
4. Add custom domain in GitHub Pages settings

## Local Development

To view the site locally:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit: http://localhost:8000

## Customization

### Update Projects

Edit `index.html` and modify the project cards in the `<section id="projects">` section.

### Update Contact Info

Update email, phone, and LinkedIn in the `<section id="contact">` section.

### Change Colors

Modify CSS variables in `style.css`:

```css
:root {
    --primary-color: #2563eb;  /* Change this for different theme */
    --secondary-color: #1e40af;
    /* ... other variables */
}
```

### Add/Remove Projects

Copy and paste a `.project-card` div in the HTML and customize the content.

## SEO Optimization

The site includes:
- Meta descriptions
- Semantic HTML
- Proper heading hierarchy
- Alt text for images (add when you include images)
- Mobile-friendly design

## Future Enhancements

- [ ] Add project images/screenshots
- [ ] Create a blog section
- [ ] Add downloadable resume PDF
- [ ] Include Google Analytics
- [ ] Add project demos/videos
- [ ] Create case studies for each project

## License

© 2026 Abinaya Srikanth. All rights reserved.

## Contact

- **Email**: abinayasrikanth@gmail.com
- **LinkedIn**: [linkedin.com/in/abinaya-srikanth](https://linkedin.com/in/abinaya-srikanth)
- **Phone**: +1 (214) 899-9122

---

Built with dedication to showcase cutting-edge work in autonomous systems and vehicle control engineering.
