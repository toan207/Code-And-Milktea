### Inner Class
- Sử dụng khi cần định nghĩa class trong class.
- Có 4 loại inner class:
    - Static inner class
    - Local inner class
    - Anonymous inner class
    - Method local inner class

#### Ví dụ
```java
public class Outer {
    private int x = 10;
    
    public class Inner {
        public void display() {
            System.out.println("x = " + x);
        }
    }
}
```

### Static Inner Class
- Là inner class không có tham chiếu đến instance của outer class.
- Có thể truy cập static member của outer class.

#### Ví dụ
```java
public class Outer {
    private static int x = 10;
    
    public static class StaticInner {
        public void display() {
            System.out.println("x = " + x);
        }
    }
}
```


### Local Inner Class
- Là inner class được định nghĩa trong method của outer class.
- Không có truy cập đến instance member của outer class.
- Có thể truy cập static member của outer class.

#### Ví dụ
```java
public class Outer {
    private static int x = 10;
    
    public void display() {
        class LocalInner {
            public void display() {
                System.out.println("x = " + x);
            }
        }
    }
}
```

### Anonymous Inner Class
- Là inner class không có tên và không có constructor.
- Thường dùng khi định nghĩa interface hoặc abstract class.

#### Ví dụ
```java
public class Outer {
    public abstract void display();
}

class Main {
    public static void main(String[] args) {
        Outer outer = new Outer() {
            @Override
            public void display() {
                System.out.println("x = " + 10);
            }
        };
        outer.display();
    }
}
```