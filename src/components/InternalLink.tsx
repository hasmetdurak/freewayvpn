import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface InternalLinkProps {
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  className?: string;
}

const InternalLink: React.FC<InternalLinkProps> = ({
  title,
  description,
  href,
  isExternal = false,
  className = ''
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isExternal) {
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // For internal links, let the default behavior handle it
      // In a real app, you might use React Router here
    }
    
    // Track internal link clicks for analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'internal_link_click', {
        event_category: 'navigation',
        event_label: title,
        value: 1
      });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex items-start gap-3 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-colors duration-200 text-left ${className}`}
    >
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex-shrink-0 mt-1">
        {isExternal ? (
          <ExternalLink className="h-4 w-4 text-gray-400" />
        ) : (
          <ArrowRight className="h-4 w-4 text-gray-400" />
        )}
      </div>
    </a>
  );
};

export default InternalLink;