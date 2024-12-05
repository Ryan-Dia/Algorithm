package 성격_유형_검사하기;

public class Solution {
    public String solution(String[] survey, int[] choices) {
        Score score = new Score();
        for(int i=0; i<survey.length; i++) {
            String[] splitAnswer = survey[i].split("");
            Choice choice = new Choice(choices[i]);
            String option = choice.getRelevantOption(splitAnswer);
            score.update(option, choice.calculate());
        }

        return score.calculateResult();
    }
}
