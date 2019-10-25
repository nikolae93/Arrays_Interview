// ++++++++ Description

/*

Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column,
 each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according
 to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]

the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.

*/

// SOLUTION

function sudoku2(g) {
    var obj = {
       k0:[],
       k1:[],
       k2:[],
       k3:[],
       k4:[],
       k5:[],
       k6:[],
       k7:[],
       k8:[],
       
       r0:[],
       r1:[],
       r2:[],
       r3:[],
       r4:[],
       r5:[],
       r6:[],
       r7:[],
       r8:[],
       
       d0202:[],
       d3502:[],
       d6802:[],
       d0235:[],
       d3535:[],
       d6835:[],
       d0268:[],
       d3568:[],
       d6868:[],
       
       
    }
    var t;

    for(var m=0;m<g.length;m++){

        for(var n=0;n<g[m].length;n++){
          if(!isNaN(parseInt(g[m][n]))){
                t =parseInt(g[m][n]);

       switch(m){
 case 0: if(obj.r0.includes(t)){return false;}else{obj.r0.push(t);break};
 case 1: if(obj.r1.includes(t)){return false;}else{obj.r1.push(t);break};
 case 2: if(obj.r2.includes(t)){return false;}else{obj.r2.push(t);break};
 case 3: if(obj.r3.includes(t)){return false;}else{obj.r3.push(t);break};
 case 4: if(obj.r4.includes(t)){return false;}else{obj.r4.push(t);break};
 case 5: if(obj.r5.includes(t)){return false;}else{obj.r5.push(t);break};
 case 6: if(obj.r6.includes(t)){return false;}else{obj.r6.push(t);break};
 case 7: if(obj.r7.includes(t)){return false;}else{obj.r7.push(t);break};
 case 8: if(obj.r8.includes(t)){return false;}else{obj.r8.push(t);break};     
                   
       }
         switch(n){
             case 0: if(obj.k0.includes(t)){return false;}{obj.k0.push(t);break};
             case 1: if(obj.k1.includes(t)){return false;}{obj.k1.push(t);break};
             case 2: if(obj.k2.includes(t)){return false;}{obj.k2.push(t);break};
             case 3: if(obj.k3.includes(t)){return false;}{obj.k3.push(t);break};
             case 4: if(obj.k4.includes(t)){return false;}{obj.k4.push(t);break};
             case 5: if(obj.k5.includes(t)){return false;}{obj.k5.push(t);break};
             case 6: if(obj.k6.includes(t)){return false;}{obj.k6.push(t);break};
             case 7: if(obj.k7.includes(t)){return false;}{obj.k7.push(t);break};
             case 8: if(obj.k8.includes(t)){return false;}{obj.k8.push(t);break};     
                   
       }
  if((m>=0 && m<=2)&&(n>=0 && n<=2)){ if(obj.d0202.includes(t)){return false}else{obj.d0202.push(t);} }
  else
        
  if((m>=3 && m<=5)&&(n>=0 && n<=2)){ if(obj.d3502.includes(t)){return false}else{obj.d3502.push(t);} }
  else
        
  if((m>=6 && m<=8)&&(n>=0 && n<=2)){ if(obj.d6802.includes(t)){return false}else{obj.d6802.push(t);} }
  else
        
  if((m>=0 && m<=2)&&(n>=3 && n<=5)){ if(obj.d0235.includes(t)){return false}else{obj.d0235.push(t);} }
  else
        
  if((m>=3 && m<=5)&&(n>=3 && n<=5)){ if(obj.d3535.includes(t)){return false}else{obj.d3535.push(t);} }
  else 
   
  if((m>=6 && m<=8)&&(n>=3 && n<=5)){ if(obj.d6835.includes(t)){return false}else{obj.d6835.push(t);} }
  else
   
  if((m>=0 && m<=2)&&(n>=6 && n<=8)){ if(obj.d0268.includes(t)){return false}else{obj.d0268.push(t);} }
  else
   
  if((m>=3 && m<=5)&&(n>=6 && n<=8)){ if(obj.d3568.includes(t)){return false}else{obj.d3568.push(t);} }
  else
   
  if((m>=6 && m<=8)&&(n>=6 && n<=8)){ if(obj.d6868.includes(t)){return false}else{obj.d6868.push(t);} }      
                
                
          }else{continue;}
        }
    } 
   return true;
    
 }