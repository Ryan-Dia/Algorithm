package 개인정보_수집_유효기간;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Privacy {
    private static final String DELIMITER = " ";
    private final LocalDate startDate;
    private final String type;

    private Privacy(LocalDate startDate, String type) {
        this.startDate = startDate;
        this.type = type;
    }

    public static Privacy from(String privacy, DateTimeFormatter formatter) {
        String[] splitPrivacy = privacy.split(DELIMITER);
        LocalDate startDate = LocalDate.parse(splitPrivacy[0], formatter);
        String type = splitPrivacy[1];
        return new Privacy(startDate, type);
    }

    public boolean isExpired(LocalDate today, int term) {
        int difference = calculateDifferenceDate(today);
        return term <= difference;
    }

    private int calculateDifferenceDate(LocalDate today) {
        int year = today.getYear() - startDate.getYear();
        int month = today.getMonthValue() - startDate.getMonthValue();
        int day = today.getDayOfMonth() - startDate.getDayOfMonth();
        return (year * 12 * Policy.DAYS_IN_FIXED_MONTH) + (month * Policy.DAYS_IN_FIXED_MONTH) + day;
    }

    public String getType() {
        return type;
    }
}
