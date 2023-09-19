# 短驳交货管理

车辆查询

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Dlv/getcarinfo",
  method: "POST"
  data: {
      token: token,
      truckid: "车牌号",
    }
}

```

交货详细信息

```javascript
{
  baseurl: "https://27.115.19.21:8022/airimp/index.php",
  apiurl: "/Dlv/getpassport",
  method: "POST"
  data: {
      token: token,
      truckid: "车牌号",
    }
}
```