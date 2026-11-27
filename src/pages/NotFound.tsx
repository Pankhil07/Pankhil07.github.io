import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 relative">
      <div className="crt-scanlines" aria-hidden="true" />
      <div className="unix-window-amber max-w-lg w-full relative z-10">
        <div className="unix-titlebar">
          <div className="flex items-center gap-2 text-accent-neon font-bold">
            <AlertTriangle className="h-4 w-4" />
            <span>ERR_404 // FILE_NOT_FOUND</span>
          </div>
          <span>EXIT 1</span>
        </div>
        <div className="p-8 font-mono">
          <p className="text-xs text-muted-foreground mb-2">$ cd {location.pathname}</p>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            <span className="text-accent-neon">404:</span> No such file or directory
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            The requested path could not be resolved on this workstation.
          </p>
          <Button variant="hero" asChild>
            <a href="/">
              <ArrowLeft className="h-4 w-4" />
              cd ~ (Return Home)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
