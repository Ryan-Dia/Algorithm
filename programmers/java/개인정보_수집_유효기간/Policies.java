package 개인정보_수집_유효기간;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

class Policies {
    private final Map<String, Policy> policies;

    private Policies(Map<String, Policy> policies) {
        this.policies = policies;
    }

    public static Policies of(String[] terms) {
        Map<String, Policy> policyMap = Arrays.stream(terms)
                .map(Policy::of)
                .collect(Collectors.toMap(Policy::getType, Function.identity()));
        return new Policies(policyMap);
    }

    public Policy findByType(String type) {
        return policies.get(type);
    }
}
