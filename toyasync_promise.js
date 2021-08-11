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

function* main() {
  var token
  var profile

  try {
    token = yield login('kernelnewbies', '123456')
    console.log(token)

    profile = yield fetchProfile(token)
    console.log(profile)
  } catch (error) {
    console.log(error)
  }
}

function run(fn) {
  var g = fn()

  function next(error, data) {
    if (error) {
      g.throw(error)

      return
    }

    var result = g.next(data)

    if (result.done) {
      return
    }

    result.value.then(
      function fullfilled(data) {
        next(null, data)
      },
      function rejected(error) {
        next(error, null)
      }
    )
  }

  next(null, null)
}

run(main)

console.log('END')
