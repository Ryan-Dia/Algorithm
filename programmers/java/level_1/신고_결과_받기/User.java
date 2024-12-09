package level_1.신고_결과_받기;

import java.util.ArrayList;
import java.util.List;

public class User {
    private final String name;
    private int reportedCount = 0;
    private final List<String> reportedUsers = new ArrayList<>();
    private UserStatus status = UserStatus.NORMAL;

    public User(String name) {
        this.name = name;
    }

    public boolean isBanned() {
        return status == UserStatus.BANNED;
    }

    public void changeStatus(UserStatus newStatus) {
        this.status = newStatus;
    }

    public void increaseReportedCount() {
        reportedCount++;
    }

    public String getName() {
        return name;
    }

    public void addReportedUser(String reportedUser) {
        reportedUsers.add(reportedUser);
    }

    public int getReportedCount() {
        return reportedCount;
    }

    public List<String> getReportedUsers() {
        return reportedUsers;
    }
}
