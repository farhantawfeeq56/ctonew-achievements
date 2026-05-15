import type { Metadata } from "next";
import { LinkRepositoryExperience } from "./_components/link-repository-experience";

export const metadata: Metadata = {
  title: "Link Repository Preview",
  description: "Preview the repository linking experience for the no-trigger route.",
};

export default function PreviewPage() {
  return <LinkRepositoryExperience />;
}
