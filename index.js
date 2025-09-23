const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page for our first server!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// :name 就是一个动态参数
app.get('/users/:name', (req, res) => {
  // 通过 req.params.name 来获取 URL 中 name 部分的值
  const userName = req.params.name;
  // 使用模板字符串来构建动态的响应
  res.send(`Hello, ${userName}!`);
});

app.get('/search', (req, res) => {
  // 通过 req.query 对象来获取查询参数
  const keyword = req.query.keyword;

  // 判断用户是否提供了 keyword 参数
  if (keyword) {
    res.send(`You are searching for: "${keyword}"`);
  } else {
    res.send('Please provide a keyword to search.');
  }
});

app.get('/api/user', (req, res) => {
  const userData = {
    id: 123,
    username: 'mylinux',
    email: 'user@example.com',
    hobbies: ['coding', 'reading', 'gaming']
  };

  // 使用 res.json() 方法将 JavaScript 对象作为 JSON 发送
  res.json(userData);
});
