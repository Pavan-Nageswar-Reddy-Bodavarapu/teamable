const {app, server} = require('../server')

const request= require('supertest')


test('test request with valid payload', async function(){


  testPayload = {
    name:"test name",
    email:"test@gmail.com",
    interests:"Nothing"
  }


   const response = await request(app).post('/update-profile').send(testPayload)

   console.log(response.body)


   expect(response.status).toBe(200)
   expect(response.body).toHaveProperty("info")
   expect(response.body.info).toBe("User data updated successfully")


})


test('test request with invalid payload', async function(){


  testPayload = {}
  
   const response = await request(app).post('/update-profile').send(testPayload)

   console.log(response.body)


   expect(response.body).toHaveProperty("error")
   expect(response.body.error).toBe("Couldn't update user profile data")


})


test('test request with valid payload', async function(){


  testPayload = {
    name:"test name",
    email:"test",
    interests:"Nothing"
  }


   const response = await request(app).post('/update-profile').send(testPayload)

   console.log(response.body)


   expect(response.body).toHaveProperty("error")
   expect(response.body.error).toBe("Couldn't update user profile data")

   server.close()



})