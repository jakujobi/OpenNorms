#!/usr/bin/env bash

# Create the main docs folder if it doesn't exist
mkdir -p docs

# Create subfolders for each major section
mkdir -p docs/01-getting-started
mkdir -p docs/02-basics
mkdir -p docs/03-college
mkdir -p docs/04-workplace
mkdir -p docs/05-friendships
mkdir -p docs/06-daily-life
mkdir -p docs/07-digital
mkdir -p docs/08-contributions

# Create sample Markdown files in each folder
cat > docs/01-getting-started/welcome.md <<EOL
---
title: Welcome
---

# Welcome

Welcome to OpenNorms! This is the introduction page.
EOL

cat > docs/01-getting-started/how-to-use.md <<EOL
---
title: How to Use
---

# How to Use

Here's how to use this handbook...
EOL

echo "Folder structure created and sample docs added!"
