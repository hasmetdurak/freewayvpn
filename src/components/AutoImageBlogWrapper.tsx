import React from 'react';
import { generateAutoImage } from '../utils/autoImageUtils';

interface AutoImageBlogWrapperProps {
  children: React.ReactNode;
  title: string;
  category: string;
  tags: string[];
  excerpt: string;
  existingImage?: string;
  className?: string;
}

const AutoImageBlogWrapper: React.FC<AutoImageBlogWrapperProps> = ({
  children,
  title,
  category,
  tags,
  excerpt,
  existingImage,
  className = "w-full h-64 object-cover rounded-lg shadow-lg mb-8"
}) => {
  // Auto-generate image if not present or is placeholder
  const autoImage = React.useMemo(() => {
    if (!existingImage || existingImage.includes('placeholder') || existingImage === '') {
      return generateAutoImage(title, category, tags, excerpt);
    }
    return null;
  }, [title, category, tags, excerpt, existingImage]);

  const displayImage = autoImage ? autoImage.url : existingImage;
  const imageAlt = autoImage ? autoImage.alt : title;
  const imageTitle = autoImage ? autoImage.title : `Image for ${title}`;

  return (
    <div>
      {/* Auto-Generated Hero Image */}
      {displayImage && (
        <img
          src={displayImage}
          alt={imageAlt}
          title={imageTitle}
          className={className}
          loading="eager"
        />
      )}
      {children}
    </div>
  );
};

export default AutoImageBlogWrapper;