import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell } from "@/components/layout/PageShell";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, Send, Download, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Harsha Motupalli" },
      { name: "description", content: "Get in touch with Harsha Motupalli." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setSending(false);
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <PageShell
      eyebrow="Let's Talk"
      title="Get in Touch"
      sub="Recruiters, founders, collaborators — drop a message or reach out on any channel."
    >
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
        <form onSubmit={submit} className="glass-strong rounded-3xl p-8 space-y-5">
          <Field label="Name" error={errors.name}>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-lg transition"
              placeholder="Your name"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-lg transition"
              placeholder="you@company.com"
            />
          </Field>
          <Field label="Message" error={errors.message}>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-base transition resize-none"
              placeholder="Tell me about the opportunity or idea…"
            />
          </Field>
          <button
            type="submit"
            disabled={sending}
            className="glow-ring inline-flex items-center gap-2 rounded-2xl bg-[var(--gradient-primary)] px-6 py-3 text-primary-foreground font-medium text-sm hover:scale-[1.02] transition disabled:opacity-60"
          >
            {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Send Message
          </button>
        </form>

        <div className="space-y-4">
          <ContactLink href={`mailto:${profile.email}`} icon={<Mail size={18} />} label="Email" value={profile.email} />
          <ContactLink href={profile.socials.linkedin} icon={<Linkedin size={18} />} label="LinkedIn" value="harsha-motupalli" />
          <ContactLink href={profile.socials.github} icon={<Github size={18} />} label="GitHub" value="HarshaMotupalli" />
          <a
            href={profile.resumeUrl}
            download
            className="block glass rounded-2xl p-5 hover:border-primary/40 transition group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--gradient-primary)] flex items-center justify-center text-primary-foreground">
                  <Download size={18} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Resume</div>
                  <div className="text-sm font-medium">Download PDF</div>
                </div>
              </div>
              <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition">↓</span>
            </div>
          </a>
        </div>
      </div>
    </PageShell>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary">{label}</label>
      {children}
      {error && <div className="text-xs text-destructive mt-1">{error}</div>}
    </div>
  );
}

function ContactLink({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 glass rounded-2xl p-5 hover:border-primary/40 transition group"
    >
      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </a>
  );
}
