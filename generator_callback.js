function login(username, password, callback) {
  setTimeout(function () {
    if (username === 'kernelnewbies' && password === '123456') {
      callback(null, '8ef9e41db21905efdefd45241466f9b3')
    } else {
      callback(new Error('username or password erroror'), null)
    }
  }, 3000)
}

function fetchProfile(token, callback) {
  setTimeout(function () {
    if (token === '8ef9e41db21905efdefd45241466f9b3') {
      callback(null, "{'name':'kernelnewbies','age':18}")
    } else {
      callback(new Error('token erroror'), null)
    }
  }, 3000)
}

var g
function* main() {
  var token
  var profile

  try {
    token = yield login(
      'kernelnewbies',
      '123456',
      function onLogin(error, data) {
        if (error) {
          g.throw(error)

          return
        }

        g.next(data)
      }
    )
    console.log(token)

    profile = yield fetchProfile(token, function onFetchProfile(error, data) {
      if (error) {
        g.threw(error)

        return
      }

      g.next(data)
    })
    console.log(profile)
  } catch (e) {
    console.log(e)
  }
}

g = main()
g.next()

console.log('END')
