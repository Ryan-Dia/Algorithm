// 풀이 1

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.stream.Stream;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());
        Stream<Integer> numbers = Arrays.stream(br.readLine().split(" ")).map(Integer::parseInt);
        int requestNumber = Integer.parseInt(br.readLine());
        Integer result = numbers.reduce(0, (acc, number) -> number == requestNumber ? acc + 1 : acc);

        System.out.println(result);
    }
}

// 풀이 2

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int amount = Integer.parseInt(br.readLine());
        StringTokenizer numbers = new StringTokenizer(br.readLine());
        int requestNumber = Integer.parseInt(br.readLine());
        int count = 0;

        for (int i = 0; i < amount; i++) {
            int number = Integer.parseInt(numbers.nextToken());
            if(requestNumber == number) {
                count++;
            }
        }

        System.out.println(count);
    }
}