import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ConsultationBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const bannerState = localStorage.getItem('consultationBannerClosed');
    if (bannerState === 'true') {
      setIsVisible(false);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem('consultationBannerClosed', 'true');
  };

  const openConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/consultation');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-blue-600 text-white py-2 px-4 text-center">
      <p className="text-sm inline-block">
        Want some guidance? · <a href="/consultation" onClick={openConsultation} className="underline">Book a free SBA consultation here →</a>
      </p>
      <button onClick={closeBanner} className="text-white ml-4 hover:text-blue-200">&times;</button>
    </div>
  );
};

export default ConsultationBanner;