class LinkList {

    play(str){
        console.log(str);
        return str;
    } 
  }

  let x = new LinkList();
  x.play('boom!');



function sum(a, b) {
  return a + b;
}
//module.exports = sum;



function add(a, b) {
    return a + b + 1;
  }

export default { sum, add, LinkList };