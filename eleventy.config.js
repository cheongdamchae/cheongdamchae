export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy({ "content/media": "images/news" });

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  eleventyConfig.addFilter("dateKo", (d) => {
    const t = new Date(d);
    return `${t.getFullYear()}년 ${t.getMonth() + 1}월 ${t.getDate()}일`;
  });
  eleventyConfig.addFilter("dateEn", (d) => {
    return new Date(d).toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric",
    });
  });
  eleventyConfig.addFilter("dateIso", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("dateFmt", (d, lang) => {
    const t = new Date(d);
    if (lang === "ko") return `${t.getFullYear()}년 ${t.getMonth() + 1}월 ${t.getDate()}일`;
    return t.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
