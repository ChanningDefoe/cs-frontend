import axios from 'axios'

export default async function (ctx, inject) {
  const $authAxios = axios.create({
    baseURL: process.env.API_URL,
    timeout: 30000,
    credentials: false,
  })

  $authAxios.interceptors.request.use(async (config) => {
    let token = ctx.$auth.strategy.token.get()
    if (token) {
      config.headers.common['Authorization'] = token
    }
    config.headers.common['Accept'] = 'application/json'

    return config
  })

  inject('authAxios', $authAxios)
  ctx.$authAxios = $authAxios
}
