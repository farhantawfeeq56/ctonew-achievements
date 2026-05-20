import type { Metadata } from "next";
import { LinkRepositoryExperience } from "./_components/link-repository-experience";

export const metadata: Metadata = {
  title: "Hidden Secrets Preview",
  description: "Preview the repository linking experience for the hidden-secrets route.",
};

export default function PreviewPage() {
  return <LinkRepositoryExperience />;
}
