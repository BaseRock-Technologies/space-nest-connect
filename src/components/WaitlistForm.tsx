import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Check } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [youformLoaded, setYouformLoaded] = useState(false);
  
  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://app.youform.com/widgets/widget.js"]')) {
      setYouformLoaded(true);
      return;
    }
    
    // Load Youform widget script
    const script = document.createElement('script');
    script.src = 'https://app.youform.com/widgets/widget.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Youform script loaded');
      setYouformLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Youform script');
      setYouformLoaded(false);
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Clean up the script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      toast({
        title: "You're on the list!",
        description: "We'll notify you when SpaceNest launches.",
        duration: 5000,
      });
    }, 1000);
  };
  
  const handleJoinWaitlist = () => {
    // If Youform script failed to load or popup doesn't work, open in new tab
    if (!youformLoaded) {
      window.open('https://app.youform.com/forms/7anwvtmj', '_blank');
    }
    // Otherwise, let the data attributes handle opening the popup
  };

  return (
    <div className="max-w-md w-full mx-auto">
      {!isSubmitted ? (
        <div>
          <Button 
            data-youform-open="7anwvtmj" 
            data-youform-position="center"
            className="w-full bg-primary hover:bg-primary/90 button-hover py-6 text-base font-medium"
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Join 2,000+ early adopters waiting for access
          </p>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center space-x-2 bg-primary/10 text-primary rounded-lg py-4 animate-scale">
            <Check size={20} />
            <span className="font-medium">You're on the waitlist!</span>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Join 2,000+ early adopters waiting for access
          </p>
        </div>
      )}
    </div>
  );
}
