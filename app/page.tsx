import { redirect } from "next/navigation";

/**
 * Root route — immediately redirect to the primary locale (Japanese).
 * Mongolian and English are available via the language toggle.
 */
export default function RootPage() {
  redirect("/ja");
}
