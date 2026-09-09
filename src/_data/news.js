import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: true, linkify: true, breaks: true });
const DIR = path.join(process.cwd(), "content", "news");

// 유튜브 / 인스타 링크에서 임베드 주소를 뽑아냅니다.
function embedFor(url) {
  if (!url) return null;
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/);
  if (yt) return { kind: "youtube", src: `https://www.youtube-nocookie.com/embed/${yt[1]}` };
  const ig = url.match(/instagram\.com\/(?:p|reel)\/([\w-]+)/);
  if (ig) return { kind: "instagram", src: `https://www.instagram.com/p/${ig[1]}/embed` };
  return { kind: "link", src: url };
}

function langBlock(raw, fallback) {
  const src = raw || {};
  const title = (src.title || "").trim();
  const summary = (src.summary || "").trim();
  const body = (src.body || "").trim();
  if (!title && !body) return fallback ? { ...fallback, translated: false } : null;
  return {
    title,
    summary,
    bodyHtml: md.render(body),
    translated: true,
  };
}

export default function () {
  if (!fs.existsSync(DIR)) return [];

  const posts = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      const slug = data.slug || file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
      const ko = langBlock(data.ko, null);
      // 영문을 아직 안 썼으면 한글 내용으로 대체해 링크가 깨지지 않게 합니다.
      const en = langBlock(data.en, ko);
      return {
        slug,
        date: data.date ? new Date(data.date) : new Date(0),
        draft: data.draft === true,
        cover: data.cover || null,
        coverAlt: (data.cover_alt || "").trim(),
        video: data.video || null,
        embed: embedFor(data.video),
        ko,
        en,
      };
    })
    .filter((p) => !p.draft && p.ko)
    .sort((a, b) => b.date - a.date);

  return posts;
}
