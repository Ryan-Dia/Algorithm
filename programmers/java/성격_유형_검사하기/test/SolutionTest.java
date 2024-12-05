package 성격_유형_검사하기.test;

import org.junit.jupiter.api.Test;
import 성격_유형_검사하기.Solution;

import static org.junit.jupiter.api.Assertions.*;

class SolutionTest {
    @Test
    void testSolution() {
        Solution solution = new Solution();

        String[] survey1 = {"AN", "CF", "MJ", "RT", "NA"};
        int[] choices1 = {5, 3, 2, 7, 5};
        String expected1 = "TCMA";
        assertEquals(expected1, solution.solution(survey1, choices1), "Test case 1 failed");

        String[] survey2 = {"TR", "RT", "TR"};
        int[] choices2 = {7, 1, 3};
        String expected2 = "RCJA";
        assertEquals(expected2, solution.solution(survey2, choices2), "Test case 2 failed");
    }
}
