
//allow us get data from github
class Github{
  constructor(){
    // if we reqest more the 100 an hour we need API key
    this.client_id = '7791f661cfe401f06697';
    this.client_secret = '7791f661cfe401f06697';
  }

  // we need the github user profile and repose
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}

