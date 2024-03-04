import axios from 'axios';
export const apiObtainToken=async (): Promise<string | undefined |any> => {
    const api =`http://10.10.1.61:3000/api/v1/auth/login`;
    const data={
        "user": "admin",
        "password": "708090"
      }
    axios.post(api,data).then((response) => {
        console.log(response)
        return response.data?.token  
    }).catch((error) => {
        console.error('Error:', error)
        return null
    })
}
export const apiObtainProyectos=async (codigo :string): Promise<any> => {
    const api =`http://10.10.1.61:3000/api/v1/sigepro/projects/code/${codigo}`;
    const token = apiObtainToken();
    if(token){
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };
    axios.post(api,config).then((response) => {
        console.log(response)
        return response.data  
    }).catch((error) => {
        console.error('Error:', error)
        return null
    })

    }
    
    
}

