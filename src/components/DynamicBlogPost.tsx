import React, { lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getBlogPostBySlug } from '../data/blogData';
import { Clock, User, Calendar, Tag } from 'lucide-react';
import { generateAutoImage } from '../utils/autoImageUtils';

// Lazy load all blog components
const StreamingVPNBlogPost = lazy(() => import('../pages/StreamingVPNBlogPost'));
const VPNProxyBlogPost = lazy(() => import('../pages/VPNProxyBlogPost'));
const VPNChinaBlogPost = lazy(() => import('../pages/VPNChinaBlogPost'));
const NordVPNExpressVPNBlogPost = lazy(() => import('../pages/NordVPNExpressVPNBlogPost'));
const SurfsharkvsCyberGhostBlogPost = lazy(() => import('../pages/SurfsharkvsCyberGhostBlogPost'));
const StreamingWars2025BlogPost = lazy(() => import('../pages/StreamingWars2025BlogPost'));
const MobileLegendsVPNBlogPost = lazy(() => import('../pages/MobileLegendsVPNBlogPost'));
const BusinessVPNShowdownBlogPost = lazy(() => import('../pages/BusinessVPNShowdownBlogPost'));
const UAESportsVPNBlogPost = lazy(() => import('../pages/UAESportsVPNBlogPost'));
const FiveEyeFourteenEyeVPNBlogPost = lazy(() => import('../pages/FiveEyeFourteenEyeVPNBlogPost'));
const MacBookM3VPNBlogPost = lazy(() => import('../pages/MacBookM3VPNBlogPost'));
const LinuxCLIVPNBlogPost = lazy(() => import('../pages/LinuxCLIVPNBlogPost'));

// Component mapping
const componentMap: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  StreamingVPNBlogPost,
  VPNProxyBlogPost,
  VPNChinaBlogPost,
  NordVPNExpressVPNBlogPost,
  SurfsharkvsCyberGhostBlogPost,
  StreamingWars2025BlogPost,
  MobileLegendsVPNBlogPost,
  BusinessVPNShowdownBlogPost,
  UAESportsVPNBlogPost,
  FiveEyeFourteenEyeVPNBlogPost,
  MacBookM3VPNBlogPost,
  LinuxCLIVPNBlogPost,
};

// Loading component
const BlogPostSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
        <div className="h-64 bg-gray-300 rounded-lg mb-8"></div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  </div>
);

// Generic blog post template for posts without specific components
const GenericBlogPost: React.FC<{ post: any }> = ({ post }) => {
  // Auto-generate image if not present or is placeholder
  const autoImage = React.useMemo(() => {
    if (!post.image || post.image.includes('placeholder') || post.image === '') {
      return generateAutoImage(post.title, post.category, post.tags, post.excerpt);
    }
    return null;
  }, [post.title, post.category, post.tags, post.excerpt, post.image]);

  const displayImage = autoImage ? autoImage.url : post.image;
  const imageAlt = autoImage ? autoImage.alt : post.title;
  const imageTitle = autoImage ? autoImage.title : `Image for ${post.title}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          {/* Meta information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Category and Tags */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Auto-Generated Featured Image */}
          <img
            src={displayImage}
            alt={imageAlt}
            title={imageTitle}
            className="w-full h-64 object-cover rounded-lg shadow-lg mb-8"
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="prose prose-lg max-w-none blog-content">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="text-yellow-800">
              <strong>Note:</strong> This is a generic blog post template. To create a custom layout for this post, 
              create a specific component and add it to the componentMap in DynamicBlogPost.tsx.
            </p>
          </div>

          <h2>About This Article</h2>
          <p>
            This article covers important topics related to {post.category.toLowerCase()}. 
            Our team of experts has researched and compiled the most up-to-date information 
            to help you make informed decisions.
          </p>

          <h2>Key Points</h2>
          <ul>
            <li>Comprehensive analysis of the topic</li>
            <li>Expert insights and recommendations</li>
            <li>Up-to-date information for 2025</li>
            <li>Practical tips and guidance</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            We hope this article has provided valuable insights into {post.title.toLowerCase()}. 
            Stay tuned for more expert analysis and guides from our team.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

const DynamicBlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // If post has a specific component, render it
  if (post.component && componentMap[post.component]) {
    const Component = componentMap[post.component];
    return (
      <Suspense fallback={<BlogPostSkeleton />}>
        <Component />
      </Suspense>
    );
  }

  // Otherwise, render generic template
  return <GenericBlogPost post={post} />;
};

export default DynamicBlogPost;