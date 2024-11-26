import axios from "axios";

export const fetchUser = async (username)=>{
  try {
    const user = await axios.get(`https://api.github.com/users/${username}`);
    const topLanguage = await fetchLanguage(username);

    user.data.topLanguage = topLanguage;

    return user.data;

  } catch (error) {
    console.log("error in fetching user", error)

  }

}

const fetchLanguage = async (username)=>{
  try {
    const repos = await axios.get(`https://api.github.com/users/${username}/repos`);

    const topLanguage = repos.data.map((repo)=>{
      return repo.language

    })

    return getTopLanguages(topLanguage);

  } catch (error) {
    console.log(error);
  }
}

const getTopLanguages = (languages) =>{
  const filteredLanguages = languages.filter(lang => lang !== null);

  const languageCounts = filteredLanguages.reduce((counts, lang) => {
    counts[lang] = (counts[lang] || 0) + 1;

    return counts;
  }, {});

  const sortedLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1]);

  const topLang =  sortedLanguages.slice(0, 3);

  return topLang.map((lang)=>{
    return lang[0];
  })

}
