import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Shield, Rocket } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <nav className="fixed w-full z-50 top-0 border-b bg-background/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <Sparkles className="w-5 h-5 text-primary" />
            Pitang.frontend
          </div>
          <div className="flex gap-4">
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button className="rounded-full px-6">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm md:text-base mb-4 animate-fade-in-up">
            <Zap className="w-4 h-4" />
            <span>v2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-foreground">
            Build the future with <br className="hidden md:block" />
            <span className="text-primary">
              limitless potential
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The ultimate platform for modern teams to collaborate, ship faster, and scale without boundaries. Experience the next generation of productivity.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="h-14 px-8 rounded-full font-semibold text-lg gap-2 group transition-all hover:scale-105">
                Start Building Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full font-semibold text-lg transition-all hover:scale-105 bg-background">
                Open Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <section className="py-24 bg-muted/30 border-t relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to succeed</h2>
            <p className="text-muted-foreground">Powerful features designed to supercharge your workflow.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Lightning Fast", desc: "Optimized for speed. Every millisecond counts when you're building the future." },
              { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Secure by Default", desc: "Enterprise-grade security built directly into the core of our platform." },
              { icon: <Rocket className="w-8 h-8 text-pink-500" />, title: "Scale infinitely", desc: "From day one to millions of users, our infrastructure scales with you." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border text-card-foreground shadow-sm hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <footer className="border-t py-16 bg-background border-border">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-4 lg:grid-cols-5 text-sm">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-xl font-bold text-primary">
              <Sparkles className="w-5 h-5 text-primary" />
              Pitang.frontend
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Elevating your digital experience with premium curation and minimalist design. The future of technology, today.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors font-semibold">In</a>
              <a href="#" className="hover:text-foreground transition-colors font-semibold">Gh</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platform</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">News</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Offers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Help & FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tracking</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          
          <div className="space-y-4 col-span-1 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold text-foreground">Stay in the loop</h4>
            <p className="text-muted-foreground">Subscribe to receive exclusive updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="your@email.com" className="bg-muted text-foreground px-3 py-2 rounded-md w-full focus:outline-none focus:ring-1 focus:ring-primary border border-transparent focus:border-border transition-all" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© 2026 Pitang. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
