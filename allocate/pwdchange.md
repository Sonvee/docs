# 密码修改

## 接口

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/User/changepassword",
  method: "POST"
  data: {
      token: token,
      userid: userId,
      password: oldPassword,
      newpassword: newPassword,
    }
}
```

## 页面

<img src="/public/allocate/pwdchange.png" width="300"/>