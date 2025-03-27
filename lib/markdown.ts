import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface ArticleMeta {
  slug: string
  title: string
  description: string
  category: string
  author: string
  date: string
  order?: number
}

export interface Article extends ArticleMeta {
  content: string
}

const contentDirectory = path.join(process.cwd(), "content")

// Modifions la fonction getArticleBySlug pour formater la date
export function getArticleBySlug(category: string, slug: string): Article {
  const filePath = path.join(contentDirectory, "documentation", category, `${slug}.md`)
  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  // Formater la date si c'est un objet Date
  const formattedDate =
    data.date instanceof Date
      ? data.date.toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : data.date

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    author: data.author,
    date: formattedDate,
    content,
    order: data.order,
  }
}

// Modifions également la fonction getAllArticles pour formater les dates
export function getAllArticles(): ArticleMeta[] {
  const categories = fs.readdirSync(path.join(contentDirectory, "documentation"))

  const articles: ArticleMeta[] = []

  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, "documentation", category)
    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath)

      files.forEach((file) => {
        if (file.endsWith(".md")) {
          const filePath = path.join(categoryPath, file)
          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data } = matter(fileContents)
          const slug = file.replace(".md", "")

          // Formater la date si c'est un objet Date
          const formattedDate =
            data.date instanceof Date
              ? data.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : data.date

          articles.push({
            slug,
            title: data.title,
            description: data.description,
            category: data.category,
            author: data.author,
            date: formattedDate,
            order: data.order,
          })
        }
      })
    }
  })

  return articles
}

// Modifions également la fonction getArticlesByCategory pour formater les dates
export function getArticlesByCategory(category: string): ArticleMeta[] {
  const categoryPath = path.join(contentDirectory, "documentation", category)

  if (!fs.existsSync(categoryPath)) {
    return []
  }

  const files = fs.readdirSync(categoryPath)
  const articles: ArticleMeta[] = []

  files.forEach((file) => {
    if (file.endsWith(".md")) {
      const filePath = path.join(categoryPath, file)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContents)
      const slug = file.replace(".md", "")

      // Formater la date si c'est un objet Date
      const formattedDate =
        data.date instanceof Date
          ? data.date.toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : data.date

      articles.push({
        slug,
        title: data.title,
        description: data.description,
        category: data.category,
        author: data.author,
        date: formattedDate,
      })
    }
  })

  return articles
}

export function getAllCategories() {
  const categories = fs.readdirSync(path.join(contentDirectory, "documentation"))

  return categories.filter((category) => {
    const categoryPath = path.join(contentDirectory, "documentation", category)
    return fs.statSync(categoryPath).isDirectory()
  })
}

