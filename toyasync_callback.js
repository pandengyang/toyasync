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
      callback(new Error('token error'), null)
    }
  }, 3000)
}

function thunkify(fn) {
  var args = Array.prototype.slice.call(arguments, 1)

  return function (cb) {
    args.push(cb)

    return fn.apply(null, args)
  }
}

function* main() {
  var token
  var profile

  try {
    token = yield thunkify(login, 'kernelnewbies', '123456')
    console.log(token)

    profile = yield thunkify(fetchProfile, token)
    console.log(profile)
  } catch (e) {
    console.log(e)
  }
}

function run(fn) {
  g = fn()

  function next(error, data) {
    if (error) {
      g.throw(error)

      return
    }

    var result = g.next(data)

    if (result.done) {
      return
    }

    result.value(next)
  }

  next(null, null)
}

run(main)

console.log('END')
