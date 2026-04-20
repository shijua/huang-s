import { Link } from "@/lib/i18n/routing";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-content py-32 text-center">
      <p className="text-overline text-brand-burgundy mb-4">404</p>
      <h1 className="text-h1 mb-6">Page not found</h1>
      <p className="text-ink-muted mb-10">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
