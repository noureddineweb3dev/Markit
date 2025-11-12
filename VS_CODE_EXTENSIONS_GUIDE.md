# VS Code Extensions & Keyboard Shortcuts Guide

## Recommended Extensions for React + TypeScript Development

---

## 1. **Prettier - Code Formatter**

**ID:** `esbenp.prettier-vscode`

### Why It's Useful:

- Auto-formats code on save to maintain consistent style
- Removes debates about code style in teams
- Works with JavaScript, TypeScript, CSS, JSON, Markdown
- Integrates seamlessly with ESLint
- One less thing to manually worry about

### Use Case:

Save any file → Prettier automatically formats it correctly

---

## 2. **ESLint**

**ID:** `dbaeumer.vscode-eslint`

### Why It's Useful:

- Catches bugs and code quality issues in real-time
- Shows errors/warnings inline as you type
- Auto-fix common issues with keyboard shortcut
- Prevents shipping broken code
- Essential for React best practices

### Use Case:

Instantly see linting errors with red squiggles; fix them with one click

---

## 3. **ES7+ React/Redux/React-Native Snippets**

**ID:** `dsznajder.es7-react-js-snippets`

### Why It's Useful:

- Quick code generation for React components
- Saves typing boilerplate code
- Speeds up development by 30-40%
- Covers hooks, functional components, Redux patterns
- Common snippets: `rfc` (React Functional Component), `usestate`, `useState`

### Use Case:

Type `rfc` → Tab → Instantly generates a complete React component template

---

## 4. **GitLens**

**ID:** `eamodio.gitlens`

### Why It's Useful:

- See who wrote each line of code (blame)
- View commit history inline
- Understand why changes were made
- Navigate git history easily
- Great for code reviews and debugging

### Use Case:

Hover over code → See who changed it last and why

---

## 5. **Error Lens**

**ID:** `usernamehw.errorlens`

### Why It's Useful:

- Shows error messages inline instead of hover-only
- Catch problems at a glance without hovering
- Faster debugging workflow
- Works with all linters and type checkers
- Reduces context switching

### Use Case:

Errors/warnings appear right next to the problematic code line

---

## 6. **Tailwind CSS IntelliSense**

**ID:** `bradlc.vscode-tailwindcss`

### Why It's Useful:

- Auto-complete for Tailwind CSS classes
- Preview colors and spacing values
- Learn Tailwind classes faster
- Faster UI development
- Works with any CSS framework

### Use Case:

Type `bg-` → See all available background colors with previews

---

## 7. **TypeScript Vue Plugin (Volar)**

**ID:** `ms-vscode.vscode-typescript-next`

### Why It's Useful:

- Enhanced TypeScript support and diagnostics
- Better type inference and error messages
- Faster performance for large projects
- Latest TypeScript features
- Improves IDE responsiveness

### Use Case:

Better type hints and faster code intelligence

---

## 8. **GitHub Copilot**

**ID:** `github.copilot`

### Why It's Useful:

- AI-powered code suggestions and completions
- Generates boilerplate code automatically
- Explains code and suggests improvements
- Speeds up development significantly
- Great for learning new patterns

### Use Case:

Start typing a function → Copilot suggests the complete implementation

---

## 9. **Remote Development Extension Pack**

**ID:** `ms-vscode-remote.vscode-remote-extensionpack`

### Why It's Useful:

- Develop in Docker containers
- Work on remote servers via SSH
- Consistent development environment across team
- No local environment setup needed
- Great for onboarding new developers

### Use Case:

Open project in Docker container with one click

---

## 10. **Makefile Tools**

**ID:** `ms-vscode.makefile-tools`

### Why It's Useful:

- Run build scripts and tasks from VS Code
- Organize npm scripts visually
- One-click execution of complex commands
- Better task management
- Useful for build automation

### Use Case:

Click tasks in sidebar instead of typing in terminal

---

---

# Keyboard Shortcuts Guide

## Custom Shortcuts (from `.vscode/keybindings.json`)

