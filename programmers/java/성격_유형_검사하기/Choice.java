package 성격_유형_검사하기;

public class Choice {
    private static final int MIN_CHOICE = 1;
    private static final int MAX_CHOICE = 7;
    private static final int UPDATE_THRESHOLD = 4;
    private final int choice;

    public Choice(int choice) {
        validate(choice);
        this.choice = choice;
    }

    private void validate(int choice) {
        if(choice < MIN_CHOICE || choice > MAX_CHOICE) {
            throw new IllegalArgumentException("허용되지 않는 숫자입니다.");
        }
    }

    public int calculate() {
        return Math.abs(choice - 4);
    }

    public String getRelevantOption(String[] options) {
        if(choice >= UPDATE_THRESHOLD) {
            return options[1];
        }
        return options[0];
    }
}
