import { VITE_API_SERVER_BASE_URL } from "../../common/constants/env_constants"

export const getUser = async () => {
    const userData = await fetch(`${VITE_API_SERVER_BASE_URL}user`, {
        credentials: 'include'
    });
    
    return (await userData.json());
}