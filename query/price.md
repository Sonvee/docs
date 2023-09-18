# 服务价格查询

接口

```javascript
{
  baseurl: "http://pactl.shedi.com",
  apiurl: "/mobile/interfaces.php",
  method: "POST"
  data: {
      method: "findAnn",
      annType: "2", // 0新闻查询 / 1消息查询 / 2服务价格查询
    }
}
```