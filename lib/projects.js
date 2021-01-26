import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'projects')

export async function getSortedProjectsData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsData = await Promise.all(fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }))
  // Sort posts by date
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllProjectTitles() {
  const fileNames = fs.readdirSync(projectsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        project: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getProjectData(title) {
  const fullPath = path.join(projectsDirectory, `${title}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id
  return {
    title,
    contentHtml,
    ...matterResult.data
  }
}
