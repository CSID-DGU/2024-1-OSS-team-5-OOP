package oop.codekids;

public enum Concept {
    ABSTRACT("추상화"),
    POLYMORPHISM("다형성"),
    ENCAPSULATION("캡슐화");

    private final String message;

    Concept(String message) {
        this.message = message;
    }
}
