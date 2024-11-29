package 개인정보_수집_유효기간;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.IntStream;

public class PrivacyChecker {
    private final Policies policies;

    public PrivacyChecker(Policies policies) {
        this.policies = policies;
    }

    public List<Integer> check(LocalDate today, String[] privacies, DateTimeFormatter formatter) {
        return IntStream.range(0, privacies.length)
                .filter(index -> {
                    Privacy userPrivacy = Privacy.from(privacies[index], formatter);
                    return userPrivacy.isExpired(today, policies.findByType(userPrivacy.getType()).getTerm());
                })
                .mapToObj(index -> index + 1)
                .toList();
    }
}
