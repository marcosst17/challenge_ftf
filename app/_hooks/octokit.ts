const { Octokit } = require("@octokit/core");

const useOctokit = async (username:string, repo:string) => {

    const octokit = new Octokit({
        auth: ''
    })
      
    const response = await octokit.request('GET /repos/{owner}/{repo}/commits', {
        owner: username,
        repo: repo,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    return response;
}

export default useOctokit
