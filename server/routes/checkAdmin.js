export default function checkAdmin(req) {
  if (req.auth?.payload.permissions[0] === 'admin') {
    return
  } else {
    const error = new Error('User is not an admin')
    // error.status = 403
    throw error
  }
}
