import type { ComponentPropsWithoutRef } from "react";
import {
  MarkdownAsync,
  type Components,
  type ExtraProps,
} from "react-markdown";
import { cacheLife } from "next/cache";
import rehypePrettyCode, {
  type Options as PrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { CopyCodeButton } from "./copy-code-button";
import { cn } from "@/lib/utils";

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark-dimmed",
  keepBackground: false,
  bypassInlineCode: true,
  defaultLang: { block: "plaintext", inline: "plaintext" },
};

type FigureProps = ComponentPropsWithoutRef<"figure"> & ExtraProps;

const markdownComponents: Components = {
  a: ({ node, href, ...props }) => {
    void node;
    const external = href?.startsWith("http://") || href?.startsWith("https://");

    return (
      <a
        {...props}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      />
    );
  },
  figure: ({ node, className, ...props }: FigureProps) => {
    void node;
    const isCodeFigure = "data-rehype-pretty-code-figure" in props;

    return (
      <figure className={cn(isCodeFigure && "relative", className)} {...props}>
        {isCodeFigure ? <CopyCodeButton /> : null}
        {props.children}
      </figure>
    );
  },
  img: ({ node, alt, src, ...props }) => {
    void node;

    if (!src) return null;

    return (
      // Markdown assets do not carry intrinsic dimensions, so the article renderer
      // keeps native images responsive and lazy rather than guessing their geometry.
      // eslint-disable-next-line @next/next/no-img-element
      <img {...props} src={src} alt={alt ?? ""} loading="lazy" decoding="async" />
    );
  },
  table: ({ node, ...props }) => {
    void node;

    return (
      <div
        className="typeset-scroll"
        role="region"
        aria-label="Scrollable table"
        tabIndex={0}
      >
        <table {...props} />
      </div>
    );
  },
};

type ArticleMarkdownProps = {
  content: string;
};

export async function ArticleMarkdown({ content }: ArticleMarkdownProps) {
  "use cache";
  cacheLife("max");

  return (
    <div className="typeset max-w-[var(--reading-width)] [--typeset-flow:1.4em] [--typeset-font-body:var(--font-open-sans)] [--typeset-font-heading:var(--font-bitter)] [--typeset-font-mono:var(--font-source-code-pro)] [--typeset-leading:1.78] [--typeset-size:1rem] [&_[data-highlighted-chars]]:rounded-[2px] [&_[data-highlighted-chars]]:bg-[#dff39d]/25 [&_[data-highlighted-line]]:bg-white/8 [&_[data-highlighted-line]]:shadow-[inset_2px_0_0_#9fd818] [&_[data-line]]:px-5 [&_[data-rehype-pretty-code-figure]]:overflow-hidden [&_[data-rehype-pretty-code-figure]]:rounded-[2px] [&_[data-rehype-pretty-code-figure]]:border [&_[data-rehype-pretty-code-figure]]:border-[var(--cobalt)] [&_[data-rehype-pretty-code-figure]_code]:grid [&_[data-rehype-pretty-code-figure]_code]:min-w-max [&_[data-rehype-pretty-code-figure]_figcaption]:mt-0 [&_[data-rehype-pretty-code-figure]_figcaption]:border-b [&_[data-rehype-pretty-code-figure]_figcaption]:border-[#78a8ff]/35 [&_[data-rehype-pretty-code-figure]_figcaption]:bg-[#111c2a] [&_[data-rehype-pretty-code-figure]_figcaption]:px-5 [&_[data-rehype-pretty-code-figure]_figcaption]:py-3 [&_[data-rehype-pretty-code-figure]_figcaption]:pr-28 [&_[data-rehype-pretty-code-figure]_figcaption]:text-left [&_[data-rehype-pretty-code-figure]_figcaption]:font-mono [&_[data-rehype-pretty-code-figure]_figcaption]:text-[0.75rem] [&_[data-rehype-pretty-code-figure]_figcaption]:text-[#abb9c5] [&_[data-rehype-pretty-code-figure]_pre]:m-0 [&_[data-rehype-pretty-code-figure]_pre]:rounded-none [&_[data-rehype-pretty-code-figure]_pre]:bg-[#0b111b] [&_[data-rehype-pretty-code-figure]_pre]:px-0 [&_[data-rehype-pretty-code-figure]_pre]:py-5 [&_blockquote]:border-l [&_blockquote]:border-[var(--cobalt)] [&_blockquote]:font-serif [&_blockquote]:text-[1.08em] [&_blockquote]:italic [&_h2]:scroll-mt-[6rem] [&_h2]:tracking-[-0.02em] [&_h3]:scroll-mt-[6rem] [&_h3]:tracking-[-0.015em] [&_h4]:scroll-mt-[6rem] [&_h5]:scroll-mt-[6rem] [&_h6]:scroll-mt-[6rem] [&_li]:text-justify [&_p]:text-justify min-[901px]:[&_h2]:scroll-mt-[var(--typeset-flow)] min-[901px]:[&_h3]:scroll-mt-[var(--typeset-flow)] min-[901px]:[&_h4]:scroll-mt-[var(--typeset-flow)] min-[901px]:[&_h5]:scroll-mt-[var(--typeset-flow)] min-[901px]:[&_h6]:scroll-mt-[var(--typeset-flow)] [&_hr]:border-[var(--cobalt)] [&_table]:min-w-full [&_thead]:font-mono [&_thead]:text-[0.82em] [&_thead]:tracking-[0.04em] [&_thead]:text-[var(--cobalt)] [&_thead]:uppercase">
      <MarkdownAsync
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypePrettyCode, prettyCodeOptions]]}
        components={markdownComponents}
        skipHtml
      >
        {content}
      </MarkdownAsync>
    </div>
  );
}
