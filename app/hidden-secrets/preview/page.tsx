import type { Metadata } from "next";
import { MainScreen } from "./_components/main-screen";

export const metadata: Metadata = {
  title: "Hidden Secrets Preview",
  description: "Direct preview of the dashboard with hidden secrets state.",
};

export default function HiddenSecretsPreviewPage() {
  return (
    <main>
      <MainScreen repositoryLabel="sentina" />
    </main>
  );
}
