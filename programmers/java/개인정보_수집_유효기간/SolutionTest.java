package 개인정보_수집_유효기간;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import org.junit.jupiter.api.Test;

public class SolutionTest {

    @Test
    void 전체_테스트_1() {
        Solution solution = new Solution();

        String today1 = "2022.05.19";
        String[] terms1 = {"A 6", "B 12", "C 3"};
        String[] privacies1 = {"2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"};
        int[] expected1 = {1, 3};
        assertArrayEquals(expected1, solution.solution(today1, terms1, privacies1));
    }

    @Test
    void 전체_테스트_2() {
        Solution solution = new Solution();

        String today2 = "2020.01.01";
        String[] terms2 = {"Z 3", "D 5"};
        String[] privacies2 = {
                "2019.01.01 D",
                "2019.11.15 Z",
                "2019.08.02 D",
                "2019.07.01 D",
                "2018.12.28 Z"
        };
        int[] expected2 = {1, 4, 5};
        assertArrayEquals(expected2, solution.solution(today2, terms2, privacies2));
    }
}
