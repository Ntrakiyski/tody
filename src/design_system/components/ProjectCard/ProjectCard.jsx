import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../Card/Card.jsx';

export const ProjectCard = ({ title, summary, imageSrc, link, className = '' }) => (
  <Card
    imageSrc={imageSrc}
    title={title}
    description={summary}
    cta={
      link && (
        <Link 
          to={link} 
          className="text-accentOrange font-semibold hover:underline transition-all"
        >
          Read case study →
        </Link>
      )
    }
    className={className}
  />
);
