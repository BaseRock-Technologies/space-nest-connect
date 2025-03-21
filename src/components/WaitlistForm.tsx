
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Check } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

  return (
    <div className="max-w-md w-full mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="relative">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field pl-4 pr-32 py-6 text-base"
          />
          <div className="absolute right-1.5 top-1.5">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 button-hover"
            >
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-center space-x-2 bg-primary/10 text-primary rounded-lg py-4 animate-scale">
          <Check size={20} />
          <span className="font-medium">You're on the waitlist!</span>
        </div>
      )}
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Join 2,000+ early adopters waiting for access
      </p>
    </div>
  );
}
