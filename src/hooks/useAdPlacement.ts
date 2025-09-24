import { useState, useEffect } from 'react';

export interface AdPlacement {
  id: string;
  provider: 'purevpn' | 'nordvpn' | 'surfshark';
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
  size: 'small' | 'medium' | 'large';
  showAfterParagraph?: number;
}

export const useAdPlacement = (contentLength: number = 1000) => {
  const [adPlacements, setAdPlacements] = useState<AdPlacement[]>([]);

  useEffect(() => {
    // Determine ad placements based on content length
    const placements: AdPlacement[] = [];

    // Always show top banner
    placements.push({
      id: 'top-banner',
      provider: 'purevpn',
      position: 'top',
      size: 'large'
    });

    // Show middle banner for longer content
    if (contentLength > 500) {
      placements.push({
        id: 'middle-banner',
        provider: 'purevpn',
        position: 'middle',
        size: 'medium',
        showAfterParagraph: Math.floor(contentLength / 1000) * 2
      });
    }

    // Show bottom banner for all content
    placements.push({
      id: 'bottom-banner',
      provider: 'purevpn',
      position: 'bottom',
      size: 'large'
    });

    setAdPlacements(placements);
  }, [contentLength]);

  const getAdByPosition = (position: 'top' | 'middle' | 'bottom' | 'sidebar') => {
    return adPlacements.find(ad => ad.position === position);
  };

  const shouldShowAdAfterParagraph = (paragraphIndex: number) => {
    const middleAd = getAdByPosition('middle');
    return middleAd && middleAd.showAfterParagraph === paragraphIndex;
  };

  return {
    adPlacements,
    getAdByPosition,
    shouldShowAdAfterParagraph
  };
};

export default useAdPlacement;
