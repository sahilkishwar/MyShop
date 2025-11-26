# Deployment notes

This repository contains a `frontend/` React app and a `backend/` Node server.

What I added for you:

- A GitHub Actions workflow at `.github/workflows/deploy-frontend.yml` that:
  - runs on pushes to `main`
  - installs Node, builds the React app in `frontend/`, and publishes `frontend/build` to the `gh-pages` branch using `peaceiris/actions-gh-pages` and the built-in `GITHUB_TOKEN`.
- A top-level `.gitignore` to ignore `node_modules`, `frontend/build`, environment, and IDE files.

What you need to do locally:

1. Ensure `git` is installed and you're in the repository root:
```powershell
cd 'D:\Tech Projects\MyShop'
```

2. Stage and commit the new files:
```powershell
git add .github/workflows/deploy-frontend.yml .gitignore frontend/package.json frontend/package-lock.json README-deploy.md
git commit -m "Add GitHub Actions workflow and gitignore for Pages deploy"
```

3. If you haven't already, add the GitHub remote and push:
```powershell
git remote add origin https://github.com/sahilkishwar/MyShop.git
git branch -M main
git push -u origin main
```

4. The workflow will run at push and deploy to GitHub Pages. The site URL will be:

```
https://sahilkishwar.github.io/MyShop
```

Notes:
- If you want to use local deployment (`npm run deploy`), you already have `gh-pages` configured in `frontend/package.json` and can run it from `frontend/`.
- No repository secrets are required for this workflow because it uses the automatically provided `GITHUB_TOKEN`. If you later need to deploy to a different host or need secrets, add them in GitHub → Settings → Secrets.
