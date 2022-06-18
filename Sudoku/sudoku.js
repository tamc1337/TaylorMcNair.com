const grid = [
    [1,2,3,4,5,6,7,8,9],
    [9,8,7,6,5,4,3,2,1],
    [5,6,4,4,5,6,7,8,9],
    [8,8,7,6,5,4,3,2,1],
    [7,2,3,4,5,6,7,8,9],
    [6,8,7,6,5,4,3,2,1],
    [4,2,3,4,5,6,7,8,9],
    [3,8,7,6,5,4,3,2,1],
    [2,2,3,4,5,6,7,8,9]];

console.log(grid[0].reduce((a,b) => a+b));
// console.log(grid[1].reduce((a,b) => a+b));
// console.log(grid[2].reduce((a,b) => a+b));
// console.log(grid[3].reduce((a,b) => a+b));
// console.log(grid[4].reduce((a,b) => a+b));
// console.log(grid[5].reduce((a,b) => a+b));
// console.log(grid[6].reduce((a,b) => a+b));
// console.log(grid[7].reduce((a,b) => a+b));
// console.log(grid[8].reduce((a,b) => a+b));

const row1 = [
    grid[0][0],
    grid[0][1],
    grid[0][2],
    grid[0][3],
    grid[0][4],
    grid[0][5],
    grid[0][6],
    grid[0][7],
    grid[0][8]];; // 0-8
const colm1 = [
    grid[0][0],
    grid[1][0],
    grid[2][0],
    grid[3][0],
    grid[4][0],
    grid[5][0],
    grid[6][0],
    grid[7][0],
    grid[8][0]];
console.log('row1');
console.table(row1);

console.log('colm1');
console.table(colm1);

const box1 = [
grid[0][0], grid[0][1], grid[0][2],
grid[1][0], grid[1][1], grid[1][2],
grid[2][0], grid[2][1],grid[2][2]];

console.log('box1');
console.table(box1);

const checker = (row,colm,box) => {
    if( row.reduce((a,b) => a+b) ===45 && 
        colm.reduce((a,b) => a+b)===45 &&
        box.reduce((a,b) => a+b) ===45){
        return "SOLVED!"
        } else {
    return "Nope!"
    }
};
console.log(checker(row1, colm1,box1));