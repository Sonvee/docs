# 新闻查询

## 接口

```javascript
{
  baseurl: "http://pactl.shedi.com",
  apiurl: "/mobile/interfaces.php",
  method: "POST"
  data: {
      method: "findAnn",
      annType: "0", // 0新闻查询 / 1消息查询 / 2服务价格查询
    }
}
```

## 页面

新闻列表

<img src="/public/query/news.png" width="300"/>

新闻详情

<img src="/public/query/news-detail.png" width="300"/>