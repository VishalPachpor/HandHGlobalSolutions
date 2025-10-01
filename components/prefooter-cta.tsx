import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PreFooterCta() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-3 text-foreground">
          Ready to simplify operations?
        </h2>
        <p className="text-muted-foreground mb-6">
          Start a conversation and we’ll respond within one business day.
        </p>
        <Link href="/contact">
          <Button className="bg-primary hover:bg-secondary text-primary-foreground">
            Start a conversation
          </Button>
        </Link>
      </div>
    </section>
  );
}
