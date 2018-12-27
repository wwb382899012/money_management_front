import Cookies from 'js-cookie';

const TokenKey = 'Session-token';
const UserKey = 'uuid';
const StatusKey = 'sidebar';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {
    expires: 1
  });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

export function getUserId() {
  return Cookies.get(UserKey);
}

export function setUserId(userId) {
  return Cookies.set(UserKey, userId, {
    expires: 1
  });
}

export function removeUserId() {
  return Cookies.remove(UserKey);
}


export function getSidebarStatus() {
  return Cookies.get(StatusKey);
}

export function setSidebarStatus() {
  return Cookies.set(StatusKey, 1, {
    expires: 30
  });
}

export function removeSidebarStatus() {
  return Cookies.remove(StatusKey);
}
