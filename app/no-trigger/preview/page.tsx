import type { Metadata } from "next";
import { AchievementBreakdown } from "../../components/achievement-breakdown";

export const metadata: Metadata = {
  title: "No Trigger Preview",
  description: "Preview of the reconstructed No Trigger screen.",
};

export default function NoTriggerPreviewPage() {
  return <AchievementBreakdown />;
}
