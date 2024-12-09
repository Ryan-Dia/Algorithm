package level_1.신고_결과_받기;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Users {
    private List<User> users = new ArrayList<>();

    public void add(User user) {
        users.add(user);
    }

    public int getResult(String name) {
        final User user = users.stream()
                .filter(innterUser -> innterUser.getName().equals(name))
                .findFirst()
                .orElseThrow();

        return (int) user.getReportedUsers().stream().filter(this::isBannedUser).count();
    }

    private boolean isBannedUser(String name) {
        final User innerUser = users.stream().filter(user -> user.getName().equals(name)).findFirst().orElseThrow();
        return innerUser.isBanned();
    }

    public void calculate(String[] report) {
        Set<String> box  = new HashSet<>(Arrays.asList(report));
        for (String row : box) {
            final String[] rows = row.split(" ");
            final User user = findUserByName(rows[0]);
            user.addReportedUser(rows[1]);
            findUserByName(rows[1]).increaseReportedCount();
        }
    }

    public void processBan(int banCount) {
        users.stream()
                .filter(user -> user.getReportedCount() >= banCount)
                .forEach(user -> user.changeStatus(UserStatus.BANNED));
    }

    public User findUserByName(String name) {
        return users.stream()
                .filter(user -> user.getName().equals(name))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
