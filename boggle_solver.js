let SIZE = 26;

class Node {
    constructor() {
    this.is_word=false;
    this.children = {}
    this.children["QU"] = null
    this.children['ST'] = null
    for (let i = 0; i < SIZE; i++)
        this.children[String.fromCharCode(i  + "A".charCodeAt(0))] = null;
    }

}

function insert(root, word) {
    word = word.toUpperCase()
    let n = word.length;
    let curr = root;

    for (let i = 0; i < n; i++) {
        let ch = word[i]

        if (ch === "Q" && (i + 1 < n) && word[i + 1] === "U") {
            ch = "QU"
            i = i + 1
        }

        else if (ch === "S" && (i + 1 < n) && word[i + 1] === "T") {
            ch = "ST"
            i = i + 1
        }

        if (curr.children[ch] == null)
            curr.children[ch] = new Node();

        curr = curr.children[ch];
    }
    curr.is_word = true;
}

function safe(i, j, visited) {
    return (i >= 0
        && i < M && j >= 0
        && j < N
        && !visited[i][j]);
}

function search(curr, boggle, i, j, visited, str, res)
{
        if (curr.is_word === true && !(res.includes(str)) && str.length > 2)
        res.push(str)


    if (safe(i, j, visited))
        visited[i][j] = true


    for (let child in curr.children)
        if (curr.children[child] != null) {
            ch = child

            if (safe(i + 1, j + 1, visited)
                && boggle[i + 1][j + 1].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i + 1, j + 1,
                    visited, str + ch, res)

            if (safe(i, j + 1, visited)
                && boggle[i][j + 1].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i, j + 1,
                    visited, str + ch, res)

            if (safe(i - 1, j + 1, visited)
                && boggle[i - 1][j + 1].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i - 1, j + 1,
                    visited, str + ch, res)

            if (safe(i + 1, j, visited)
                && boggle[i + 1][j].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i + 1, j,
                    visited, str + ch, res)

            if (safe(i + 1, j - 1, visited)
                && boggle[i + 1][j - 1].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i + 1, j - 1,
                    visited, str + ch, res)

            if (safe(i, j - 1, visited)
                && boggle[i][j - 1].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i, j - 1,
                    visited, str + ch, res)

            if (safe(i - 1, j - 1, visited)
                && boggle[i - 1][j - 1].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i - 1, j - 1,
                    visited, str + ch, res)

            if (safe(i - 1, j, visited)
                && boggle[i - 1][j].toUpperCase() === ch)
                search(curr.children[child], boggle,
                    i - 1, j,
                    visited, str + ch, res)
        }
        visited[i][j] = false
}

function find_words(boggle, root, res) {
    M = boggle.length
    N = boggle.length

    let visited = Array.from(Array(M), () => new Array(N).fill(false))
    let curr_node = root
    let str = ""

    // traverse all matrix elements
    for (let i = 0; i < M; i++)
        for (let j = 0; j < N; j++) {
            let curr_chr = boggle[i][j].toUpperCase()
            if (curr_node.children[curr_chr] != null) {
                str = str + curr_chr
                search(curr_node.children[curr_chr], boggle, i, j, visited, str, res)
                str = "";
            }
        }
}

var grid = [["A", "B"], ["C", "D"]];
var dictionary = ['AB', 'ABD', 'DCA', 'XY']

exports.findAllSolutions = function(grid, dictionary) {
    if (dictionary === [] || grid.length === 1 || grid.length === 0)
      return []
  
    let root = new Node();
    let res = []
    
    let M = grid.length
    let N = grid.length

    let n = dictionary.length
    for (let i = 0; i < n; i++)
        insert(root, dictionary[i])

    for (let i = 0; i < M; i++)
        for (let j = 0; j < N; j++) {
            find_words(grid, root, res)
        }
    return res;
}

console.log(exports.findAllSolutions(grid, dictionary));
