
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div>
            <div className="text-xl font-bold text-gradient">SpaceNest</div>
            <p className="mt-1 text-sm text-muted-foreground">Find your perfect workspace</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 text-foreground/60">
              <a href="#" className="hover:text-primary">
                Terms
              </a>
              <a href="#" className="hover:text-primary">
                Privacy
              </a>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground flex items-center">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-primary animate-pulse-light" />
              <span>by SpaceNest Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
