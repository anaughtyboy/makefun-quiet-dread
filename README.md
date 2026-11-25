# AI Two Days of Quiet Dread

[![Competition](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![Rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/anaughtyboy/makefun-quiet-dread/rank.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![Reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/anaughtyboy/makefun-quiet-dread/reward.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)

Entry for the [make.fun bounty "AI Two Days of Quiet Dread"](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018): a program that writes one code review comment approving a pull request with quiet existential dread.

## The comment

> Approved. The AI has been quiet for two days, and somehow that is worse than when it talks.

## How it works

`main.ts` holds the comment, checks it against the competition's limits (one line, 1–140 characters, no leading or trailing white space, no control characters), writes it exactly — no trailing newline — to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`), then reads the file back as bytes and confirms it matches the comment exactly.
