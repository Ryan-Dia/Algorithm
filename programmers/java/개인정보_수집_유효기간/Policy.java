package 개인정보_수집_유효기간;

class Policy {
    public static final int DAYS_IN_FIXED_MONTH = 28;
    private final String type;
    private final int term;

    private Policy(String type, int term) {
        this.type = type;
        this.term = term;
    }

    public static Policy of(String termValue) {
        String[] splited = termValue.split(" ");
        String type = splited[0];
        int term = Integer.parseInt(splited[1]);

        return new Policy(type, term * DAYS_IN_FIXED_MONTH);
    }

    public String getType() {
        return type;
    }

    public int getTerm() {
        return term;
    }
}
