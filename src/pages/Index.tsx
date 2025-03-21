
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistForm } from "@/components/WaitlistForm";
import { FeatureCard } from "@/components/FeatureCard";
import { BenefitItem } from "@/components/BenefitItem";
import { StepItem } from "@/components/StepItem";
import { 
  Calendar, Search, CheckCircle, Clock, Star, 
  BadgePlus, Zap, Shield, GanttChart, Users, 
  BookOpen, Sparkles
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-100/60 via-transparent to-transparent opacity-70"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-24 h-24 bg-purple-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-subtle-bounce" style={{ animationDelay: "1s" }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-xs font-medium">Coming Soon</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Find Your Perfect <span className="text-gradient">Workspace</span> in Seconds
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            SpaceNest connects you with curated workspaces that match your needs, 
            from quiet corners to collaborative hubs.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Why Join the Waitlist?</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Get ahead of the crowd and enjoy these exclusive benefits when you join our waitlist today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-8 animate-fade-in-left" style={{ animationDelay: "0.3s" }}>
              <BenefitItem 
                icon={<BadgePlus size={20} />}
                title="Early Access"
                description="Be among the first to experience SpaceNest"
              />
              <BenefitItem 
                icon={<Sparkles size={20} />}
                title="Exclusive Offers"
                description="Special discounts and promotions for early adopters"
              />
              <BenefitItem 
                icon={<Star size={20} />}
                title="Priority Bookings"
                description="Get first dibs on the most popular spaces"
              />
            </div>
            
            <div className="space-y-8 animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <BenefitItem 
                icon={<Clock size={20} />}
                title="Real-Time Availability"
                description="Instant notifications when your favorite spaces open up"
              />
              <BenefitItem 
                icon={<CheckCircle size={20} />}
                title="Personalized Recommendations"
                description="Tailored workspace suggestions based on your preferences"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-50"></div>
        <div className="section-container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">How SpaceNest Works</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              A simple, seamless process to find and book your ideal workspace.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <StepItem 
                number={1}
                icon={<Search size={20} />}
                title="Search & Discover"
                description="Browse through a curated selection of workspaces filtered by your preferences and requirements."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <StepItem 
                number={2}
                icon={<Calendar size={20} />}
                title="Book Instantly"
                description="Reserve your space with just a few clicks. No phone calls or lengthy email exchanges needed."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <StepItem 
                number={3}
                icon={<GanttChart size={20} />}
                title="Manage & Optimize"
                description="Track your bookings, modify reservations, and optimize your workspace experience effortlessly."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">What Makes SpaceNest Unique?</h2>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Our platform stands out with these key differentiators.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <FeatureCard 
                icon={<Zap size={24} />}
                title="Instant & Flexible Bookings"
                description="Book spaces by the hour, day, week, or month with real-time confirmation and flexible cancellation options."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <FeatureCard 
                icon={<Shield size={24} />}
                title="Verified Listings"
                description="Every workspace on our platform is thoroughly vetted and verified to ensure quality and accuracy."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <FeatureCard 
                icon={<BookOpen size={24} />}
                title="Seamless User Experience"
                description="Intuitive interface designed to make finding and booking workspaces as effortless as possible."
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <FeatureCard 
                icon={<Users size={24} />}
                title="Community & Networking"
                description="Connect with like-minded professionals and expand your network while working in shared spaces."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-100/60 via-transparent to-transparent opacity-70"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Transform How You Find Workspaces?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Join our waitlist today and be the first to experience the future of workspace discovery.
          </p>
          
          <div className="max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
