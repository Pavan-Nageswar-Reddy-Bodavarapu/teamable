function isValidEmail(payload){

  return !payload.email.includes('@')
}

function isEmptyPayload(payload){

  return Object.keys(payload).length === 0

}

module.exports = {

  isValidEmail,
  isEmptyPayload


}