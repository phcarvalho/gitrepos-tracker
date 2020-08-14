import React from 'react';
import { MdErrorOutline } from 'react-icons/md'

import './styles.css';

export interface Issue {
  id: number;
  title: string;
  repository_url: string;
  labels: [
    {
      id: number;
      name: string;
      color: string;
    }
  ]
}

interface IssueItemProps {
  issue: Issue
}

const IssueItem: React.FC<IssueItemProps> = ({ issue }) => {
  return (
    <a href={issue.repository_url} className="issue-item-link" >
      <article className="issue-item">
        <div className="issue-title">
          <MdErrorOutline size={18} />
          <p>
            {issue.title}
          </p>
        </div>
        <div className="issue-label-container">
          {issue.labels.map(label => (
            <div key={label.id} className="issue-label" style={{ background: `#${label.color}` }}>
              {label.name}
            </div>
          ))}
        </div>
      </article>
    </a>
  )
}

export default IssueItem