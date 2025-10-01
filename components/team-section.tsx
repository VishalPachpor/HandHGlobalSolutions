import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  linkedInUrl?: string;
};

export function TeamSection() {
  const members: TeamMember[] = [
    {
      name: "Hrushikesh Dakshinkar",
      role: "Founding Team / Operations",
      imageSrc: "/founder.jpeg",
      linkedInUrl: "https://www.linkedin.com/in/hrushikesh-dakshinkar08082003/",
    },
  ];

  const isSingle = members.length === 1;

  return (
    <section id="team" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
          <p className="text-muted-foreground mt-2">
            People who make it happen
          </p>
        </div>

        <div
          className={
            isSingle
              ? "grid grid-cols-1 place-items-center"
              : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
          }
        >
          {members.map((m) => (
            <Card key={m.name} className="w-full max-w-xs p-6 text-center">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full mb-4">
                <Image
                  src={m.imageSrc}
                  alt={m.name}
                  width={112}
                  height={112}
                  className="h-28 w-28 object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {m.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{m.role}</p>
              {m.linkedInUrl && (
                <div className="mt-4 flex justify-center">
                  <Link
                    href={m.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-primary"
                    aria-label={`${m.name} LinkedIn profile`}
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </Link>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
