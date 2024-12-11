import React, { useState } from "react";
import styled from "styled-components";
import { Sidebar, DarkMode } from "../components";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import showdown from "showdown";

const converter = new showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
  ghCodeBlocks: true,
  parseImgDimensions: true,
  simpleLineBreaks: true,
  openLinksInNewWindow: true,
  emoji: true,
});

const Box = styled.div`
  font-size: 1.18em;
  font-family: "Montserrat", sans-serif;
  padding-right: 1em;
  line-height: 165%;
`;

const ArticleCard = styled.div`
  // Code block styling
  pre {
    background: ${(props) => (props.darkMode ? "#1a1a1a" : "#f5f5f5")};
    padding: 1.2em;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1em 0;
    border: 1px solid ${(props) => (props.darkMode ? "#333" : "#e1e1e1")};
     
      max-width: 100%; /* Prevent it from exceeding the container width */
      white-space: pre-wrap; /* Allow wrapping for long lines */
  }

  // Inline code styling (backticks)
  code {
    font-family: "Fira Code", Consolas, Monaco, "Andale Mono", monospace;
    background: ${(props) => (props.darkMode ? "#2d2d2d" : "#f0f0f0")};
    color: ${(props) => (props.darkMode ? "#e6e6e6" : "#333")};
    padding: 0.2em 0.4em;
    border-radius: 4px;
    font-size: 0.9em;
    border: 1px solid ${(props) => (props.darkMode ? "#404040" : "#ddd")};
  }

  // Adjust code inside pre blocks
  pre code {
    background: none;
    padding: 0;
    border: none;
    font-size: 0.95em;
    line-height: 1.5;
    display: block;
  }

  // Language label for code blocks
  pre:before {
    content: attr(data-language);
    display: block;
    background: ${(props) => (props.darkMode ? "#333" : "#e1e1e1")};
    color: ${(props) => (props.darkMode ? "#ccc" : "#666")};
    font-size: 0.8em;
    padding: 0.2em 0.6em;
    border-radius: 4px;
    margin-bottom: 0.8em;
    width: fit-content;
  }

  background: ${(props) => (props.darkMode ? "rgb(17 24 39/1)" : "#ffffff")};
  color: white;
  border-radius: 8px;
  box-shadow: rgb(46, 64, 83) 0px 0.25em 0.3em;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1em;
    line-height: 1.7;
  }

  ul,
  ol {
    margin-left: 1.5em;
    margin-bottom: 1em;
  }

  // Links
  a {
    color: ${(props) => (props.darkMode ? "#6CCBFE" : "#0066cc")};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  // Blockquotes
  blockquote {
    border-left: 3px solid ${(props) => (props.darkMode ? "#666" : "#ddd")};
    margin: 1em 0;
    padding-left: 1em;
    color: ${(props) => (props.darkMode ? "#ccc" : "#666")};
    font-style: italic;
  }

  // Images
  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin: 1em 0;
  }

  // Tables
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1em 0;
  }

  th,
  td {
    padding: 0.5em;
    border: 1px solid ${(props) => (props.darkMode ? "#444" : "#ddd")};
    text-align: left;
  }

  th {
    background: ${(props) => (props.darkMode ? "#333" : "#f5f5f5")};
  }
`;

const ArticleContent = styled.div`
  color: ${(props) => (props.darkMode ? "#fff" : "#333")};

  h1,
  h2,
  h3 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  pre {
    background: ${(props) => (props.darkMode ? "#333" : "#f5f5f5")};
    padding: 1em;
    border-radius: 4px;
    overflow-x: auto;
  }

  code {
    font-family: monospace;
  }
`;

const Tag = styled.span`
  background: ${(props) => (props.darkMode ? "black" : "#eee")};
  color: ${(props) => (props.darkMode ? "white" : "#333")};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  font-size: 0.8em;
`;

const getArticle = (name) => {
  return require("../../content/articles/" + name + ".md");
};

const articles = {
  first: require("../../content/articles/first.md"),
  second: require("../../content/articles/second.md"),
  second: require("../../content/articles/second.md"),
  second: require("../../content/articles/second.md"),
};

