import { Shell } from "@/components/Shell";

async function getHomepageData() {
  return {
    hostname: "mystic-node-01",
    status: "operational",
    time: new Date().toISOString(),
    intro:
      "Jona Mystic runt als een interactieve command console. Gebruik deze shell om projecten, stack en contactopties direct te vinden.",
    bootLines: [
      "init :: verifying signal routes",
      "load :: syncing project manifests",
      "ready :: waiting for next command",
    ],
    command: {
      prompt: "guest@jona:~$",
      value: "show --profile --active",
    },
    sections: [
      {
        title: "Capabilities",
        description: "Waar ik doorgaans op ingezet word.",
        rows: [
          { label: "Build", chips: ["Next.js", "TypeScript", "Design Systems"] },
          { label: "Ship", chips: ["CI/CD", "Vercel", "DX Automation"] },
        ],
      },
      {
        title: "Signals",
        description: "Kernwaarden tijdens samenwerking.",
        rows: [
          { label: "Principles", chips: ["Snel feedback", "Heldere scopes", "Ownership"] },
          { label: "Output", chips: ["Strakke UI", "Betrouwbare code", "Meetbare impact"] },
        ],
      },
    ],
    footer: {
      message: "© Jona Mystic // secure channel open",
      links: [
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
      ],
    },
  };
}

export default async function HomePage() {
  const data = await getHomepageData();

  return <Shell {...data} />;
}
