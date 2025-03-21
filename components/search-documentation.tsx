"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, X } from "lucide-react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { ArticleMeta } from "@/lib/markdown"

interface Category {
  id: string
  title: string
  description: string
  url: string
}

interface SearchDocumentationProps {
  articles: ArticleMeta[]
  categories: Category[]
}

export function SearchDocumentation({ articles, categories }: SearchDocumentationProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([])
  const [filteredArticles, setFilteredArticles] = useState<ArticleMeta[]>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Fonction de recherche
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCategories([])
      setFilteredArticles([])
      return
    }

    const query = searchQuery.toLowerCase()

    // Filtrer les catégories
    const matchedCategories = categories.filter(
      (category) => category.title.toLowerCase().includes(query) || category.description.toLowerCase().includes(query),
    )

    // Filtrer les articles
    const matchedArticles = articles.filter(
      (article) => article.title.toLowerCase().includes(query) || article.description.toLowerCase().includes(query),
    )

    setFilteredCategories(matchedCategories)
    setFilteredArticles(matchedArticles)
  }, [searchQuery, articles, categories])

  // Gérer le clic en dehors du composant de recherche
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearching(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Gérer la navigation avec les touches
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsSearching(false)
    } else if (e.key === "Enter" && filteredArticles.length > 0) {
      router.push(`/documentation/${filteredArticles[0].category}/${filteredArticles[0].slug}`)
      setIsSearching(false)
      setSearchQuery("")
    }
  }

  // Fonction pour effacer la recherche
  const clearSearch = () => {
    setSearchQuery("")
    inputRef.current?.focus()
  }

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search documentation..."
          className="w-full appearance-none bg-background pl-8 pr-10 shadow-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsSearching(true)}
          onKeyDown={handleKeyDown}
        />
        {searchQuery && (
          <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-9 w-9" onClick={clearSearch}>
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>

      {isSearching && (searchQuery || filteredCategories.length > 0 || filteredArticles.length > 0) && (
        <div className="absolute top-full z-10 mt-2 w-full rounded-md border bg-background shadow-md">
          <div className="p-4">
            {filteredCategories.length === 0 && filteredArticles.length === 0 ? (
              <p className="text-center text-sm text-muted-foreground py-6">No results found</p>
            ) : (
              <>
                {filteredCategories.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Categories</h3>
                    <ul className="space-y-2">
                      {filteredCategories.map((category) => (
                        <li key={category.id}>
                          <Link
                            href={category.url}
                            className="block rounded-md p-2 hover:bg-muted"
                            onClick={() => setIsSearching(false)}
                          >
                            <div className="font-medium">{category.title}</div>
                            <div className="text-sm text-muted-foreground">{category.description}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {filteredArticles.length > 0 && (
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Articles</h3>
                    <ul className="space-y-2">
                      {filteredArticles.map((article) => (
                        <li key={article.slug}>
                          <Link
                            href={`/documentation/${article.category}/${article.slug}`}
                            className="block rounded-md p-2 hover:bg-muted"
                            onClick={() => setIsSearching(false)}
                          >
                            <div className="font-medium">{article.title}</div>
                            <div className="text-sm text-muted-foreground">{article.description}</div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              Category: {categories.find((c) => c.id === article.category)?.title || article.category}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

