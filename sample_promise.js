function login(username, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (username === 'kernelnewbies' && password === '123456') {
        resolve('8ef9e41db21905efdefd45241466f9b3')
      } else {
        reject(new Error('username or password error'))
      }
    }, 3000)
  })
}

function fetchProfile(token) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (token === '8ef9e41db21905efdefd45241466f9b3') {
        resolve("{'name':'kernelnewbies','age':18}")
      } else {
        reject(new Error('token error'))
      }
    }, 3000)
  })
}

login('kernelnewbies', '123456')
  .then(function fullfilled(value) {
    console.log(value)
    return fetchProfile(value)
  })
  .then(function fullfilled(value) {
    console.log(value)
  })
  .catch(function rejected(error) {
    console.log(error)
  })
