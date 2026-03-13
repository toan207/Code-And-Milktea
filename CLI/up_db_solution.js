const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ask = (q) => new Promise(res => rl.question(q, res))
const END = "end11"

async function readMultiline(prompt) {

    console.log(prompt)
    console.log(`(type ${END} to finish)`)

    let lines = []

    return new Promise(resolve => {

        const handler = (line) => {

            if (line.trim() === END) {
                rl.removeListener("line", handler)
                resolve(lines.join("\n"))
            } else {
                lines.push(line)
            }

        }

        rl.on("line", handler)

    })

}

function updateReadme(id, difficulty, description) {
    if (description == 1) description = "";
    else if (description == 2) description = "Advanced SQL 50";
    else if (description == 3) description = "SQL 50";
    else description = ""

    const readmePath = "./Milktea/LeetCode/README.md"
    let content = fs.readFileSync(readmePath, "utf8")

    const url = `https://github.com/toan207/Code-And-Milktea/blob/main/Milktea/LeetCode/Solution/${id}.md`
    const newLine = `- [${id}](${url}) (${description})`

    const lines = content.split("\n")

    const sectionIndex = lines.findIndex(line => line.includes(`## ${difficulty}`))

    let start = sectionIndex + 1
    let end = start

    while (end < lines.length && lines[end].startsWith("-")) {
        end++
    }

    const problems = lines.slice(start, end)

    problems.push(newLine)

    const sorted = problems.sort((a, b) => {

        const idA = parseInt(a.match(/\[(\d+)\]/)[1])
        const idB = parseInt(b.match(/\[(\d+)\]/)[1])

        return idA - idB
    })

    lines.splice(start, end - start, ...sorted)

    fs.writeFileSync(readmePath, lines.join("\n"))

}

async function main() {

    const id = await ask("Problem ID: ")
    const name = await ask("Problem Name: ")
    var difficulty = await ask("Difficulty (Easy/Medium/Hard): ")
    if (difficulty == 1) difficulty = "Easy";
    if (difficulty == 2) difficulty = "Medium";
    if (difficulty == 3) difficulty = "Hard";


    const moreDes = await ask("Description Link (Default/Advanced SQL 50/SQL 50): ")
    const description = await readMultiline("\nPaste Problem Description:")
    const code = await readMultiline("\nPaste Code:")

    rl.close()

    const codePath = `./Milktea/LeetCode/Code/Sql/${id}.sql`
    const solutionPath = `./Milktea/LeetCode/Solution/${id}.md`

    fs.writeFileSync(codePath, code)

    const md = `# ${id}. ${name}

## Problem

\`\`\`
${description}
\`\`\`

## Solution
[SQL](https://github.com/toan207/Code-And-Milktea/blob/main/Milktea/LeetCode/Code/Sql/${id}.sql)
`

    fs.writeFileSync(solutionPath, md)

    updateReadme(id, difficulty, moreDes)

    console.log("Created:")
    console.log(codePath)
    console.log(solutionPath)
    console.log("README updated")

}

main()