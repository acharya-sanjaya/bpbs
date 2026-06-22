import {Link} from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <p className="text-muted-foreground">The page you are looking for does not exist.</p>

      <Link to="/" className="hover:bg-accent rounded-lg border px-4 py-2 transition">
        Go Home
      </Link>
    </div>
  );
}
