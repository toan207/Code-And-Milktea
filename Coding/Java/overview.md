### Java JVM
- Trong JVM có 3 vùng nhớ chính:
    - Heap
    - Stack
    - Metaspace (Method Area)
    - String Pool

#### Heap
- Heap chứa các object, các array, string pool
- Đặc điểm:
    - Chia sẻ giữa các thread
    - Được GC (Garbage Collection)
    - Tốc độ chậm hơn so với Stack
    - Lỗi OutOfMemoryError khi Heap đầy

#### Stack
- Stack chứa các biến và các method, reference đến các object trong Heap
- Mỗi thread có Stack riêng
- Đặc điểm:
    - Không chia sẻ giữa các thread
    - Không được GC (Garbage Collection)
    - Tốc độ nhanh hơn so với Heap
    - Lỗi StackOverflowError khi Stack đầy

#### Metaspace (Method Area)
- Metaspace chứa các class metadata
>Metadata là thông tin về class, method, field, constant pool, ... dưới dạng bytecode
- Đặc điểm:
    - Chia sẻ giữa các thread
    - Được GC (Garbage Collection)
    - Lỗi OutOfMemoryError khi Metaspace đầy
    - Không nằm trong Heap
    - Dùng bộ nhớ native OS
    - Có thể bị OutOfMemoryError khi Metaspace đầy

### Tổng hợp
| Đặc điểm | Heap | Stack | Metaspace |
| :--- | :--- | :--- | :--- |
| **Nội dung lưu trữ** | Object, Array, String Pool | Biến cục bộ, Method, Reference | Class metadata |
| **Phạm vi** | Chia sẻ giữa các Thread | Riêng biệt cho mỗi Thread | Chia sẻ giữa các Thread |
| **Garbage Collection** | Có | Không | Có |
| **Tốc độ truy cập** | Chậm | Nhanh | - |
| **Lỗi thường gặp** | `OutOfMemoryError` | `StackOverflowError` | `OutOfMemoryError` |
| **Vị trí bộ nhớ** | RAM (JVM) | RAM (JVM) | Native Memory (OS) |
