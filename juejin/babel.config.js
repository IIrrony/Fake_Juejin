module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  
  plugins: [
    ["prismjs", {
      languages: [
        "javascript",
        "css",
        "markup",
        "html",
        "cpp",
        "c",
        "java",
        "go",
        "json",
        "bash",
        "php",
        "sql",
        "python"
      ],
      plugins: [
        "line-numbers",
        "copy-to-clipboard",
        "show-language"
      ],
      theme: "twilight",
      css: true
    }]
  ]
}
