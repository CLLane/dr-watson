import * as actions from '../actions';

describe('actions', () => {
  it('Should have a type of CREATE_USER', () => {
    const expectedAction = {
      type: 'CREATE_USER',
      user: [{name:'user', id: 1}]
    }

    let mockUser = [{ name: 'user', id: 1 }]

    const result = actions.createUser(mockUser)

    expect(result).toEqual(expectedAction)
  })
  it('Should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER',
    }


    const result = actions.removeUser()

    expect(result).toEqual(expectedAction)
  })
})
it('Should have a type of HAS_ERRORED', () => {
  const expectedAction = {
    type: 'HAS_ERRORED',
    errorMsg: { error: 'wrong'}
  }

  let mockError = { error: 'wrong' }

  const result = actions.hasErrored(mockError)

  expect(result).toEqual(expectedAction)
})
it('Should have a type of ADD_MESSAGE', () => {
  const expectedAction = {
    type: 'ADD_MESSAGE',
    message: [{ message: 'Oh no'}]
  }

  let mockMessage = [{ message: 'Oh no' }]

  const result = actions.addMessages(mockMessage)

  expect(result).toEqual(expectedAction)
})
it('Should have a type of CLEAR_MESSAGE', () => {
  const expectedAction = {
    type: 'CLEAR_MESSAGE',
    message: [{ message: 'Oh no'}]
  }

  let mockMessage = [{ message: 'Oh no' }]

  const result = actions.clearMessages(mockMessage)

  expect(result).toEqual(expectedAction)
})