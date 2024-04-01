import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.miramontewinery.com/",
  match: "https://www.miramontewinery.com/**",
  maxPagesToCrawl: 300,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
