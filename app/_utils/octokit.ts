const { Octokit } = require("@octokit/core");

type configObject = {
    owner:string,
    repo?:string,
    headers:{}
}

const callOctokit = async (apiRoute:string, username:string, repo?:string) => {

    const octokit = new Octokit({
        auth: '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'
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
