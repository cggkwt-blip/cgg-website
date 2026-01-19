import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/layout/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <SEO title="Page Not Found" />
      <div className="flex flex-1 items-center justify-center bg-muted min-h-[60vh] py-20">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-black text-cgg-blue">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">Oops! The page you are looking for does not exist.</p>
          <Link to="/" className="btn-primary px-8 py-3 no-underline">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
