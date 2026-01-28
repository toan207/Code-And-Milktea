### Interface
- Interface như một menu trong cửa hàng, tức là `interface` đưa ra các tên gọi và kiểu trả về của một method.
- Các thuộc tính trong `interface` là các abtract method.
- Các thuộc tính trong `interface` phải là các thuộc tính **public**.
- Các biến trong `interface` phải là `final` và `static`.
- Class kế thừa `interface` sẽ phải có đầy đủ các method có trong `interface`.
- Class có thể kế thừa từ (extends) một class và implement (implements) nhiều `interface`.
- `interface` có thể kế thừa (extends) từ nhiều `interface`.

```java
interface Animal {
    void makeSound();
    void move();
}

class Dog implements Animal {
    @Override
    public void makeSound() {
        System.out.println("Woof woof");
    }

    @Override
    public void move() {
        System.out.println("Running on four legs");
    }
}

```

### Type Of Interface
- Normal interface: interface có các abstract method.
- Marker interface: interface không có abstract method.
- Functional interface / SAM interface (Single Abstract Method): interface chỉ có 1 abstract method.
- Marker interface thường được sử dụng để đánh dấu một class để nó có thể được sử dụng trong một số framework hoặc library.

```java
// Normal interface
interface Runnable {
    void run();
}

// Marker interface
interface MarkerInterface {}

// Functional interface / SAM interface (Single Abstract Method)
interface FunctionalInterface {
    void singleMethod();
}
```
