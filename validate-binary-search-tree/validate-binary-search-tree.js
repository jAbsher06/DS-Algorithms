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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const inOrder = (node) => {
        if(!node) {
            return [];
        }
        return [...inOrder(node.left), node.val, ...inOrder(node.right)];
    }
    const sort = inOrder(root);
    
    for(let i = 0; i < sort.length;i++) {
        if(sort[i+1] <= sort[i]) {
            return false;
        }
    }
    return true;
};