# 🦷 DENTIFY Clinic - Professional Dental Care Website

A modern, responsive website for DENTIFY dental clinic built with React and Vite. Features multilingual support, smooth animations, and integrated services.

![DENTIFY Clinic](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.12-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Features

### Core Features
- 🌍 **Multilingual Support** - Available in Uzbek, Russian, and English
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ✨ **Smooth Animations** - Scroll-triggered animations for enhanced UX
- 🗺️ **Map Integration** - Google Maps for easy location finding
- 🚕 **Taxi Integration** - Quick Yandex Taxi ordering to clinic location
- 📞 **Quick Contact** - One-click phone calling and contact forms

### Pages
1. **Home** (`/`) - Main landing page with all sections
   - Hero banner with call-to-action
   - About clinic section
   - Services overview
   - Testimonials
   - Appointment form
   - Location map

2. **Services** (`/services`) - Detailed services page
   - Complete list of dental services
   - Consultation request form
   - Service descriptions

3. **Clinic Structure** (`/structure`) - Team information
   - Director profile
   - Chief doctor information
   - Full medical staff roster
   - Nurses and support staff

4. **Contacts** (`/contacts`) - Contact information
   - Interactive Google Maps
   - Phone and address details
   - Taxi ordering integration
   - Animated contact cards

## 🚀 Tech Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.12
- **Styling:** Tailwind CSS 4.1.9
- **Routing:** React Router DOM 6.28.0
- **Forms:** React Hook Form 7.60.0
- **Validation:** Zod 3.25.76
- **Icons:** Lucide React 0.454.0
- **Charts:** Recharts 2.15.4
- **Notifications:** Sonner 1.7.4

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd web-dentify-clinic

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🏗️ Project Structure

```
web-dentify-clinic/
├── public/
│   └── img/                    # Images and assets
│       ├── logo.png
│       ├── hero-background.webp
│       ├── service icons (SVG)
│       └── photos (JPG/WebP)
├── src/
│   ├── components/            # React components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Services.jsx      # Services overview
│   │   ├── ServicesPage.jsx  # Full services page
│   │   ├── Testimonials.jsx  # Client testimonials
│   │   ├── Appointment.jsx   # Appointment form
│   │   ├── Contact.jsx       # Contact section
│   │   ├── ContactsPage.jsx  # Full contacts page
│   │   ├── ClinicStructure.jsx # Team page
│   │   ├── Location.jsx      # Map section
│   │   └── Footer.jsx        # Footer
│   ├── contexts/             # React contexts
│   │   ├── LanguageContext.jsx
│   │   └── LanguageProvider.jsx
│   ├── hooks/                # Custom hooks
│   │   └── useScrollAnimation.js
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Features Breakdown

### 1. Language System
- Context-based language management
- Persistent language selection
- Easy translation management
- Supports 3 languages (UZ, RU, EN)

### 2. Routing System
- Client-side routing with React Router
- Smooth page transitions
- URL preservation on refresh
- Clean, semantic URLs

### 3. Animation System
- Custom scroll animation hook
- Intersection Observer API
- Smooth fade-in/slide-in effects
- Performance-optimized animations

### 4. Form Handling
- React Hook Form integration
- Zod schema validation
- User-friendly error messages
- Accessible form controls

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 480px
- Tablet: 481px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Performance

- **Bundle Size:** 276.73 kB (gzipped: 85.27 kB)
- **CSS Size:** 45.54 kB (gzipped: 8.10 kB)
- **Build Time:** ~2.2s
- **Lighthouse Score:** (Run lighthouse audit for details)

## 🔧 Configuration

### Environment Variables
Currently, no environment variables are required. All configuration is done in component files.

### Customization
- **Colors:** Modify `tailwind.config.js` for theme colors
- **Animations:** Adjust timing in component CSS files
- **Routes:** Add/modify routes in `App.jsx`
- **Translations:** Update translation objects in component files

## 🚀 Deployment

### Build
```bash
npm run build
```

The build output will be in the `dist/` folder.

### Deploy Options
- **Vercel:** Connect GitHub repo and deploy
- **Netlify:** Drag and drop `dist` folder
- **GitHub Pages:** Use `gh-pages` branch
- **Custom Server:** Serve `dist` folder with any static host

### Important Notes
- Ensure all image paths are correct in production
- Set up proper routing configuration for SPA on your hosting platform
- Consider adding a `_redirects` file for Netlify or `vercel.json` for Vercel

## 📝 Development Guidelines

### Code Style
- Follow ESLint rules (configured in `eslint.config.js`)
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable names

### Best Practices
- All images optimized (WebP format where possible)
- Lazy loading for heavy components
- Semantic HTML for accessibility
- CSS transitions for smooth UX

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Alisher Abdusalomov**
- Portfolio: [abdusalomovv.uz](https://www.abdusalomovv.uz)
- GitHub: [@Alisher1707](https://github.com/Alisher1707)
- LinkedIn: [Alisher Abdusalomov](https://www.linkedin.com/in/alisher-abdusalomov-70341837b/)

## 🙏 Acknowledgments

- DENTIFY Clinic for the opportunity
- React and Vite communities
- Tailwind CSS team
- All open-source contributors

## 📞 Contact

For any inquiries about this project:
- Portfolio: https://www.abdusalomovv.uz
- GitHub: https://github.com/Alisher1707
- DENTIFY Clinic Phone: +998(99) 236-06-31

---

**Made with ❤️ for DENTIFY Clinic**
