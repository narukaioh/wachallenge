const listUserInfo = UserInfo => () => {
  return UserInfo.find({})
}

const createUserInfo = UserInfo => attr => {
  if (!attr) throw new Error(`Attr: ${attr}`)
  const userInfo = new UserInfo(attr.userInfo)
  return userInfo.save()
}

export default (UserInfo) => {
  return {
    listUserInfo: listUserInfo(UserInfo),
    createUserInfo: createUserInfo(UserInfo)
  }
}

