---
id: structures
sidebar_label: Структуры
title: Структуры в Java
---

https://youtu.be/aoOOkxO7cak

```java
package oop;
​
import java.time.LocalDateTime;
​
public class Structures {
​
    static class Person {
        public String firstName;
        public String lastName;
        public String email;
​
        public Person(String firstName, String lastName, String email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
        }
​
    }
​
    static class Point {
        public int x;
        public int y;
​
        public Point(int a, int b) {
            x = a;
            y = b;
        }
    }
​
    public static void main(String[] args) {
​
        Person person = new Person(
                "Alex",
                "Kotov",
                "alexko@in6k.com"
        );
        System.out.println(toEmailContact(person));
​
        Point point = new Point(1, 1);
        printPoint(point);
        Point point2 = move(point, 2, 3);
        printPoint(point2);
    }
​
    private static String toEmailContact(Person person) {
        return String.format("%s %s <%s>",
                person.firstName,
                person.lastName,
                person.email
        );
    }
​
    private static void printPoint(Point point) {
        System.out.printf("(%d, %d)", point.x, point.y);
    }
​
    static Point move(Point point, int offsetX, int offsetY) {
        return new Point(
                point.x + offsetX,
                point.y + offsetY
        );
    }
}
```