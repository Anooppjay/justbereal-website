import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy — Just Be Real",
};

export default function Privacy() {
  const content = readFileSync(
    join(process.cwd(), "content/legal/privacy-policy.md"),
    "utf-8"
  );
  return <LegalPage title="Privacy Policy" content={content} />;
}
