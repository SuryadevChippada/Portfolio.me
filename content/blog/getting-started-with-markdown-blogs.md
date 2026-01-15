---
title: "Getting Started with Markdown Blogs"
date: "2026-01-15"
excerpt: "Learn how to add new blog posts to your portfolio using simple markdown files."
---

Welcome to your new markdown-powered blog! This post will show you how easy it is to create and publish new content.

## How to Create a New Post

Creating a new blog post is simple:

1. Create a new `.md` file in the `/content/blog` folder
2. Add frontmatter at the top (title, date, excerpt)
3. Write your content in markdown
4. That's it! Your post will automatically appear on the site

## Frontmatter Explained

Every blog post starts with **frontmatter** - a section at the top of the file wrapped in `---` that contains metadata:

```yaml
---
title: "Your Post Title"
date: "2026-01-15"
excerpt: "A brief description shown in previews"
---
```

## Markdown Features

You can use all standard markdown features:

### Text Formatting

- **Bold text** using `**double asterisks**`
- *Italic text* using `*single asterisks*`
- `Inline code` using backticks

### Code Blocks

```javascript
// You can include code with syntax highlighting
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Blockquotes

> "The best way to predict the future is to create it."
> — Peter Drucker

### Lists

- Item one
- Item two
- Item three

### Links

Visit the [Next.js documentation](https://nextjs.org/docs) to learn more.

## File Naming

The filename becomes the URL slug. For example:
- `my-first-post.md` → `/blog/my-first-post`
- `getting-started.md` → `/blog/getting-started`

Use lowercase letters, numbers, and hyphens for best results.

## Tips for Writing

1. Keep titles concise and descriptive
2. Write meaningful excerpts for better previews
3. Use headings to organize long posts
4. Include code examples when relevant
5. Add images to make posts more engaging

Happy blogging!
