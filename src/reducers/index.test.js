import {errorMsg} from './errorMsg';
import {messages} from './messages';
import {user} from './user';

describe('user', () => {
  it('should return a user object', () => {
    let mockAction = {
      type: 'CREATE_USER',
      user: [{ name: 'user', id: 1 }]
    }
    expect(user([], mockAction)).toEqual([{ name: 'user', id: 1 }])
  })
  it('should return null', () => {
    let mockAction = {
      type: 'REMOVE_USER',
    }
    expect(user([], mockAction)).toEqual(null)
  })
  it('should return state', () => {
    let mockAction = {
      type: '',
    }
    expect(user(null, mockAction)).toEqual(null)
  })
})
describe('Message', () => {
  it('should return a user object', () => {
    let mockAction = {
      type: 'ADD_MESSAGE',
      message: { message: 'user', isUser: true }
    }
    expect(messages([], mockAction)).toEqual([{ message: 'user', isUser: true }])
  })
  it('should return null', () => {
    let mockAction = {
      type: 'CLEAR_MESSAGE',
      message: { message: 'user', isUser: true }
    }
    expect(messages([], mockAction)).toEqual([{ message: 'user', isUser: true }])
  })
  it('should return state', () => {
    let mockAction = {
      type: '',
    }
    expect(messages([], mockAction)).toEqual([])
  })
})
describe('errorMessage', () => {
  it('should return a user object', () => {
    let mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: { message: 'user'}
    }
    expect(errorMsg([], mockAction)).toEqual({ message: 'user'})
  })
  it('should return null', () => {
    let mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: { message: 'user' }
    }
    expect(errorMsg([], mockAction)).toEqual({ message: 'user'})
  })
  it('should return state', () => {
    let mockAction = {
      type: '',
    }
    expect(errorMsg('', mockAction)).toEqual('')
  })
})