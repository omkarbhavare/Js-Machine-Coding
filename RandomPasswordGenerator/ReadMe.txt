Start
 |
 |  --> User clicks on "Generate Password" Button
 |        |
 |        v
 |   --> Read the selected password length from "passwordLengthRange" input
 |        |
 |        v
 |   --> Check which character sets are selected (Uppercase, Lowercase, Numbers, Symbols)
 |        |
 |        v
 |   --> Create an array `selectedSets` to store the enabled sets:
 |        - If "upperSetCheckbox" is checked, add "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 |        - If "lowerSetCheckbox" is checked, add "abcdefghijklmnopqrstuvwxyz"
 |        - If "numbersSetCheckbox" is checked, add "0123456789"
 |        - If "symbolsSetCheckbox" is checked, add "!@#$%^&*()"
 |        |
 |        v
 |   --> If no sets are selected, return an empty password
 |        |
 |        v
 |   --> Loop for generating the password of selected length:
 |        - Randomly choose a set from `selectedSets`
 |        - Pick a random character from that set using `getRandomChar`
 |        - Append the character to the password
 |        |
 |        v
 |   --> Once the loop finishes, return the generated password
 |        |
 |        v
 |   --> Display the generated password in "generatedPasswordTextarea"
 |
End
