### Interface
- Interface như một menu trong cửa hàng, tức là `interface` đưa ra các tên gọi và kiểu trả về của một method.
- Các thuộc tính trong `interface` là các abtract method.
- Các thuộc tính trong `interface` phải là các thuộc tính **public**.
- Các biến trong `interface` phải là `final` và `static`.
- Class kế thừa `interface` sẽ phải có đầy đủ các method có trong `interface`.

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