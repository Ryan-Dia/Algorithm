package 성격_유형_검사하기;

import java.util.EnumMap;
import java.util.Map;

public class Score {
    private final Map<SurveyType, Integer> score;

    public Score() {
        this.score = new EnumMap<>(SurveyType.class);
        for (SurveyType type : SurveyType.values()) {
            score.put(type, 0);
        }
    }

    public void update(String type, int num) {
        SurveyType surveyType = SurveyType.valueOf(type);
        score.put(surveyType, score.get(surveyType) + num);
    }

    public String calculateResult() {
        StringBuilder result = new StringBuilder();
        SurveyType[][] typePairs = {
                {SurveyType.R, SurveyType.T},
                {SurveyType.C, SurveyType.F},
                {SurveyType.J, SurveyType.M},
                {SurveyType.A, SurveyType.N}
        };

        for (SurveyType[] pair : typePairs) {
            result.append(getDominantType(pair[0], pair[1]));
        }

        return result.toString();
    }

    private String getDominantType(SurveyType type1, SurveyType type2) {
        return score.get(type1) >= score.get(type2) ? type1.name() : type2.name();
    }

    private enum SurveyType {
        R,T,C,F,J,M,A,N
    }
}
