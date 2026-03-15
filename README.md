# My Portfolio Website - CMSC 207 Mini Project

A responsive, single-page portfolio website showcasing HTML5 semantic markup, CSS3 styling with animations, and JavaScript interactivity.

## 📁 Project Structure

```
CMSC 207/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # External CSS stylesheet with responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## ✨ Features Implemented

### ✅ Core Requirements

1. **HTML Structure** - Using semantic tags:
   - `<header>` - Navigation and site title
   - `<section>` - Different content sections
   - `<footer>` - Footer information
   - Proper hierarchy with heading tags

2. **CSS Styling**:
   - External stylesheet (`styles.css`)
   - Professional color scheme (purple gradient theme)
   - Clean typography and layout
   - Box shadows and spacing for visual hierarchy
   - CSS animations and transitions

3. **JavaScript Interactivity**:
   - Fun Fact button with random facts
   - Typewriter effect animation
   - Smooth scrolling to sections
   - Active navigation highlighting
   - Scroll-based element fade-in effect

4. **Responsive Design**:
   - Mobile-first approach
   - Media queries for tablets (≤768px)
   - Media queries for mobile (≤480px)
   - Flexible layouts using CSS Grid and Flexbox

### ⭐ Enhanced Features

- **Navigation Menu** - Working anchor links with smooth scrolling
- **Hover Effects** - CSS transitions on buttons, cards, and images
- **Fun Fact Button** - Displays random facts with typewriter animation
- **Profile Card Hover** - Image scales and rotates on hover
- **Hobby Cards** - Lift up with shadow effect on hover
- **Social Media Links** - Placeholder links with hover effects
- **Sticky Header** - Navigation stays at top while scrolling
- **Active Link Highlighting** - Shows current section in navigation
- **Animations** - Fade-in effects for cards on scroll
- **Visual Feedback** - Button pulse animation on click

## 🚀 How to Use

1. **Open the website:**
   - Double-click `index.html` to open in your default browser
   - Or right-click and select "Open with" → Choose a browser

2. **Interact with the page:**
   - Click navigation links to scroll smoothly to sections
   - Hover over cards to see animation effects
   - Click the "Fun Fact" button to see random facts
   - Hover over the profile image for a rotation effect
   - Try the social media links

3. **Test responsiveness:**
   - Open browser DevTools (F12 or Cmd+Opt+I)
   - Click the device toggle icon
   - Try different screen sizes (iPhone, iPad, Desktop)

## 🎨 Customization Guide

### Update Personal Information

**In `index.html`:**
- Change the site title: `<h1 class="site-title">My Portfolio</h1>`
- Update tagline: `<p class="tagline">Your tagline here</p>`
- Replace profile image URL (currently using placeholder)
- Update "About Me" paragraph
- Modify hobbies and descriptions
- Update email address: `<a href="mailto:your-email@example.com">`
- Update social media links

### Update Fun Facts

**In `script.js`:**
Find the `funFacts` array and replace with your own facts:
```javascript
const funFacts = [
    "Your fact here!",
    "Another fact!",
    // Add more facts...
];
```

### Change Colors

**In `styles.css`:**
- Main colors: `#667eea` (purple) and `#764ba2` (darker purple)
- Background: `#f8f9fa` (light) and `#333` (dark for footer)
- Change the gradient in the header and fun fact section

## 📱 Responsive Breakpoints

- **Desktop**: Full width layout (1200px max container)
- **Tablet**: 768px and below - Stack layouts vertically
- **Mobile**: 480px and below - Simplified layouts, single column

## 🔧 Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 💡 Tips for Presenting

1. **Test on multiple devices** - Show how it looks on phone, tablet, and desktop
2. **Click through all interactive elements** - Fun fact button, hover effects, links
3. **Show the code** - Open DevTools and demonstrate the HTML structure
4. **Explain the responsive design** - Resize the browser to show mobile adaptation

## 📝 Checklist for Grading

- [x] HTML semantic tags used (`<header>`, `<section>`, `<footer>`, etc.)
- [x] CSS external stylesheet included
- [x] JavaScript interactivity (fun fact button)
- [x] Responsive design (mobile, tablet, desktop views)
- [x] Navigation menu with anchor links
- [x] Hover effects implemented
- [x] About Me section with image
- [x] Hobbies & Interests section (4+ items)
- [x] Contact information section
- [x] Social media links
- [x] CSS animations and transitions
- [x] Mobile-first responsive design

## 🎓 Learning Outcomes

This project demonstrates:
- Semantic HTML5 markup
- Advanced CSS layout techniques (Grid, Flexbox)
- CSS animations and transitions
- JavaScript DOM manipulation
- Event handling (click, scroll)
- Responsive design principles
- User experience enhancements

## 📚 Resources Used

- HTML5 Semantic Elements
- CSS3 Flexbox & Grid
- CSS Media Queries
- JavaScript ES6
- Web Accessibility basics

---

**Created for**: CMSC 207 - Web Development
**Date**: March 2026
**Student**: Sheene Shane Mascardo
