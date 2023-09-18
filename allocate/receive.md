# 货代收货管理

单号查询接口

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Agentrcv/getnorcvbill",
  method: "POST"
  data: {
      token: token,
      start: 0,
      limit: 10, // 显示条数
      voyageno: "总单号",
    }
}
```

接受货物

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Agentrcv/agentrcv",
  method: "POST"
  data: {
      token: token,
      voyageno: "总单号",
      passportid: 'FMFTc123l0002966', // PASSPORT_ID
    }
}
```