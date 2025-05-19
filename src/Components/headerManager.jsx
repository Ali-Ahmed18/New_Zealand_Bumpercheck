import React, { useEffect } from 'react';

const HeadManager = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title || 'CorrectVin® - Vehicle History Reports';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Discover reliable vehicle history reports you can trust with CorrectVin®. Get accurate information for informed decisions.';

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords || 'vehicle history reports, car VIN report, VIN check';

  

    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      
    };
  }, [title, description, keywords]);

  return null;
};

export default HeadManager;
