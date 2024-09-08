import { VITE_API_SERVER_BASE_URL } from "../../common/constants/env_constants"

export const getUser = async () => {
    const userData = await fetch(`${VITE_API_SERVER_BASE_URL}user`);
    const userInJson = await userData.json();
    
    if (userData.status !== 200) {
        throw new Error(
            
        );
    }

    return userInJson;
}