import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

type IMarkdownChildren = string | null | undefined;

export default function ModifiedMarkdown({ children }: { children: IMarkdownChildren }) {
  return (
    <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {children}
    </Markdown>
  );
}
