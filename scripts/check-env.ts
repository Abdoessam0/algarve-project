// scripts/check-env.ts
import fs from "fs";
import path from "path";
import process from "process";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

const cwd = process.cwd();
const files = [".env", ".env.local"]
  .map((f) => path.join(cwd, f))
  .filter((p) => fs.existsSync(p));

for (const file of files) {
  const parsed = dotenv.config({ path: file });
  dotenvExpand.expand(parsed);
}

const required = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_ANON_KEY"] as const;

const missing = required.filter((k) => !process.env[k] || String(process.env[k]).trim() === "");
if (missing.length) {
  console.error(`❌ Missing required env vars: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("✅ Supabase env vars present.");
