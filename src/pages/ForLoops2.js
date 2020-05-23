import React from 'react'
import { Link } from 'react-router-dom'
import Gist from 'react-gist'
import indent_gif from '../assets/indent.gif'

const TITLE = 'For loops - II'
const PATH = 'for-loops_ii'

function ForLoops2() {
  
  return (
    <>
      <p>
        In the last tutorial we wrote a piece of code to write multiplication tables.
        But we could do better. In this tutorial we will see how we can make our code 
        shorter and simpler using loops.
      </p>
      <br/>
      <h2>What are loops?</h2>
      <p>
        Loops are a very important concept used in programming. Simply put, if you
        want to run a piece of code multiple times, you would put it in a loop. Python has
        two types of loops, <code>for</code> and <code>while</code>. We'll focus just on
        the <code>for</code> loop for now. 
      </p>
      <p>
        It will be clear with an example. So create a new file 'for_loop_table.py' and 
        let's get started. Write the following code in your file.
      </p>
      <Gist id={'2c7d6e1240dfd4f5baecc78a62604b3a'}/>
      <p>
        If you run the code, you'll see the following output.
      </p>
      <pre>
        For Loop Start<br/>
        0<br/>
        1<br/>
        2<br/>
        3<br/>
        4<br/>
        For Loop End<br/>
      </pre>
      <p>
        As you can see, we wrote 3 print statements in the code, but we got
        7 lines in the output. It's evident from the output that the 
        print statement on line 3 was run 5 times. 
      </p>
      <p>
        This is how you write a for loop in python. Let's look at how this works 
        in more detail.
      </p>
      <br/>
      <h2>Code Indentation</h2>
      <p>
        Our goal to use the for loop is to execute a piece of code multiple times.
        But for that to happen we need some way to separate out that piece of code
        that needs to be repeated. In python, we do this using indentation
      </p>
      <p>
        You'll notice that the print statement on line 3 is shifted to the right. 
        This is known as indentation and it lets us divide the code into segments.
      </p>
      <p>
        Every line which comes right after the for loop and is shifted to the right
        is considered to be  'inside' the for loop. Python knows that these are 
        the line that are needed to be repeated. A good code editor will help you with this.
        If you had typed out the above code, you would have noticed that as soon as you
        press enter after the ':' on line 2, your cursor will appear already shifted
        on the next line.
      </p>
      <img src={indent_gif}  alt="indentation in VScode"/>
      <br/>
      <h2>The range method</h2>
      <p>
        A for loop needs a sequence of items, and it goes over that sequence one
        by one and uses it while running the code inside the loop. The 
        <code>range</code> method provides such a sequence to our for loop.
      </p>
      <p>
        <code>range(n)</code> where n is an integer, will give us a sequence of n
        numbers starting from 0. In our example, <code>range(5)</code> gives us -
        <pre>0, 1, 2, 3, 4</pre>
        Counting in programming starts from 0, u need to get used to that.
      </p>
      <p>
        So now we have all the pieces in place to understand our for loop code. 
        <code>range(5)</code> gives us a sequence of 5 numbers. Our for loop goes over 
        each of those numbers. It picks the first one, puts it in the variable
        <code>i</code> and passes it to the code inside the for loop, which in 
        our case is the print statement on line 3. It moves on to the next one and
        so on till it has done this for the entire sequence.
      </p>
      <br/>
      <h2>using for loop to generate multiplication tables</h2>
      <p>
        Let us now use a for loop to output multiplication tables. Update your code
        to this.
      </p>
      <Gist id={'f9c984ed1d3c582571cc96101ffa123a'}/>
      <p>
        We have changed the sequence for our for loop to <code>range(10)</code>
        since we want to print out the products up to 10. If you run the code, this 
        would be the output
      </p>
      <pre>
      6 x 0 = 0 <br/>
      6 x 1 = 6 <br/>
      6 x 2 = 12 <br/>
      6 x 3 = 18 <br/>
      6 x 4 = 24 <br/>
      6 x 5 = 30 <br/>
      6 x 6 = 36 <br/>
      6 x 7 = 42 <br/>
      6 x 8 = 48 <br/>
      6 x 9 = 54 <br/>
      </pre>
      <p>
        This is great! but the only issue is that it starts from 0 instead of 1.
        We can fix this easily by using <code>i+1</code> instead of <code>i</code>
        while printing. If you update the code as shown below and run it, you
        will see that the table now starts from 1.
      </p>
      <Gist id={'a63fddfb992009072ced56043063d707'}/>
      
      <br/>
      <h2>Summary</h2>
      How about that! In just 3 lines of code we were able to do what earlier took us
      11 lines in. Moreover, we can now easily print tables that go up to 20, or even
      100, just by changing the range on line 2.
      <hr/>
      <h3>Practice exercises: </h3>
      <ol>
        <li>
          Modify the script so that the number is taken from the user input.
        </li>
      </ol>
    </>
  );
}

ForLoops2.title = TITLE
ForLoops2.path = PATH

export default ForLoops2
