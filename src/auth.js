export function getAuthForm() {
  return `
    <form class="mui-form" id="auth-form">
      <div class="mui-textfield mui-textfield--float-label">
        <input type="email" id="email" required>
        <label for="email">Email</label>
      </div>
       <div class="mui-textfield mui-textfield--float-label">
        <input type="password" id="password" required>
        <label for="password">Password</label>
      </div>
      <button
        class="mui-btn mui-btn--raised mui-btn--primary"
        type="submit"
      >
        Enter
      </button>
  </form>
  `
}

export function authWithEmailAndPassword(email,password) {

  const apiKey = `AIzaSyAgBxoAQC9y_OAA3qCZq5gba1L6MK3LPPc`
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`,{
    method: 'POST',
    body: JSON.stringify({
      email,password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => data.idToken)
}