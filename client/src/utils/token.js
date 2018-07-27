// Get token of current user
export function getToken() {
  let token = localStorage.getItem('user')
  if (token) {
  	return token.substr(1).slice(0, -1)
  }
  return null
}
