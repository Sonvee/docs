# 运单查询

## 接口

```javascript
// 根据总运单号查询
{
  baseurl: "http://pactl.shedi.com",
  apiurl: "/mobile/interfaces.php",
  method: "POST"
  data: {
      // method: getImpBybill(进境) / getExpByBill(出境) / getTranByBill(中转)
      method: "getImpBybill", 
      billNo: "123456"
    }
}
```

## 页面

### 进境

<img src="/public/query/waybill_01.png" width="300"/>

货物基本信息

理货明细

提货明细

### 出境

<img src="/public/query/waybill_02.png" width="300"/>

状态

货物基本信息

出口航班信息

出口运单运抵放行信息

### 中转

<img src="/public/query/waybill_03.png" width="300"/>

状态

进境货物基本信息

进境理货明细

进境提货明细

出口货物基本信息

出口航班信息
