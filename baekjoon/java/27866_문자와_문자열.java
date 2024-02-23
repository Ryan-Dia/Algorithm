// https://www.acmicpc.net/problem/27866

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws IOException {


        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        int targetIndex = Integer.parseInt(br.readLine()) - 1;
        String[] text = input.split("");

        System.out.println(text[targetIndex]);
    }
}