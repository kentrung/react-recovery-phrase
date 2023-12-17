# React Recovery Phrase
Code online: https://codesandbox.io/p/sandbox/recovery-phrase-uhbkgr

![image](https://github.com/kentrung/react-recovery-phrase/assets/15643762/c5e3ed02-7a73-480a-99ac-7600312b391b)


## First load
  - Cho sẵn 16 ô đáp án trống
  - Cho sẵn 16 tên tỉnh/thành phố
  - Mỗi lần F5 thì phải xáo trộn vị trí của 16 tên tỉnh/thành phố
  - Khi click vào tên thành phố thì sẽ fill vào đáp án trống
  - Khi click vào đáp án đã có giá trị thì giá trị sẽ được remove
  - Button `Submit` ở trạng thái disabled
  
## Khi chọn thành phố
  - Khi chọn 1 thành phố thì tên thành phố đó sẽ được fill vào đáp án trống, đồng thời ở trạng thái disabled không chọn được nữa
  - Khi chọn đủ 16 thành phố thì button `Submit` sẽ được enabled

## Khi chọn vào đáp án
  - Khi đáp án đã có giá trị thì giá trị đó sẽ được remove khỏi đáp án
  - Khi 16 ô đáp án đủ giá trị thì button `Submit` sẽ được enabled, không đủ thì disabled
