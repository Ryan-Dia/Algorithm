package level_1.신고_결과_받기;

import java.util.Arrays;

public class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        final Users users = new Users();
        // 신고자와 신고 당한자 관계
        for(String id : id_list) {
            users.add(new User(id));
        }

        // 신고 내역 처리
        users.calculate(report);
        users.processBan(k);

        // 결과 계산
        return Arrays.stream(id_list)
                .mapToInt(users::getResult)
                .toArray();
    }
}