| Shortcut             | Action                   | When to Use                       |
| -------------------- | ------------------------ | --------------------------------- |
| **Ctrl+Shift+F**     | Format Document          | Format entire file with Prettier  |
| **Ctrl+K Ctrl+X**    | Trim Trailing Whitespace | Clean up line endings             |
| **Ctrl+Shift+I**     | Auto Indent              | Fix indentation in selection      |
| **Ctrl+Alt+N**       | New File                 | Create new file in Explorer       |
| **Ctrl+Alt+Shift+N** | New Folder               | Create new folder in Explorer     |
| **Ctrl+Shift+D**     | Delete Line              | Remove entire line                |
| **Alt+Up**           | Move Line Up             | Reorder code lines                |
| **Alt+Down**         | Move Line Down           | Reorder code lines                |
| **Ctrl+Shift+C**     | Duplicate Selection      | Copy line below cursor            |
| **Ctrl+L**           | Select Line              | Highlight entire line             |
| **Ctrl+Shift+L**     | Select All Occurrences   | Multi-edit same word              |
| **F2**               | Rename Symbol            | Rename variable/function globally |

## Built-in Shortcuts (Already in VS Code)

| Shortcut         | Action               |
| ---------------- | -------------------- |
| **Ctrl+/**       | Toggle Comment       |
| **Ctrl+B**       | Toggle Sidebar       |
| **Ctrl+J**       | Toggle Terminal      |
| **Ctrl+`**       | New Terminal         |
| **Ctrl+P**       | Quick File Open      |
| **Ctrl+Shift+P** | Command Palette      |
| **Ctrl+F**       | Find                 |
| **Ctrl+H**       | Find & Replace       |
| **F12**          | Go to Definition     |
| **Shift+F12**    | Go to References     |
| **Ctrl+Space**   | Trigger IntelliSense |
| **Ctrl+Shift+Z** | Redo                 |
| **Ctrl+Z**       | Undo                 |

---

# Installation Instructions

## Automatic Installation (via Extensions.json)

1. Open VS Code
2. You should see a notification: **"Workspace recommends the following extensions"**
3. Click **"Install All"** or **"Show Recommendations"**

## Manual Installation

### Via Command Palette:

1. Press `Ctrl+Shift+P`
2. Type: `Extensions: Install from Recommendations`
3. VS Code will list all recommended extensions
4. Click install on each

### Via Extensions Marketplace:

1. Press `Ctrl+Shift+X` (Extensions sidebar)
2. Search for extension name
3. Click **Install**

### Via Terminal (One-liner):

```bash
code --install-extension esbenp.prettier-vscode && \
code --install-extension dbaeumer.vscode-eslint && \
code --install-extension dsznajder.es7-react-js-snippets && \
code --install-extension eamodio.gitlens && \
code --install-extension usernamehw.errorlens && \
code --install-extension bradlc.vscode-tailwindcss && \
code --install-extension ms-vscode.vscode-typescript-next && \
code --install-extension github.copilot && \
code --install-extension ms-vscode-remote.vscode-remote-extensionpack && \
code --install-extension ms-vscode.makefile-tools
```

---

# Quick Start Checklist

- [ ] Install all recommended extensions
- [ ] Reload VS Code window (`Ctrl+Shift+P` → "Reload Window")
- [ ] Test Prettier: Edit a file and save (Ctrl+S)
- [ ] Test ESLint: Make a syntax error and hover
- [ ] Try React snippet: Type `rfc` + Tab in a `.tsx` file
- [ ] Test keyboard shortcuts: Try `Alt+Down` to move a line
- [ ] Customize shortcuts: Press `Ctrl+K Ctrl+S` to open keybindings

---

# Tips & Tricks

1. **Prettier + ESLint**: They work together! ESLint catches bugs, Prettier formats code.
2. **GitHub Copilot**: Free for students with GitHub Student Pack; paid for others.
3. **GitLens**: Use `Ctrl+Shift+P` → "GitLens: Show File History" for full blame.
4. **Error Lens**: If too noisy, reduce "Error Lens: Exclude" in settings.
5. **Keyboard Shortcuts**: Press `Ctrl+K Ctrl+S` to view and customize all shortcuts.

---

Generated: November 12, 2025
