let title = document.querySelector('.title');
let squares = [];
function end(num1,num2,num3)
{
    title.innerHTML = `${squares[num1]} Winner`;
    title.style.background = 'red';
    document.getElementById('item' + num1).style.background = '#f12';
    document.getElementById('item' + num2).style.background = 'red';
    document.getElementById('item' + num3).style.background = 'red;';
    setInterval(function(){title.innerHTML += '.'},333);
    setTimeout(function(){location.reload()},1000);
}
function winner()
{
   for(let i = 1; i < 10; i++)
   {
     squares[i] = document.getElementById('item'+ i).innerHTML;
   }
   if(squares[1] == squares[2] && squares[2] == squares[3] && squares[3] != '')
   {
      end(1,2,3);
   }
   else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != '')
   {
    end(4,5,6);
   }
   else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != '')
   {
      end(7,8,9);
   }
   else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != '')
   {
     end(1,4,7);
   }
   else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != '')
   {
      end(2,5,8);
   }
   else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != '')
   {
    end(3,6,9);
   }
   else if(squares[1] == squares[5] &&squares[5] == squares[9] && squares[9] != '')
   {
      end(1,5,9);
   }
   else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != '')
   {
     end(3,5,7);
   }
}

let turn = 'x';
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        title.innerHTML = 'O';
        title.style.color = 'greenyellow';
        title.style.fontSize  = '30px';
        title.style.fontFamily = 'italic';
        turn = 'o';
    }
    else if(turn == 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'O';
        title.innerHTML = 'X';
        turn = 'x';
    }
    winner();
}

