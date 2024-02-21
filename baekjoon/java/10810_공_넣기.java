import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;
import java.util.stream.Collectors;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine(), " ");
        final int totalBaskets = Integer.parseInt(st.nextToken());
        final int ballCount = Integer.parseInt(st.nextToken());
        final int[] result = new int[totalBaskets];

        for (int i = 0; i < ballCount; i++) {
            String[] secondInput =  br.readLine().split(" ");
            int firstBasket = Integer.parseInt(secondInput[0]);
            int lastBasket = Integer.parseInt(secondInput[1]);
            int ballNumber = Integer.parseInt(secondInput[2]);

            for (int j = firstBasket; j <= lastBasket; j++) {
                result[j-1] = ballNumber;
            }

        }
        String collect = Arrays.stream(result).mapToObj(String::valueOf).collect(Collectors.joining(" "));

        System.out.println(collect);
    }
}