import type { Metadata } from "next";
import { MainScreen } from "./_components/main-screen";

export const metadata: Metadata = {
  title: "Hidden Secrets Preview",
  description: "Direct preview of the dashboard for the hidden-secrets route.",
};

export default function HiddenSecretsPreviewPage() {
  return (
    <main className="min-h-screen bg-[#05050A] text-[#F2F1F7]">
      <MainScreen repositoryLabel="unblur-app" isVisible={true} />
    </main>
  );
}
