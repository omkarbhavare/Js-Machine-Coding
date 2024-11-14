Start
 |
 |--> Load First Question (loadQuestion)
 |      |
 |      |--> Update Navigation Buttons (previousBtn, nextBtn visibility)
 |      |
 |      |--> Display Question and Options
 |      |
 |      |--> Highlight if Question is Answered (Optional)
 |
 |--> User Clicks "Next Button" (nextBtn)
 |      |
 |      |--> Check if Answer is Submitted (handleAnswerSubmission)
 |      |--> If Answer is Checked:
 |      |        - Mark Answer as Selected
 |      |        - Increase Correct/Wrong Answer Count
 |      |        - Move to Next Question (moveToNextQuestion)
 |
 |--> User Clicks "Previous Button" (previousBtn)
 |      |
 |      |--> Move to Previous Question if Not at First Question
 |      |
 |      |--> Re-display Previous Question (loadQuestion)
 |
 |--> User Clicks "Submit Test" (submitTest)
 |      |
 |      |--> Display Final Score (correctAnswers + wrongAnswers)
 |
End
