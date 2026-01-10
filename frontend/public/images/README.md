# Images Folder

This folder is for storing images used in the Desa Babalan Lor website.

## Usage

You can add images here and reference them in your components like this:

```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg" 
  alt="Description" 
  width={800} 
  height={600} 
/>
```

## Recommended Image Formats

- **JPG/JPEG**: For photographs
- **PNG**: For images with transparency
- **WebP**: For optimized web images (recommended)
- **SVG**: For icons and simple graphics

## Image Optimization

Next.js automatically optimizes images when using the `next/image` component. Make sure to:
- Use appropriate image sizes
- Add proper alt text for accessibility
- Consider using WebP format for better compression

