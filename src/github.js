class GitHub {
    constructor() {
        this.baseUrl = 'https://api.github.com/users/';
    }

    async getUserData(username) {
        const profileResponse = await fetch(this.baseUrl + username);
        const profileData = await profileResponse.json();

        const reposResponse = await fetch(profileData.repos_url);
        const reposData = await reposResponse.json();

        return {
            profile: profileData,
            repos: reposData.slice(0, 5)
        };
    }
}
