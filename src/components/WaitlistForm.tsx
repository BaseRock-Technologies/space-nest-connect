
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Check } from 'lucide-react';

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleJoinWaitlist = () => {
    window.open('https://app.youform.com/forms/7anwvtmj', '_blank');
  };

  return (
    <div className="max-w-md w-full mx-auto">
      {!isSubmitted ? (
        <div>
          <Button 
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
