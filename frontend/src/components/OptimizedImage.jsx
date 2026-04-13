import React from 'react';

/**
 * Optimized Image Component
 * - Adds lazy loading
 * - Optimizes Unsplash images with width and quality parameters
 * - WebP format for better compression
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width = 800, 
  quality = 75,
  loading = 'lazy',
  ...props 
}) => {
  // Optimize Unsplash URLs
  const optimizeSrc = (url) => {
    if (url.includes('unsplash.com')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}w=${width}&q=${quality}&fm=webp&fit=crop`;
    }
    return url;
  };

  return (
    <img
      src={optimizeSrc(src)}
      alt={alt}
      className={className}
      loading={loading}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage;
