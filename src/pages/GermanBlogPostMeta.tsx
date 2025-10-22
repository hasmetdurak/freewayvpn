import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GermanBlogPostMetaProps {
  title: string;
  description: string;
  slug: string;
}

const GermanBlogPostMeta: React.FC<GermanBlogPostMetaProps> = ({ title, description, slug }) => {
  return (
    <Helmet>
      <title>{title} | BestVPN.digital</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://bestvpn.digital/de/blog/${slug}`} />
      <meta property="og:site_name" content="BestVPN.digital" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`https://bestvpn.digital/de/blog/${slug}`} />
    </Helmet>
  );
};

export default GermanBlogPostMeta;