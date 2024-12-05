package 성격_유형_검사하기.test;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import 성격_유형_검사하기.Choice;

class ChoiceTest {

    @ParameterizedTest
    @ValueSource(ints = {9, 0})
    void 허용된_숫자가_아니면_예외_발생(int input){
        // given
        // when
        // then
        Assertions.assertThrows(IllegalArgumentException.class, () -> new Choice(input));

    }

    @ParameterizedTest
    @ValueSource(ints = {1, 3, 7})
    void 허용된_숫자라면_정상_동작(int input){
        // given
        // when
        // then
        Assertions.assertDoesNotThrow(() -> new Choice(input));
    }


}
