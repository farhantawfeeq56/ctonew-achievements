export type Problem = {
  number: string;
  title: string;
  description: string;
  tileClassName: string;
  href: string;
};

export const problems: Problem[] = [
  {
    number: "1",
    title: "No Trigger",
    description:
      "Users take meaningful actions, but the system stays silent. The app fails to convert user actions into curiosity moments.",
    tileClassName: "bg-tile-one",
    href: "/no-trigger",
  },
  {
    number: "2",
    title: "Hidden Secrets",
    description:
      "\u201cSecrets\u201d are designed to create curiosity. Secrets need not be too lost in the dark, they can have some directional tension.",
    tileClassName: "bg-tile-two",
    href: "/hidden-secrets",
  },
  {
    number: "3",
    title: "No Direction",
    description:
      "Even when users notice the achievements, they don\u2019t know what to do next. Awareness doesn\u2019t turn into action.",
    tileClassName: "bg-tile-three",
    href: "/no-direction",
  },
];
