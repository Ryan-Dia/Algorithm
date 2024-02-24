// https://www.acmicpc.net/problem/9086

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int count = Integer.parseInt(br.readLine());

        for (int i = 0; i < count; i++) {
            String inputText = br.readLine();
            if(inputText.length() > 1) {
                String resultText = inputText.charAt(0) + "" + inputText.charAt(inputText.length() - 1);
                System.out.println(resultText);
            } else{
                System.out.println(inputText + inputText);
            }
        }
    }
}