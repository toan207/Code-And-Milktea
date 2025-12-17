## Chanel
### Channel là gì?
- Là một kênh giao tiếp giữa các goroutine.
- Dữ liệu đưa vào channel sẽ là LIFO, tức là dữ liệu cuối cùng được đưa vào sẽ là dữ liệu đầu tiên được lấy ra.
- Cú pháp tạo channel:
    ```
    ch := make(chan int)
    ```
- Cú pháp gửi giá trị vào channel:
    ```
    ch <- 1
    ```
- Cú pháp nhận giá trị từ channel:
    ```
    v := <- ch
    ```
- **Lưu ý:** channel sẽ block routine hiện tại cho đến khi có giá trị được **gửi vào** channel hoặc có giá trị được **lấy ra** channel.

### Buffered Channel
- Sẽ không block khi gửi giá trị vào channel nếu channel chưa đầy.
- Khi channel đầy, nếu vẫn gửi giá trị vào channel, thì sẽ block cho đến khi có giá trị được lấy ra, tương tự như vậy với khi lấy giá trị ra khỏi channel.
- Dữ liệu trong buffered channel sẽ được ghi nhớ theo thứ tự FIFO, tức là dữ liệu đầu tiên được đưa vào sẽ là dữ liệu đầu tiên được lấy ra.
- Cú pháp tạo buffered channel:
    ```
    ch := make(chan int, 1)
    ```

### Range và Close
- Range được sử dụng để lặp qua các giá trị trong channel.
- Close được sử dụng để thông báo rằng channel không còn giá trị, đóng channel.
- Khi channel được đóng, range sẽ không block và sẽ trả về giá trị nil.
- Cú pháp range:
    ```
    for v := range ch {
        fmt.Println(v)
    }
    ```
- Cú pháp close:
    ```
    close(ch)
    ```
- Cú pháp nhận giá trị từ channel:
    ```
    v, ok := <- ch
    ```
- **Lưu ý:** Không cần thiết phải luôn luôn đóng channel, chỉ đóng khi chắc chắn rằng channel không còn giá trị ví dụ như khi muốn dừng lại range.

### Select
- Sử dụng khi có nhiều channel, chọn channel đầu tiên có giá trị.
- Cú pháp:
    ```
    for {
        select {
        case v := <- ch1:
            fmt.Println(v)
        case v := <- ch2:
            fmt.Println(v)
        case <-quit:
            fmt.Println("quit")
            break
        default:
            fmt.Println("default")
        }
    }
    ```

### sync.Mutex
- Mutex là một lock, dùng để lock và unlock một block code.
- Mutex có thể được sử dụng để tránh race condition khi có nhiều goroutine truy cập vào cùng một block code.
- Mutex lock cho đến khi được unlock, tức là chỉ có một goroutine có thể lock mutex tại một thời điểm.
- Cú pháp:
    ```
    lock := new(sync.Mutex)
    lock.Lock()
    // block code
    lock.Unlock()
    ```