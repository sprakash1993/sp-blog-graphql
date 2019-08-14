let users = [{
  id: '1',
  name: 'Prakash',
  email: 'sad@aef.com'
}, {
  id: '2',
  name: 'asdaf',
  email: 'sad1@aef.com'
}, {
  id: '3',
  name: 'htk,cm',
  email: 'sad2@aef.com'
}];

let posts = [{
  id: '21',
  title: 'T1',
  body: 'body1',
  published: true,
  author: '1'
}, {
  id: '22',
  title: 'T2',
  body: 'body2',
  published: true,
  author: '1'
}, {
  id: '24',
  title: 'T4',
  body: 'body4',
  published: false,
  author: '2'
}];

let comments = [{
  id: '101',
  text: 'Comment 1',
  author: '1',
  post: '21'
}, {
  id: '102',
  text: 'Comment 2',
  author: '1',
  post: '22'
}, {
  id: '103',
  text: 'Comment 3',
  author: '3',
  post: '22'
}, {
  id: '104',
  text: 'Comment 4',
  author: '2',
  post: '24'
}];

const db = {
  users,
  posts,
  comments
}

export { db as default };