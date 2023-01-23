/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let answer = []

    const checkLeaf = (node) => (node.left === null && node.right === null)
    // if root is empty, return empty answer
    if (!root) return answer
    // if root node equals targetSum, push this value to the answer
    if (root.val === targetSum && checkLeaf(root)) answer.push([root.val])

    const dfs = (node, path, pathSum) => {
        if(!node  || node.val === null) return

        const summation = pathSum + node.val
        const thisPath = path.concat(node.val)
        
        if (summation === targetSum && checkLeaf(node)) {
            answer.push(thisPath)
        } else {
            dfs(node.left, thisPath, summation)
            dfs(node.right, thisPath, summation)              
        }

    }
    
    dfs(root.left, [root.val], root.val);
    dfs(root.right, [root.val], root.val);
    
    // console.log(root,root.val, root.left, root.right, targetSum, answer)
    return answer
};