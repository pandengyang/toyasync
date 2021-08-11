function login(username, password, callback) {
  setTimeout(function () {
    if (username === 'kernelnewbies' && password === '123456') {
      callback(null, '8ef9e41db21905efdefd45241466f9b3')
    } else {
      callback(new Error('username or password error'), null)
    }
  }, 3000)
}

function fetchProfile(token, callback) {
  setTimeout(function () {
    if (token === '8ef9e41db21905efdefd45241466f9b3') {
      callback(null, "{'name':'kernelnewbies','age':18}")
    } else {
      callback(new Error('token error'), null)
    }
  }, 3000)
}

login('kernelnewbies', '123456', function onLogin(error, token) {
  if (error) {
    console.log(error)

    return
  }

  console.log(token)
  fetchProfile(token, function onFetchProfile(error, profile) {
    if (error) {
      console.log(error)

      return
    }

    console.log(profile)
  })
})
