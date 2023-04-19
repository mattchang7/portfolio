import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const experiencesDirectory = path.join(process.cwd(), "experience");

export async function getSortedExperiencesData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(experiencesDirectory);

  const allExperiencessData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(experiencesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Use remark to convert markdown into HTML string
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // Combine the data with the id
      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    })
  );
  // Sort posts by date
  return allExperiencessData.sort((a, b) =>
    new Date(a.startDate) > new Date(b.startDate) ? -1 : 1
  );
}
