package 성격_유형_검사하기.test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import 성격_유형_검사하기.Score;

class ScoreTest {

    @Test
    void calculateResult_정상_동작(){
        // given
        Score score = new Score();

        // when
        score.update("R", 2);
        score.update("T", 3);
        score.update("C", 2);
        score.update("J", 3);
        score.update("A", 3);

        // then
        assertEquals("TCJA", score.calculateResult());
    }
}
