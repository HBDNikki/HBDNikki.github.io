# Niki's Surprise

## By everyone XD

### Instructions for those making puzzles

Follow the steps 
- Clone the repo using `git clone git@github.com:Kartik-Sama/NikkiBdayy-.git`
- Now copy paste the `puzzle-1.html` in the format `puzzle-number.html`
- Now paste your question inside the paragraph tag on line 24
- Now go to the function `checkHash()`. In that update the variable `answerHash` with your md5 Hash
- Along with this also update the `vQ#Done` variable as well to display the constellation connection effect
- To generate an md5 hash do the following
    1. copy paste the following command `echo -n "<answer here without brackets>" | md5sum`
    2. Alternatively you could use https://www.md5hashgenerator.com/ for generation of the hash
- Paste your hash
- Now go to `index.html` and link your html from line 32 to 36 in order
- Once you are done with all this, then use the following commands
    1. `git add -A`
    2. `git commit -m "Enter any message here"`
    3. `git remote add upstream git@github.com:Kartik-Sama/NikkiBdayy-.git`
    4. `git push upstream master`
- And boom you're done.
