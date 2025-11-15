# GINA Royal Foundation Website

## Overview
A static website created from the GINA Royal Foundation PDF document, showcasing the foundation's mission to empower widows in Machakos County, Kenya.

## Structure

### HTML (index.html)
The website follows a single-page application design with the following sections:

1. **Header** - Sticky navigation with foundation name and tagline
2. **Hero Section** - Introduction with main headline
3. **About Section** - Foundation overview and mantra
4. **Mission Section** - Core mission statement and values (Hope, Resilience, Courage, Empowerment)
5. **Focus Areas** - Income generating activities and farming initiatives
6. **Key Projects** - Five major projects:
   - Education
   - Water Catchment Areas
   - Climate Justice
   - The Art of Weaving
   - Healing, Counseling and Medical Camps
7. **Support Section** - Partnership opportunities and call to action
8. **Footer** - Copyright and mission statement

### CSS (style.css)
**Design Philosophy:**
- Professional, elegant design inspired by Kintsugi (golden repair)
- Color scheme reflects the foundation's identity:
  - Primary: Purple (#8B4789) - representing dignity and transformation
  - Secondary: Gold (#D4AF37) - representing the golden journey and restoration
  - Background: Cream tones for warmth and approachability

**Key Features:**
- Fully responsive design with breakpoints at 768px and 480px
- Smooth transitions and hover effects on cards
- Alternating section backgrounds for visual rhythm
- Typography using Georgia serif font for readability and elegance
- Card-based layouts with shadow effects for depth
- Print-friendly styles included

### JavaScript (main.js)
**Interactive Features:**
- Smooth scroll navigation with offset for sticky header
- Active navigation highlighting based on scroll position
- Scroll-triggered animations for cards (fade in and slide up)
- Intersection Observer API for performance-optimized animations

## Design Decisions

1. **Single-Page Layout**: Chose a one-page design to maintain narrative flow and make all information easily accessible without navigation between pages.

2. **Purple and Gold Color Scheme**: The PDF featured these colors in the logo, and they perfectly represent the Kintsugi metaphor - purple for royalty/dignity, gold for restoration and value.

3. **Card-Based Design**: Projects and values are presented in cards to organize information clearly and create visual interest.

4. **Semantic HTML5**: Used proper heading hierarchy and semantic elements for accessibility and SEO.

5. **Mobile-First Responsive**: Grid layouts that stack on mobile devices, with touch-friendly navigation.

6. **Professional Typography**: Georgia serif font provides a classic, trustworthy appearance appropriate for a charitable foundation.

## Technical Specifications

- **Framework**: Vanilla HTML, CSS, JavaScript with Vite build tool
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile)
- **Performance**: Optimized with CSS transitions, Intersection Observer API
- **Accessibility**: Semantic HTML, proper heading structure, sufficient color contrast

## Content Fidelity

All content from the PDF document has been accurately transferred to the website:
- Foundation description and location details
- Mantra and mission statement
- All four core values with descriptions
- Q2 timeline and farming initiatives
- All five key projects with complete details
- Quotes and emphasis preserved
- Partnership opportunities listed

## Future Enhancements (Optional)

- Contact form for partnership inquiries
- Photo gallery of the women and projects
- Donation integration
- Multi-language support (English/Swahili)
- Impact metrics and success stories
- Newsletter signup
- Social media integration
