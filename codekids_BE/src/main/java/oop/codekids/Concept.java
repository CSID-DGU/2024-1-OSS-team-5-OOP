package oop.codekids;

public enum Concept {
    ABSTRACT("추상화"),
    POLYMORPHISM("다형성"),
    ENCAPSULATION("캡슐화");

    private String concept;

    private Concept(String concept) {
        this.concept = concept;
    }
    public String getConcept() {
        return concept;
    }
}
