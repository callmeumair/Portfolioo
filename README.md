# Umer Patel - Portfolio Website

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean, minimalist design with smooth animations and responsive layouts.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with plenty of white space and bold typography
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Smooth Animations**: Framer Motion animations for page transitions and element reveals
- **Interactive Components**: Hover effects, smooth scrolling, and interactive project cards
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Built with Next.js 15 and optimized for speed
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── separator.tsx
│   │   ├── navbar.tsx           # Navigation component
│   │   ├── hero.tsx             # Hero section
│   │   ├── about.tsx            # About section
│   │   ├── skills.tsx           # Skills section
│   │   ├── projects.tsx         # Projects section
│   │   ├── contact.tsx           # Contact section
│   │   ├── footer.tsx           # Footer component
│   │   └── theme-provider.tsx    # Theme provider wrapper
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/
│   ├── profile.jpg              # Profile image (placeholder)
│   └── resume.pdf               # Resume PDF (placeholder)
└── components.json              # shadcn/ui configuration
```

## 🎨 Design System

### Colors
- **Primary**: Custom blue gradient
- **Secondary**: Muted gray tones
- **Background**: Dynamic light/dark backgrounds
- **Text**: High contrast for accessibility

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-900)
- **Body**: Regular weight (400-500)
- **Code**: Geist Mono

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Generous white space for clean, modern look
- Responsive spacing that adapts to screen size

### Animations
- **Page Transitions**: Smooth fade-in effects
- **Scroll Animations**: Elements animate into view
- **Hover Effects**: Subtle scale and color transitions
- **Loading States**: Smooth transitions for interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🎯 Sections

### Hero Section
- Professional introduction with name and title
- Call-to-action buttons
- Social media links
- Animated profile image with floating elements

### About Section
- Personal story and journey
- Statistics cards with animated counters
- Core values and principles
- Professional background

### Skills Section
- Categorized skill sets (Frontend, Backend, Tools)
- Progress bars with animated fill
- Technology badges
- Learning section for current interests

### Projects Section
- Featured projects with detailed cards
- Interactive hover effects
- Live demo and GitHub links
- Technology stack badges

### Contact Section
- Contact information cards
- Interactive contact form
- Social media links
- Call-to-action for collaboration

## 🌙 Dark Mode

The website includes a comprehensive dark mode implementation:

- **System Preference**: Automatically detects user's system theme
- **Manual Toggle**: Theme switcher in the navigation
- **Persistent**: Remembers user's choice across sessions
- **Smooth Transitions**: No flash during theme changes

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Indicators**: Clear focus states
- **Alt Text**: Descriptive image alternatives

## 🚀 Performance

- **Next.js 15**: Latest framework with optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components load as needed
- **Bundle Analysis**: Optimized bundle sizes

## 📈 SEO

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media preview support
- **Twitter Cards**: Twitter-specific previews
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives

## 🔧 Customization

### Adding New Projects
1. Update the `projects` array in `src/components/projects.tsx`
2. Add project images to the `public/` directory
3. Update the project data structure as needed

### Modifying Skills
1. Edit the `skillCategories` array in `src/components/skills.tsx`
2. Adjust skill levels and categories
3. Add or remove technologies as needed

### Updating Contact Information
1. Modify the `contactInfo` array in `src/components/contact.tsx`
2. Update social links in the `socialLinks` array
3. Customize the contact form fields

### Styling Changes
1. Update CSS variables in `src/app/globals.css`
2. Modify Tailwind configuration for custom colors/spacing
3. Adjust component styles in individual component files

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: umerpatel1@gmail.com
- **GitHub**: [@umerpatel1](https://github.com/umerpatel1)
- **LinkedIn**: [Umer Patel](https://linkedin.com/in/umerpatel1)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library

---

Built with ❤️ by Umer Patel