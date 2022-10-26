// Pseudocode <3

/*
For each game (5 rounds per game)
    For each round
        Prompt player for their choice 
            - this should be case insensitive so users can input rock, ROCK, RocK or any other variation
            - if not one of the three options, display error
        Run function for computer choice
            -randomly select between the three options
        Evaluate round results
            - input = player-choice & computer-choice
            - output = player-win, player-tie, player-lose
            - Print message to screen showing result
                - ex: "You Lose! Paper beats Rock"
            - save results somewhere
    Evaluate game results
        - input = round-results
        - output = game-win, game-tie, game-lose
            - if 2 win && 2 lose == tie
            - else if 2 wins && 2 ties == win?
            - else if 2 lose && 2 ties == lose?
            - else if 3+ (aka over 50%) win == win
            - else if 3+ (aka over 50%) lose == lose
            - else if 3+ (aka over 50%) tie == tie 
            - else - something went wrong
        - print message to screen showing overall game-result
*/