# 电报查询

## 接口

```javascript
{
  baseurl: "http://pactl.shedi.com",
  apiurl: "/mobile/interfaces.php",
  method: "POST"
  data: {
      method: "getShip",
      shipId: "航班号",
      shipDate: "航班日期", // 例如'20230918'
    }
}
```

## 页面

查询

<img src="/public/query/telegram.png" width="300"/>