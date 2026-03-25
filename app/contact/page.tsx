import type { Metadata } from "next"
import { ContactPageClient } from "./contact-page-client"

export const metadata: Metadata = {
  title: "Contact | Sherif Yusuff",
  description:
    "Contact Sherif Yusuff for freelance work, remote opportunities, website projects, product design, or WhatsApp consultation.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
