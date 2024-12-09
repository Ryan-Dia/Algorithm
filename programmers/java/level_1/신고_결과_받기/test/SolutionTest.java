package level_1.신고_결과_받기.test;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import level_1.신고_결과_받기.Solution;


class SolutionTest {
    Solution solution = new Solution();

    @Test
    void testCase1() {
        // given
        String[] id_list = {"muzi", "frodo", "apeach", "neo"};
        String[] report = {"muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"};
        int k = 2;

        // when
        int[] result = solution.solution(id_list, report, k);

        // then
        assertThat(result).containsExactly(2, 1, 1, 0); // 기대 결과와 동일한지 확인
    }

    @Test
    void testCase2() {
        // given
        String[] id_list = {"con", "ryan"};
        String[] report = {"ryan con", "ryan con", "ryan con", "ryan con"};
        int k = 3;

        // when
        int[] result = solution.solution(id_list, report, k);

        // then
        assertThat(result).containsExactly(0, 0); // 기대 결과와 동일한지 확인
    }

    @Test
    void testCase3() {
        // given
        String[] id_list = {"a", "b", "c"};
        String[] report = {"a b", "b c", "a c", "b c", "c a"};
        int k = 2;

        // when
        int[] result = solution.solution(id_list, report, k);

        // then
        assertThat(result).containsExactly(1, 1, 0); // 기대 결과와 동일한지 확인
    }

}
