import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Service — Just Be Real",
};

export default function Terms() {
  const content = readFileSync(
    join(process.cwd(), "content/legal/terms.md"),
    "utf-8"
  );
  return <LegalPage title="Terms of Service" content={content} />;
}
