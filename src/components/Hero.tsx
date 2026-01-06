import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-[200px] font-serif text-foreground select-none">
          道
        </div>
        <div className="absolute bottom-20 right-10 text-[150px] font-serif text-foreground select-none">
          武
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div className="mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted-foreground border border-border rounded-full">
              Java Backend Developer
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            LIKHITH REDDY
            <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 text-primary font-normal">
              CHILAKALA
            </span>
          </h1>

          {/* Quote */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in font-light italic"
            style={{ animationDelay: '0.6s' }}
          >
            "Value creation is the only metric that matters"
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            Building unique solutions with discipline and precision. 
            A stoic approach to software engineering.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary px-8"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <a
              href="https://github.com/LikhithReddyChilakala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/likhith-reddy-chilakala-027497231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:likhithreddy2423@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
