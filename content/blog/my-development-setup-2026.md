---
title: "My Development Setup in 2026"
date: "2025-12-28"
excerpt: "An overview of the tools, extensions, and configurations I use for web development. Updated for the new year."
---

Every developer has their own unique setup. Here's what I'm using in 2026 for web development.

## Code Editor

I use **VS Code** with a minimal setup focused on productivity:

### Extensions I Can't Live Without

| Extension | Purpose |
|-----------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| GitLens | Git superpowers |
| Tailwind CSS IntelliSense | CSS autocompletion |

### Theme & Font

- **Theme**: One Dark Pro
- **Font**: JetBrains Mono (with ligatures enabled)

## Terminal

My terminal setup is simple but effective:

```bash
# .zshrc essentials
alias dev="npm run dev"
alias gc="git commit -m"
alias gp="git push"
alias gs="git status"
```

## Browser DevTools

Chrome DevTools is my go-to for debugging. Key features I use daily:

1. **Network tab** for API debugging
2. **Console** with live expressions
3. **Elements** for CSS tweaking
4. **Lighthouse** for performance audits

## Project Scaffolding

For new projects, I typically start with:

```bash
npx create-next-app@latest my-project
```

Then add:
- Tailwind CSS for styling
- shadcn/ui for components
- TypeScript for type safety

## Conclusion

The best setup is the one that helps you ship. Don't spend too much time optimizing your tools—focus on building great things!
