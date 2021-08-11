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

login('kernelnewbies', '123456', function onLogin(err, token) {
  if (err) {
    console.log(err)

    return
  }

  console.log(token)
  fetchProfile(token, function onFetchProfile(err, profile) {
    if (err) {
      console.log(err)

      return
    }

    console.log(profile)
  })
})
