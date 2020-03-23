# VSCode Front Matter Helpers

[![Version](https://vsmarketplacebadge.apphb.com/version/eliostruyf.vscode-front-matter.svg)](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-front-matter)
&nbsp;&nbsp;
[![Installs](https://vsmarketplacebadge.apphb.com/installs/eliostruyf.vscode-front-matter.svg)](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-front-matter)
&nbsp;&nbsp;
[![Rating](https://vsmarketplacebadge.apphb.com/rating/eliostruyf.vscode-front-matter.svg)](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-front-matter&ssr=false#review-details)

> **Info**: Extension is still in development, but can already be tested out.

This VSCode extension simplifies working with front matter of your markdown articles when using a static site generator like: Hugo, Jekyll, Hexo, NextJs, Gatsby, and many more... For example, with the extension you can keep a list of used tags, categories and add/remove them from your article.

## Available commands:

**Front Matter: Create <tag | category>**

Creates a new <tag | category> and allows you to automatically include it into your post

![Create tag or category](https://github.com/estruyf/vscode-front-matter/raw/master/./assets/create-tag-category.gif)
  
**Front Matter: Insert <tags | categories>**

Inserts a selected <tags | categories> into the front matter of your article/post/...

![Insert tags or categories](https://github.com/estruyf/vscode-front-matter/raw/master/./assets/insert-tag-category.gif)

**Front Matter: Export all tags & categories to your settings**

Export all the already used tags & categories in your articles/posts/... to your user settings

**Front Matter: Remap or remove tag/category in all articles**

This is commands helps you quickly update/remap or delete a tag or category in all your markdown files. You'll be asked to select the taxonomy type (*tag* or *category*), the old taxonomy value and the new one (leave the input field *blank* to remove the tag/category). 

> **Info**: Once the remapping/deleting process is completed. The taxonomy tags/categories will be updated in your user settings.

**Front Matter: Set current date**

Update the `date` property of the current article/post/... to the current date & time.

> **Optional**: if you want, you can specify the format of the date property by adding your own preference in your settings. Settings key: `frontMatter.taxonomy.dateFormat`. Check [date-fns formating](https://date-fns.org/v2.0.1/docs/format) for more information which patterns you can use.

**Front Matter: Generate slug based on article title**

Generates a clean slug for your article. It removes known stop words, punctuations, and special characters. 

Example:
```
title: Just a sample page with a title
slug: sample-page-title
```

If you want, you can also specify a prefix and suffix which can be added to the slug. Use the following settings to do this: `frontMatter.taxonomy.slugPrefix` and `frontMatter.taxonomy.slugSuffix`. By default both options are not provided and will not add anything to the slug.

> **Info**: At the moment only English stop words are supported.

## Where is the data stored?

The tags and categories are stored in the project VSCode user settings. You can find them back under: `.vscode/settings.json`.

```json
{
  "frontMatter.taxonomy.tags": [],
  "frontMatter.taxonomy.categories": []
}
```

## Additional extension settings

The extension has more settings which allow you to further configure it to your needs. Here is a list of settings which you can set:

- `frontMatter.taxonomy.indentArrays`
  - Specify if arrays in front matter are indented. Default: `true`. If you do not want to indent the array values, you can update it with the following setting change:

```json
{
  "frontMatter.taxonomy.indentArrays": false
}
```

- `frontMatter.taxonomy.noPropertyValueQuotes`
  - Specify the property names of which you want to remove the quotes in the output value. **Warning**: only use this when you know what you are doing. If you want to for instance remove the quotes from the date property, you can add the following:

```json
{
  "frontMatter.taxonomy.noPropertyValueQuotes": ["date"]
}
```

## Usage

- Start by opening the command prompt:
  - Windows: ⇧+ctrl+P
  - Mac: ⇧+⌘+P
- Use one of the commands from above

## Feedback / issues / ideas

Please submit them via creating an issue in the project repository: [issue list](https://github.com/estruyf/vscode-front-matter/issues).