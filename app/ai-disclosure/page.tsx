import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "AI Disclosure — Just Be Real",
};

export default function AiDisclosure() {
  const content = readFileSync(
    join(process.cwd(), "content/legal/ai-disclosure.md"),
    "utf-8"
  );
  return <LegalPage title="AI Disclosure" content={content} />;
}
