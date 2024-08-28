import axios, { AxiosError, type Axios } from 'axios'

class Api {
  private axios: Axios
  public constructor(baseUrl: string) {
    this.axios = axios

    this.axios.defaults.baseURL = baseUrl
    this.axios.interceptors.response.use(
      (res) => res,
      async (e: Error) => {
        if (e instanceof AxiosError) {
        }
      }
    )
  }

  public async test() {
    return await this.axios.get('test')
  }
}

const api = new Api('www.google.de')
export default api