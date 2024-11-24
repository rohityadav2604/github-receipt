import axios from "axios";

export const fetchUser = async ()=>{
  const user = await axios.get('https://api.github.com/users/rohityadav2604');

  return user.data;
}
