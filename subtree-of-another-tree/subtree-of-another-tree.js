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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const same = (node1, node2) => {
        if (!node1 && !node2) {
            return true;
        }
        if (!node1 || !node2 || node1.val !== node2.val) {
            return false;
        }
        return same(node1.left, node2.left) && same(node1.right, node2.right)
    }
    const dfs = (node) => {
        if(!node) {
            return false;
        }
        if(same(node, subRoot)){
            return true;
        }
        return dfs(node.right) || dfs(node.left);
    }
    return dfs(root);
};