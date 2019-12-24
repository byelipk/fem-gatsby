import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import '../styles/hero.css';

const Hero = () => {
  const srcSet = useStaticQuery(graphql`
    query {
      xxs: file(relativePath: { eq: "farm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      xs: file(relativePath: { eq: "farm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sm: file(relativePath: { eq: "farm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      md: file(relativePath: { eq: "farm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      lg: file(relativePath: { eq: "farm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      xl: file(relativePath: { eq: "farm.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 4858, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const sources = [
    srcSet.xxs.sharp.fluid,
    {
      ...srcSet.xs.sharp.fluid,
      media: `(min-width: 200px)`
    },
    {
      ...srcSet.sm.sharp.fluid,
      media: `(min-width: 400px)`
    },
    {
      ...srcSet.md.sharp.fluid,
      media: `(min-width: 800px)`
    },
    {
      ...srcSet.lg.sharp.fluid,
      media: `(min-width: 1200px)`
    },
    {
      ...srcSet.xl.sharp.fluid,
      media: `(min-width: 1400px)`
    },
  ]

  return (
    <BackgroundImage Tag="section" fadeIn="soft" fluid={sources}>
      <div className="hero">
        <h1>Welcome to My Online Home</h1>
        <p>
          Hello to all the boys and girls.{' '}
          <span role="img" aria-label="wave">
            👋
          </span>
        </p>
        <Link to="/about">Learn More About MEEEEEE</Link>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
