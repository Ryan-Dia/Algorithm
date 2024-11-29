package 개인정보_수집_유효기간;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

class Solution {
    public int[] solution(String today, String[] terms, String[] privacies) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        LocalDate parsedToday = LocalDate.parse(today, formatter);
        PrivacyChecker checker = new PrivacyChecker(Policies.of(terms));
        List<Integer> result = checker.check(parsedToday, privacies, formatter);

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
