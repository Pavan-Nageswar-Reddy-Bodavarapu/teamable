const {isValidEmail, isEmptyPayload} = require('../validator')

test('valid email', function(){

  const testPayload={

    name:"test name",
    email:"test@gmail.com",
    interests:"Nothing"
  }

 const result = isValidEmail(testPayload)

 expect(result).toBe(false)

})


test('invalid email', function(){

  const testPayload={

    name:"test name",
    email:"testgmail.com",
    interests:"Nothing"
  }

 const result = isValidEmail(testPayload)

 expect(result).toBe(true)

})


test('empty payload',function(){

  const testPayload = {

  }

   const result = isEmptyPayload(testPayload)

   expect(result).toBe(true)


})

test('Non-empty payload', function(){

  const testPayload = {

    name:"test name",
    email:"test@gmail.com",
    interests:"Nothing"

  }

 const result = isEmptyPayload(testPayload)

 expect(result).toBe(false)
})