import React from 'react';

const RepoListItem = ({repo, onRepoSelect}) => {

  return (
    <li onClick={() => onRepoSelect(repo.html_url)}>
      <h3 className="blueText">{repo.name}</h3>
      <p> Language:
        {repo.language !== null ? <span className="greenText"> {repo.language}</span> : <span className="redText"> Unknown </span>}
      </p>
      <p>Description:</p>
      {repo.description !== null ? <span className="greenText"> {repo.description}</span> : <span className="redText"> None </span>}
    </li>
  );

};

export default RepoListItem;
