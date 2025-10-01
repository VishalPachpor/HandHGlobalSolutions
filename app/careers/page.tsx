import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Careers</h1>
          <p className="text-muted-foreground max-w-3xl">
            Join a high-performing team delivering real impact for global
            clients.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

