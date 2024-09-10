import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'
import { text } from "stream/consumers";
import { OutboundLink } from "gatsby-plugin-google-gtag"
import logo from '../images/GME-white.png'; // Adjust the path if necessary

const query = graphql`
  {
    allContentfulGame(
      sort: {order: ASC}
    ) {
      edges {
        node {
          name
          link
          order
          cover {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  // maxWidth: "800px",
  // margin: "0 auto",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  textAlign: "center",
  margin: "50px auto 25px",
  fontSize: "3em",
  fontFamily: "Impact",
  color: "#FFFFFF",
}
const tagLineStyle = {
  margin: "0 auto 50px",
  textAlign: "center",
  color: "#333",
}

const tagLineLinkStyle = {
  color: "#FFFFFF",
  textDecoration: "none",
}

const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(query);

  // Track clicks on links to external websites
  function trackOutboundLink(url: string) {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', `clickGame:${url}`, {
        'event_category': 'outbound',
        'event_label': url,
        'transport_type': 'beacon',
        'event_callback': function () { document.location
        }
      });
    }
  }


  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
      <img src={logo} alt="Site Logo" style={{ display: 'inline', maxHeight: '1em', paddingRight: '6px' }} />
        GME Games
      </h1>
      <p style={tagLineStyle}>Brought to you by <OutboundLink href="https://gmeonbase.xyz/" style={tagLineLinkStyle} target="_blank">GME on Base</OutboundLink></p>

      {/* <section className="shelf"> */}
      <div className="shelves-container">
        {data.allContentfulGame.edges.map(({ node }: any) => (
          <div className="game-card" key={node.name}>
            <OutboundLink href={node.link} target="_blank" onClick={() => {
                trackOutboundLink(node.link)
              }
            }>
              <article className="bluray case" key={node.name}>
                <div>
                  <div className="logo"><img src="https://raw.githubusercontent.com/base-org/brand-kit/main/logo/symbol/Base_Symbol_Blue.svg" /></div>
                  <div className="img">
                    <span><img src={node.cover.file.url} alt={node.name} /></span>
                  </div>
                </div>
              </article>
              <div className="name">{node.name}</div>
            </OutboundLink>
          </div>
        ))}
      </div>


      {/* Footer */}
      <footer>
        <p>
          Built by <OutboundLink href="https://millionbithomepage.com/" target="_blank">Million Bit Homepage</OutboundLink>
        </p>
      </footer>


      {/* </section> */}

      {/* <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
        update in real-time. 😎
      </p>
      <ul style={doclistStyles}>
        {docLinks.map(doc => (
          <li key={doc.url} style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      /> */}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Base Game Shop</title>
