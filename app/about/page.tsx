import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { TeamSection } from "@/components/team-section";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-primary">About Us</h1>
            <h2 className="text-xl text-muted-foreground">
              We Fix the Stuff That Makes Your Day Harder
            </h2>
          </header>

          <div className="space-y-4 text-muted-foreground">
            <p>
              You know that feeling when a simple task takes three times longer
              than it should? Or when you're explaining the same process for the
              hundredth time and thinking, "there has to be a better way"?
            </p>
            <p>That's where we come in.</p>
            <p>
              We're the people who see those frustrations and actually do
              something about them. No corporate speak, no overcomplicated
              solutions that create new problems. Just real fixes for real
              headaches.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              The Honest Truth About How We Started
            </h3>
            <p className="text-muted-foreground">
              Someone on our founding team was stuck in a mortgage application
              process that should've taken two weeks but dragged on for two
              months. Not because anyone was lazy or incompetent—just because
              the system was a mess of manual steps, disconnected tools, and
              "that's how we've always done it."
            </p>
            <p className="text-muted-foreground">Sound familiar?</p>
            <p className="text-muted-foreground">
              We realized this wasn't just a mortgage problem. It was
              everywhere. Insurance companies drowning in paperwork. Customer
              service teams answering the same questions on repeat. Logistics
              operations held together by spreadsheets and prayers.
            </p>
            <p className="text-muted-foreground">
              So we started fixing it. One broken process at a time.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              What We're Actually About
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  We're Translators
                </span>
                <br />
                You know your business inside out. Tech companies know their
                tools. But they don't always speak the same language. We
                translate. We figure out what you actually need (not what some
                software company thinks you need) and make it happen.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  We're Realists
                </span>
                <br />
                We won't promise you'll save 80% on costs overnight or automate
                everything by next Tuesday. Real improvement takes time. We're
                honest about what's possible, what's not, and what's going to
                take some elbow grease to pull off.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  We're Actually Nice to Work With
                </span>
                <br />
                Seriously. No condescending tech bros. No sales people who
                disappear after you sign. No support teams reading from scripts
                that don't answer your actual question. We're regular people who
                happen to be good at solving operational problems.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              The People Behind the Work
            </h3>
            <p className="text-muted-foreground">
              Our team is a mix of former bank managers who got tired of clunky
              systems, insurance processors who knew there was a better way,
              customer service reps who dealt with terrible tools, and tech
              folks who actually care about whether something works in the real
              world.
            </p>
            <p className="text-muted-foreground">
              We've been on your side of the table. We've had the same
              frustrations. That's why we get it.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">How We Actually Work</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  No BS Discovery
                </span>
                <br />
                We hop on a call and you tell us what's driving you crazy. We
                listen. We ask questions. We don't pretend to have all the
                answers before we've even understood the problem.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  We Build It With You, Not At You
                </span>
                <br />
                You're not going to see a "solution" for the first time on
                launch day and have to figure it out on the fly. We build in
                stages, show you what we're thinking, make changes based on your
                feedback. It's collaborative because, honestly, that's the only
                way it works.
              </p>
              <p>
                <span className="font-semibold text-foreground">
                  We Stick Around
                </span>
                <br />
                The companies we work with best are the ones we've been with for
                years. Not because they're locked into some contract, but
                because we keep making their lives easier and they keep coming
                back. That's the goal.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Real Talk: What We're Good At
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Taking processes that currently involve 47 emails and turning
                them into 3 clicks
              </li>
              <li>
                Making sure your team doesn't have to become tech experts to use
                new tools
              </li>
              <li>
                Handling the boring-but-critical stuff (compliance, security,
                documentation) so you don't have to
              </li>
              <li>Scaling operations without everything falling apart</li>
              <li>
                Being available when something goes wrong (because sometimes it
                does, and we don't pretend otherwise)
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">What We're Not</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>A magic bullet that fixes everything instantly</li>
              <li>
                A faceless call center where you get a different person every
                time
              </li>
              <li>A company that nickel-and-dimes you with hidden fees</li>
              <li>People who ghost you after the contract is signed</li>
              <li>
                The type to use words like "synergy" and "paradigm shift"
                unironically
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Who Actually Loves Working With Us
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">
                  The Overwhelmed Operations Manager
                </span>
                — You're juggling too many things and need someone to just
                handle stuff competently without constant supervision.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  The Growing Startup
                </span>
                — You're scaling fast and your scrappy early systems are
                starting to crack. You need real solutions but don't have
                enterprise budgets yet.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  The Frustrated IT Director
                </span>
                — You're stuck maintaining legacy systems while being told to
                "innovate." You need partners who understand tech debt is real
                and change management matters.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  The Customer-Obsessed Business Owner
                </span>
                — You care deeply about the experience you're delivering but
                operational chaos is getting in the way. You want to do right by
                your customers.
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Actual Philosophy</h3>
            <p className="text-muted-foreground">
              Business should be easier than it is. Technology should help, not
              create new headaches. People should enjoy their work, not spend it
              fighting with bad systems.
            </p>
            <p className="text-muted-foreground">
              We're not trying to disrupt anything or revolutionize industries.
              We're just trying to make your Tuesday afternoon a little less
              frustrating. And your Wednesday. And Thursday.
            </p>
            <p className="text-muted-foreground">
              One solved problem at a time.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Let's Just Talk</h3>
            <p className="text-muted-foreground">
              No pressure, no sales pitch. Tell us what's not working and we'll
              tell you honestly whether we can help. If we can't, we'll probably
              know someone who can.
            </p>
            <p className="text-muted-foreground">
              Sometimes you just need to vent to someone who gets it. We're good
              for that too.
            </p>
            <p className="text-muted-foreground font-semibold">
              [Start a Conversation]
            </p>
            <p className="text-sm text-muted-foreground/80">
              P.S. - If you're still reading this, you're probably the type of
              person who actually reads the fine print and thinks through
              decisions carefully. We appreciate that. Those are exactly the
              kinds of clients we love working with.
            </p>
          </div>
        </div>
      </section>
      <TeamSection />
      <Footer />
    </main>
  );
}
