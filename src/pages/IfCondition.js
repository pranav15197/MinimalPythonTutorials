import React from 'react'
import Gist from 'react-gist'

const TITLE = 'Expense Calculator'
const PATH = 'expense-calculator'

function IfCondition() {
  
  return (
    <>
      <p>
        We have a lot of pieces in place now to build complex programs, so
        the tutorials will start becoming a bit longer now.
      </p>
      <p>
        In this tutorial, we will be making an expense calculator app with python.
        The app will ask the user for his income and his expenditures, and will output
        what his savings are. Sounds straight forward right? 
        Create a new file called 'expense.py' and let's get started.
      </p>
      <br/>
      <h2>Getting the user's income</h2>
      <p>
        The first thing we need to do is to ask the user for his income. This is
        easy, we have done this before.
      </p>
      <Gist id={'178a0021792d17d258c4a8cffec44f10'}/>
      <p>
        Recall that we need to add the second line to convert the input string
        into an integer, since we would need to do some math with it. We 
        can actually do this in a single line like below.
      </p>
      <Gist id={'28776763cc33abbc46aa40ccfcaa3409'}/>
      <p>
        <code>int</code>, <code>input</code>, and even <code>print</code> are
        what we call <b>functions</b> in python. We pass in some stuff to a function,
        and the function passes some stuff back to us. 
      </p>
      <p>
        Here, the input function 
        passes the input string to the int function, and the int function 
        passes the converted integer back which is finally stored in the income
        variable
      </p>
      <p>
        Don't worry if you find functions confusing, we will look at the in detail later. 
      </p>
      <br/>
      <h2>Taking in the expenses</h2>
      <p>
        Now we could do the same for the expenses and just ask the user for their total
        expenses for the month. But that would defeat the purpose of our app. Instead
        we would ask the user for all of their expenses and then add them up ourselves.
      </p>
      <p>
        Since we need to do somthing multiple times (i.e that an input from the user),
        A for loop might be useful here. Let's start putting together some code.
      </p>
      <Gist id={'386b72b3744836509497473c8957e502'}/>
      <p>
        If you run this code, it will first ask you for your income and then ask
        you 5 times to enter an expense. We still need to add up all the expenses.
      </p>
      <Gist id={'4cb54161f9696dd5d57a6ae1ccc1da19'}/>
      <p>
        We created a new variable <code>total_expense</code>. To start with, we just 
        save the value 0 in it. Then inside the for loop, we will keep adding 
        expenses to this variable.
      </p>
      <p>
        For example, suppose the first expense you enter is 20. Then on line 7,
        the value of <code>total_expense</code> will become 0 + 20, i.e. 20. Now 
        say the next input given by you is 50, so <code>total_expense</code>
        will become 20 + 50, i.e. 70
      </p>
      <p>
        In the end, we calculate the savings by subtarcting the total expenditure
        from the income.
      </p>
      <br/>
      <h2>Making the number of expenses variable</h2>
      <p>
        An obvious issue with our app is that it will always ask for exactly 
        5 expenses. But the number of expenses will be different for different users.
        We can fix this easily by asking the user first how many expenses he would
        like to add.
      </p>
      <Gist id={'f6262e4b5717391453ec2216a0fa8648'}/>
      <p>
        Try the above code a few times with different number of expenses.
      </p>
      <br/>
      <h2>Summary</h2>
      <p>
        We learned in this tutorial how to use for loops for math calculations, 
        such as adding up a bunch of things. The basic idea was to define a variable
        outside the for loop and keep tweaking it from inside the for loop. This is a very common pattern and you will see this a lot while dealing with
        for loops.
      </p>
      <p>
        Things will get interesting in the next few tutorials, as we learn about
        lists and conditional expressions. 
      </p>
      <hr/>
      <h3>Practice exercises: </h3>
      <ol>
        <li>
          Try writing a similar piece of code that will compute 
          the <a className="inner-a" href="https://www.mathsisfun.com/numbers/factorial.html">
            factorial</a> of a given number. 
        </li>
      </ol>
    </>
  );
}

IfCondition.title = TITLE
IfCondition.path = PATH

export default IfCondition