const Articles = ({ data, darkMode, toggleDarkMode, pageContext }) => {
  const parseMarkdown = (content) => {
    try {
      const parsed = JSON.parse(content);
      const parts = parsed && parsed.default ? parsed.default.split("---") : [];

      if (parts.length >= 3) {
        const frontMatterLines = parts[1].trim().split("\n");
        const frontMatter = {};

        frontMatterLines.forEach((line) => {
          const [key, ...values] = line.split(":").map((s) => s.trim());
          if (key) {
            let value = values.join(":").trim();
            value = value.replace(/^["'](.*)["']$/, "$1");
            if (value.startsWith("[") && value.endsWith("]")) {
              value = value
                .slice(1, -1)
                .split(",")
                .map((v) => v.trim());
            }
            frontMatter[key] = value;
          }
        });
        const markdownContent = converter.makeHtml(parts[2].trim());
        return { frontMatter, markdownContent };
      }
      return { frontMatter: {}, markdownContent: content };
    } catch (error) {
      console.error("Error parsing markdown:", error);
      return { frontMatter: {}, markdownContent: content };
    }
  };

  return (
    <Layout darkMode={true}>
      <Sidebar active={"articles"} darkMode={true} />
      <div
        className="grid align-center"
        style={{
          perspective: "100rem",
          maxWidth: "93%",
          margin: "auto",
          position: "relative",
          gridTemplateColumns: "1fr",
        }}
      >
        <h1>Article</h1>
        <div
         className="articles-container"
          style={{
            display: "grid",
            gridTemplateColumns:
              pageContext && pageContext.name !== undefined ? "1fr" : "1fr 1fr",
          }}
        >
          
          {data?.allFile?.edges.map(({ node }, index) => {
            if (
              pageContext &&
              pageContext.name &&
              node.name !== pageContext.name
            )
              return false;
            const articleContent = getArticle(node.name);
            const { frontMatter, markdownContent } = parseMarkdown(
              JSON.stringify(articleContent)
            );

            return (
             
                <Box>
                  <Article
                    node={node}
                    collapsed={pageContext && pageContext.name !== undefined}
                    frontMatter={frontMatter}
                    markdownContent={markdownContent}
                  />
                </Box>
             
            );
          })}
        </div>
      </div>
      <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </Layout>
  );
};

const Article = ({ node, frontMatter, markdownContent, collapsed }) => {
  const darkMode = true;
  const [isExpanded, setIsExpanded] = useState(!collapsed);

  return (
    <>
      {collapsed && <Link to="/articles">Back</Link>}
      <ArticleCard key={node.id} darkMode={darkMode} expanded={isExpanded}>
        <div
          style={{
            marginBottom: "1rem",
            color: darkMode ? "#999" : "#666",
            padding: "1em 1em 0em 1em",
          }}
        >
          <h2>{node.name}</h2>
          {frontMatter.date && <span>📅 {frontMatter.date} • </span>}
          {frontMatter.author && <span>✍️ {frontMatter.author} • </span>}
          {frontMatter.readTime && <span>⏱️ {frontMatter.readTime}</span>}

          {Array.isArray(frontMatter.tags) && (
            <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              {frontMatter.tags.map((tag) => (
                <Tag key={tag} darkMode={darkMode}>
                  {tag.replace(/"/g, "")}
                </Tag>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            background: collapsed? 'rgb(42 46 53 / 1)': "linear-gradient(90deg, rgba(42, 46, 53, 1), rgba(60, 64, 74, 1), rgba(42, 46, 53, 1))",
            padding: "0em 1em 1em 1em",
          }}
        >
          {frontMatter.excerpt && (
            <p
              style={{
                fontSize: "1.1em",
                color: darkMode ? "#ccc" : "#666",
                marginBottom: "1.5rem",
              }}
            >
              {frontMatter.excerpt}
            </p>
          )}

          <div className="content-preview">
            {collapsed && (
              <div
                dangerouslySetInnerHTML={{
                  __html: markdownContent,
                }}
              />
            )}
          </div>

          {!collapsed ? (
            <Link to={"/articles/" + node.name}>Read more</Link>
          ) : null}
        </div>
      </ArticleCard>
    </>
  );
};
export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "articles" }
        extension: { regex: "/(md|mdx)/" }
      }
    ) {
      edges {
        node {
          id
          name
          relativePath
          internal {
            content
          }
        }
      }
    }
  }
`;

export default Articles;
