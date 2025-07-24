import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
}

export const SEOHead = ({ 
  title = 'Starborn Dominion - Constitutional Framework',
  description = 'A post-Earth civilization founded on balanced power, merit-based leadership, and universal rights for all sentient beings.',
  keywords = 'constitution, governance, space civilization, political framework, starborn dominion',
  ogType = 'website'
}: SEOHeadProps): null => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', 'Starborn Dominion Constitutional Assembly');
    
    // Open Graph tags
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:site_name', 'Starborn Dominion', true);
    
    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);

    // Add structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Starborn Dominion",
      "description": description,
      "url": window.location.origin,
      "author": {
        "@type": "Organization",
        "name": "Starborn Dominion Constitutional Assembly"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogType]);

  return null;
};