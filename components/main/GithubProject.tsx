"use client";

import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import ProjectGitHubCard, {
  GitHubProjectProps,
} from "../sub/ProjectGitHubCard";
const API = "https://api.github.com";

const GitHubProject = () => {
  const allReposAPI = `${API}/users/fadaeixlii/repos?sort=updated&direction=desc`;

  const [projectsArray, setProjectsArray] = useState<GitHubProjectProps[]>([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);

      repoList = [...response.data.slice(0, 16)];

      setProjectsArray(repoList);
    } catch (error) {
      console.error(error);
    }
  }, [allReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div
      className="flex flex-wrap items-center justify-center w-full "
      onClick={() => {
        console.log("first");
      }}
    >
      {projectsArray.map((project, index) => (
        <ProjectGitHubCard key={`project-card-${index}`} {...project} />
      ))}
    </div>
  );
};

export default GitHubProject;
