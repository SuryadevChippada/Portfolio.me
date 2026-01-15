import { Mail, MapPin, Send } from "lucide-react"

/**
 * Contact Section Component
 * -------------------------
 * Provides multiple ways to get in touch:
 * - Email link
 * - Location info
 * - Brief availability message
 *
 * Update the contact details below with your own information.
 */

/* Contact information - customize with your details */
const contactInfo = {
  email: "hello@yourname.com",
  location: "San Francisco, CA",
  availability: "Open to freelance projects and full-time opportunities.",
}

export function ContactSection() {
  return (
    <section id="contact" className="mb-12">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Contact content */}
      <div className="p-6 rounded-lg bg-card border border-border">
        {/* Availability message */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {contactInfo.availability} Feel free to reach out if you'd like to collaborate or just want to say hello.
        </p>

        {/* Contact details */}
        <div className="space-y-4">
          {/* Email */}
          <a
            href={`mailto:${contactInfo.email}`}
            className="
              flex items-center gap-3 text-foreground
              hover:text-primary transition-colors
            "
          >
            <Mail className="w-5 h-5 text-primary" />
            <span>{contactInfo.email}</span>
          </a>

          {/* Location */}
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>{contactInfo.location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={`mailto:${contactInfo.email}`}
          className="
            inline-flex items-center gap-2 mt-6 px-4 py-2
            bg-primary text-primary-foreground
            rounded-md font-medium text-sm
            hover:opacity-90 transition-opacity
          "
        >
          <Send className="w-4 h-4" />
          Send a Message
        </a>
      </div>

      {/* Footer credit */}
      <p className="mt-12 text-center text-sm text-muted-foreground">
        Built with <span className="text-primary">Next.js</span> and <span className="text-primary">Tailwind CSS</span>
      </p>
    </section>
  )
}
