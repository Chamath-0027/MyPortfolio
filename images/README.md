# Institution Logos

This directory contains placeholder logos for your educational institutions. To use your own logos:

## Current Placeholder Logos:
- `sliit-logo.svg` - Sri Lanka Institute of Information Technology
- `sjvc-logo.svg` - St. Joseph Vaz College  
- `bwea-logo.svg` - British Way English Academy

## How to Replace with Your Own Logos:

### Option 1: Replace SVG files
1. Keep the same filename (e.g., `sliit-logo.svg`)
2. Replace the content with your actual institution logo
3. Ensure the SVG maintains 60x60 viewBox for proper sizing

### Option 2: Use PNG/JPG files
1. Replace the `.svg` extension with `.png` or `.jpg` in the HTML files
2. Update the `src` attributes in `index.html`:
   ```html
   <img src="images/sliit-logo.png" alt="SLIIT Logo" class="institution-logo">
   ```

### Option 3: Use official institution logos
1. Download official logos from your institutions' websites
2. Resize them to approximately 60x60 pixels
3. Save them in this directory with the same names
4. Update file extensions in HTML if needed

## Logo Requirements:
- **Size**: 60x60 pixels (or maintain aspect ratio)
- **Format**: SVG (recommended), PNG, or JPG
- **Style**: Should work well on dark backgrounds
- **Quality**: High resolution for crisp display

## CSS Styling:
The logos are styled with:
- Rounded corners (12px border-radius)
- Subtle borders and shadows
- Hover effects with scaling and brightness
- Smooth transitions and animations

Your logos will automatically inherit these styles!
