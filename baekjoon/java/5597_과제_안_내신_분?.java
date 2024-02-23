// https://www.acmicpc.net/problem/5597

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

class Main {
    private static final int FIRST_STUDENT_NUMBER = 1;
    private static final int LAST_STUDENT_NUMBER = 30;

    public static void main(String[] args) throws IOException {


        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Set<Integer> studentNumbers = getStudentNumbers();

        while(true) {
            String input = br.readLine();

            if(input == null) {
                break;
            }

            int numberOfStudentSubmitted = Integer.parseInt(input);
            studentNumbers.remove(numberOfStudentSubmitted);
        }

        studentNumbers.forEach(System.out::println);
    }

    private static Set<Integer> getStudentNumbers() {
        Set<Integer> students = new HashSet<>();
        for (int i = FIRST_STUDENT_NUMBER; i <= LAST_STUDENT_NUMBER; i++) {
            students.add(i);
        }

        return students;
    }
}