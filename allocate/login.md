# 进港主动分拨

## 接口

登录

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Logon/login",
  method: "POST"
  data: {
      userid: "zl"
      password: "Yaha321@"
      deviceid: "000"
    }
}
```

获取新 token

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Logon/createNewToken",
  method: "POST"
  data: {
      userid: "zl"
    }
}
```

查询

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Parameter/querytruck",
  method: "POST"
  data: {
      token: token,
      userid: "zl"
    }
}
```

## 页面

登录

<img src="/public/allocate/login.png" width="300"/>

主动分拨首页菜单

<img src="/public/allocate/index.png" width="300"/>