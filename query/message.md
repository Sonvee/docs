# 消息查询

## 接口

```javascript
{
  baseurl: "http://pactl.shedi.com",
  apiurl: "/mobile/interfaces.php",
  method: "POST"
  data: {
      method: "findAnn",
      annType: "1", // 0新闻查询 / 1消息查询
    }
}
```

## 页面

消息列表

<img src="/public/query/message.png" width="300"/>

消息详情

<img src="/public/query/message-detail.png" width="300"/>