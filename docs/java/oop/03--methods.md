---
id: methods
sidebar_label: 💻 Methods
title: Methods in Java
---

https://youtu.be/FpwfyjCMqyc

## Code

```java title="Game.java"
package oop.methods;

import java.util.Arrays;

public class Game {
    public static final char EMPTY_CELL = ' ';
    public static final char X = 'x';
    public static final char Z = '0';
    private char[][] field;
    char awaitingPlayer;

    Game() {
        this(3);
    }

    Game(char [][] field) {
        this.field = field;
    }

    Game(int size) {
        field = new char[size][size];
        for (char[] row : field)
            Arrays.fill(row, EMPTY_CELL);
        awaitingPlayer = X;
    }

    public boolean isInProgress() {
        for(char[] row: field) {
            for (char cell : row) {
                if (cell == EMPTY_CELL) return true;
            }
        }
        return false;
    }

    public void render(Renderer renderer) {
        for(char[] row: field) {
            renderer.openRow();
            for (char cell : row) {
                renderer.drawCell(cell);
            }
            renderer.closeRow();
        }
    }

    interface Renderer {
        void openRow();
        void drawCell(char cell);
        void closeRow();
    }

    public boolean makeTurn(int x, int y) {
        if (field[x - 1][y - 1] != EMPTY_CELL) return false;
        field[x - 1][y - 1] = awaitingPlayer;
        awaitingPlayer = awaitingPlayer == X ? Z : X;
        return true;
    }

    public char getCell(int x, int y) {
        return field[x - 1][y - 1];
    }
}
```

```java title="GameTest.java"
package oop.methods;

import org.junit.jupiter.api.Test;

import static oop.methods.Game.X;
import static oop.methods.Game.Z;
import static org.junit.jupiter.api.Assertions.*;

class GameTest implements Game.Renderer {

    private String renderOutput;

    @Test
    void gameState() {
        Game game = new Game();
        assertTrue(game.isInProgress());
    }

    @Test
    void turn() {
        // given
        Game game = new Game();
        
        game.makeTurn(1, 1); // when 
        assertEquals(X, game.getCell(1, 1)); // then

        game.makeTurn(1, 2); // when
        assertEquals(Z, game.getCell(1, 2)); // then

        game.makeTurn(2, 1); // when
        assertEquals(X, game.getCell(2, 1)); // then
    }

    @Test
    void makeTurn__intoTakenCell__returnsFalse() {
        // given
        Game game = new Game();

        assertTrue(game.makeTurn(1, 1));
        assertFalse(game.makeTurn(1, 1));
    }

    @Test
    void whenFieldIsFilled__gameIsComplete() {
        Game game = new Game(new char[][] {
                { X, X, X },
                { X, X, X },
                { X, X, X },
        });
        assertFalse(game.isInProgress());
    }

    @Test
    void render() {
        Game game = new Game(new char[][] {
                { X, Z, Z },
                { Z, X, Z },
                { Z, Z, Z },
        });

        renderOutput = "";
        game.render(this);
        assertEquals("x00 0x0 000 ", renderOutput);
    }

    @Override
    public void openRow() {
    }

    @Override
    public void drawCell(char cell) {
        renderOutput += cell;
    }

    @Override
    public void closeRow() {
        renderOutput += ' ';
    }
}
```

## 💻 Practice


### Реализовать методы класса `Rect`
- [ ] `getArea`
- [ ] `getPerimeter`
- [ ] `move`

### Реализовать методы класса `Post`
- [ ] `like`
- [ ] `getLikesNumber`
- [ ] `leaveComment`
- [ ] `getComments`

### Крестики нолики
- [ ] Перенести логику игры в класс `Game` а функции, сделать методами
- [ ] Класс `Game` не должен содержать методов работы c консолью. Весь код работы с пользователем оставить в `main`. Класс `Game` не связан с конкретным способом взаимодействия с пользователем (консоль, графический интерфейс, сеть)
- [ ] Закрыть доступ к внутреннему состоянию игры 
- [ ] Написать юнит тесты
