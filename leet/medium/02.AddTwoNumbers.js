/*
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/

let addOne = 0;
const addTwoNumbers = (l1, l2) => {
  // init l1 is null
  if (!l1) return l2;
  // init l2 is null
  if (!l2) {
    if (l1.val !== 10) return l1;
  }
    let longer = l1.length > l2.length ? l1 : l2;
  let shorter = l1.length > l2.length ? l2 : l1;
  const sum = longer.val + shorter.val + addOne;
  if (sum >= 10) {
    // longer.val = sum % 10;
    addOne = 1;
    sum = sum % 10;
  }
  longer.val = sum;
  if (longer.next) {
    longer.next.val += addOne;
    longer.next = addTwoNumbers(longer.next, shorter.next);
  } else {
    longer.next = [addOne];
  }
  addOne = 0;
  return longer;
};