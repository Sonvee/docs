# 运单查询

### 总运单号查询

接口

```javascript
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

## 进境

### 货物基本信息

### 理货明细

### 提货明细

## 出境

### 状态

### 货物基本信息

### 出口航班信息

### 出口运单运抵放行信息

## 中转

### 状态

### 进境货物基本信息

### 进境理货明细

### 进境提货明细

### 出口货物基本信息

### 出口航班信息
