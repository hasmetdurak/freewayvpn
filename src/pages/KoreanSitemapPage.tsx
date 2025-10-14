import React, { useEffect } from 'react';
import { generateKoreanSitemap } from '../utils/koreanSitemap';

const KoreanSitemapPage: React.FC = () => {
  useEffect(() => {
    const sitemap = generateKoreanSitemap();
    
    // Set content type to XML
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Create download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ko-sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            한국어 사이트맵 생성
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            한국어 사이트맵이 자동으로 다운로드됩니다. 이 파일을 웹사이트 루트에 업로드하세요.
          </p>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              사이트맵 정보:
            </h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-1">
              <li>• 메인 페이지: 8개</li>
              <li>• 블로그 포스트: 17개</li>
              <li>• 총 URL: 25개</li>
              <li>• 파일명: ko-sitemap.xml</li>
              <li>• 업로드 위치: /public/ko-sitemap.xml</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanSitemapPage;
