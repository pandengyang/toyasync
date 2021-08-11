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

var g
function* main() {
  var token
  var profile

  try {
    token = yield login('kernelnewbies', '123456').then(
      function fullfilled(data) {
        g.next(data)
      },
      function rejected(error) {
        g.throw(error)
      }
    )
    console.log(token)

    profile = yield fetchProfile(token).then(
      function fullfilled(data) {
        g.next(data)
      },
      function rejected(error) {
        g.throw(error)
      }
    )
    console.log(profile)
  } catch (error) {
    console.log(error)
  }
}

g = main()
g.next()

console.log('END')
