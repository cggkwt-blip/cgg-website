import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
}

export function SEO({ title, description, image }: SEOProps) {
    const siteName = "Comprehensive Gulf Group";
    const defaultDescription = "Comprehensive Gulf Group (CGG) is a trusted provider of Oil & Gas, Healthcare, and Contracting services in Kuwait, delivering excellence since 2007.";
    const fullTitle = `${title} | ${siteName}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description || defaultDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            {image && <meta property="twitter:image" content={image} />}
        </Helmet>
    );
}
