
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

interface RepoProps {
  name: string;
}

interface RepoData {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

async function fetchRepo(name: string): Promise<RepoData> {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repository");
  }

  return response.json();
}

const Repo = async ({ name }: RepoProps) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
