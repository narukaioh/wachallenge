const listUserInfo = UserInfo => () => {
  return UserInfo.find({})
}

const createUserInfo = UserInfo => attr => {
  const { name } = attr
  if (!name) throw new Error(`Name: ${name}`)
  const userInfo = new UserInfo({ name })
  return userInfo.save()
}

export default (UserInfo) => {
  return {
    listUserInfo: listUserInfo(UserInfo),
    createUserInfo: createUserInfo(UserInfo)
  }
}

