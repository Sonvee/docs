# 货代收货管理

## 接口

单号查询

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

## 页面

根据总单号查询

<img src="/public/allocate/receive.png" width="300"/>

单号详情

<img src="/public/allocate/receive-detail.png" width="300"/>

异常申诉

<img src="/public/allocate/receive-error.png" width="300"/>

接受货物

<img src="/public/allocate/receive-success.png" width="300"/>