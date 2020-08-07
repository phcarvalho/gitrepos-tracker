import React from 'react';

import './styles.css'

interface RepoItemProps {
  userName: string;
  repoName: string;
  avatarURL: string;
  repoURL: string;
}

const RepoItem: React.FC<RepoItemProps> = ({ userName, repoName, avatarURL, repoURL }) => {
  return (
    <article className="repo-item">
      <div className="repo-item-avatar">
        <img src={avatarURL} alt={userName}/>
      </div>
      <div className="repo-item-content">
        <h1>{userName}</h1>
        <p>{repoName}</p>
      </div>
    </article>
  )
}

export default RepoItem;