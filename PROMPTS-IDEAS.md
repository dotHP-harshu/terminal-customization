

# 1. Modern Dev Prompt ⭐ (My Favorite)

```text
╭─󰣇 Harsh@DESKTOP
│
├─󰉋 D:\Projects\SchoolFlow
├─ main ✓
├─󱐋 Node v24.2.0
├─Python 3.13.4
├─󰍛 14ms
│
╰─❯
```

---

# 2. Hacker Style

```text
┌──[harsh@desktop]
├──[~/SchoolFlow]
├──[git: main ✓]
└─$
```

---

# 3. PowerLevel10K Inspired

```text
╭─󰣇 Harsh
├─󰉋 SchoolFlow
├─ main ✔
├─⚡ 8ms
╰─❯
```

Rounded blocks.

---


# 4. Dashboard Prompt

```text
──────────────────────────────────

󰣇 Harsh
󰉋 SchoolFlow
 main

CPU 12%
RAM 8.2 GB
Battery 82%

──────────────────────────────────

❯
```

Updates live.

---

# 5. VS Code Theme

```text
Harsh
│
├── SchoolFlow
├── main
└──❯
```

Looks like Explorer.

---

# 6. Catppuccin

```text
╭─󰣇 Harsh
│
├─󰉋 SchoolFlow
├─ main
├─󰍛 5ms
│
╰─❯
```

Pastel colors.

---

# 7. Cyberpunk

```text
◢████ USER ████◣

󰣇 harsh
󰉋 D:\SchoolFlow
 main

>>> _
```

Bright magenta and cyan.

---

# 8. Apple Terminal Style

```text
Harsh at SchoolFlow

main ✓

❯
```

Elegant.

---

# 9. Matrix

```text
SYSTEM ONLINE

USER........Harsh
PROJECT.....SchoolFlow
BRANCH......main

>
```

---

Here are the rules I'd use for your prompt pack.

---

# 1. Minimal Information

Only show information that's useful **right now**.

### Good

```text
Harsh
D:\Projects\SchoolFlow
main ✓

❯
```

### Bad

```text
👨 Harsh 🐍 Python 🟢 Node ☕ Java 🦀 Rust 🐳 Docker ☁ Azure
Battery 94%
RAM 34%
CPU 5%
Weather 32°C
Music Spotify
Date
Time
Day
Internet Speed

❯
```

Most of that isn't helping you write code.

---

# 2. Use Nerd Font Icons Only

Avoid emojis.

❌

```
🐍 Python
🌿 Git
📁 Folder
👤 User
```

✅

```
󰉋 Directory
 Git
󰣇 User
󰈔 Project
󰍛 Time
󰌽 Windows
󰒋 Package
󰘬 Branch
󰄬 Success
󰅖 Error
```

They align better and look consistent.

---

# 3. Limit Colors

Maximum:

* 1 neutral
* 1 accent
* 1 success
* 1 error

Example

```
Gray
Blue
Green
Red
```

Not

```
Red
Blue
Purple
Pink
Yellow
Orange
Green
Cyan
```

---

# 4. Don't Color Everything

Good

```
󰉋 SchoolFlow
```

Only the icon is blue.

Bad

```
Entire line blue
```

The text should mostly remain white/light gray.

---

# 5. Path Is More Important Than Username

Developers care more about where they are than who they are.

Preferred

```
󰉋 D:\Projects\SchoolFlow
```

Instead of

```
Harsh@Desktop
```

Show username only once.

---

# 6. Git Should Stand Out

The branch is one of the most important things.

Example

```
 main
```

Dirty

```
 main *
```

Clean

```
 main ✓
```

Ahead

```
↑2
```

Behind

```
↓1
```

---

# 7. Smart Path

Instead of

```
D:\Projects\SchoolFlow\frontend\src\components\dashboard\widgets
```

show

```
~/SchoolFlow/.../widgets
```

or

```
…\dashboard\widgets
```

---

# 8. Show Languages Only When Needed

Inside a Node project

```
󰎙 v24.2.0
```

Outside

Nothing.

Same for

Python

```
󰌠 3.13
```

Java

```
󰬷 24
```

Rust

```
󱘗 1.90
```

---

# 9. One-Line Status

Instead of

```
Node
Python
Git
Time
```

Do

```
 main   󰎙24   󰌠3.13
```

Much cleaner.

---

# 10. Use Spacing

Don't cram everything.

Good

```
 main     󰎙24     󰌠3.13
```

Bad

```
main󰎙24󰌠3.13
```

---

# 11. Rounded Prompt

Instead of

```
>
```

or

```
$
```

Use

```
❯
```

or

```
❱
```

or

```

```

---

# 12. Only Two Accent Colors

For example

```
Blue → navigation

Purple → git
```

Everything else stays neutral.

---

# 13. Dashboard Should Be Optional

RAM

Battery

CPU

Execution Time

These belong in the **Dashboard** variant, not the everyday prompt.

---

# 14. Never Flash

No animations.

No blinking.

No rainbow text.

No ASCII fire.

Professional terminals stay stable.

---

# 15. Consistent Width

Every section should align.

Good

```
󰉋 SchoolFlow
 main
󰎙 v24
󰌠 3.13
```

Bad

```
󰉋 SchoolFlow
        main
Python
```

---

# 16. Semantic Colors

Never color randomly.

| Meaning   | Color      |
| --------- | ---------- |
| Normal    | Gray/White |
| Directory | Blue       |
| Git       | Purple     |
| Success   | Green      |
| Error     | Red        |
| Warning   | Yellow     |
| Info      | Cyan       |

---

# 17. Keep Height Small

Maximum

```
3–5 lines
```

Not

```
15 lines
```

Fastfetch already occupies vertical space.

---

# 18. Professional Palettes

I'd support only a few curated themes rather than dozens of random colors:

### Catppuccin Mocha ⭐

```
Text        #CDD6F4
Directory   #89B4FA
Git         #CBA6F7
Success     #A6E3A1
Error       #F38BA8
Muted       #6C7086
```

---

### Tokyo Night ⭐

```
Text        #C0CAF5
Directory   #7AA2F7
Git         #BB9AF7
Success     #9ECE6A
Error       #F7768E
Muted       #565F89
```

---

### Nord

```
Text        #ECEFF4
Directory   #81A1C1
Git         #B48EAD
Success     #A3BE8C
Error       #BF616A
Muted       #4C566A
```

---

### Gruvbox

```
Text        #EBDBB2
Directory   #83A598
Git         #D3869B
Success     #B8BB26
Error       #FB4934
Muted       #665C54
```

---

# 19. Performance

The prompt should render in **under 10 ms**. That means:

* Cache expensive operations where possible.
* Check for project files before querying language runtimes.
* Keep Git status checks lightweight.

---

## Final Design Philosophy

If I were designing this as an open-source project, I'd follow one principle:

> **Every character on the screen should earn its place.**

No decorative emojis, no unnecessary metrics, and no rainbow colors—just clean typography, meaningful icons, restrained color, and context that helps you code faster. That gives a prompt a polished, professional look that stays enjoyable to use over long development sessions.

