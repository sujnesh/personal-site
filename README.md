# sujnesh.com

Personal website built with Astro.

## Why this setup

- Free hosting with GitHub Pages
- Custom domain support (`sujnesh.com`)
- Easy publishing with Markdown content collections

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Add content quickly

Create a new blog draft:

```bash
npm run new:blog -- "My New Post"
```

Create a new project draft:

```bash
npm run new:project -- "My New Project"
```

Then edit the generated file:

- Blogs: `src/content/blog/*.md`
- Projects: `src/content/projects/*.md`

## Build

```bash
npm run build
```

## Free deploy (GitHub Pages)

This repo already includes:

- `.github/workflows/deploy.yml` for automatic deploy on push to `main`
- `public/CNAME` for `sujnesh.com`

### One-time GitHub setup

1. Push this project to a GitHub repository.
2. In GitHub repo settings, go to `Pages`.
3. Set source to `GitHub Actions`.
4. Push to `main` branch and wait for deploy workflow to complete.

### Namecheap DNS records

In Namecheap, set:

- `A` record for `@` to `185.199.108.153`
- `A` record for `@` to `185.199.109.153`
- `A` record for `@` to `185.199.110.153`
- `A` record for `@` to `185.199.111.153`
- `CNAME` for `www` to `<your-github-username>.github.io`

After propagation, GitHub Pages will issue HTTPS for your domain.
