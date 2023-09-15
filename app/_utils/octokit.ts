const { Octokit } = require("@octokit/core");

type configObject = {
    owner:string,
    repo?:string,
    headers:{}
}

// See usage explanation below
const callOctokit = async (apiRoute:string, username:string, repo?:string, caller?:string) => {

    const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GH_TOKEN
    })

    const configObject:configObject = {
        owner: username,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    }
    if(repo){
        configObject.repo = repo
    }
    
    const response = await octokit.request(`GET ${apiRoute}`, configObject)

    return response;
}

export default callOctokit

// Helper function to make authenticated requests against the GitHub API using octokit
// Parameters:
// apiRoute: The API's URL to make the request
// username: Github username
// repo: Optional parameter, used for requests that need the "repo" property on the config object