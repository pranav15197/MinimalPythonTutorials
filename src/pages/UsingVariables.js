import React from 'react'
import { Link } from 'react-router-dom'
import Gist from 'react-gist'

function HelloWorld() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Using Variables</h1>
      <br/>
      <p>
        We'll now look at how and why to use Variables in python. Variables
        are the staple of any programming language. Variables allow you to 
        save some data and then refer to it later using a variable name. 
      </p>
      <p>
        In this chapter we will create a BMI calculator with python, and in the
        process learn more about variables.
      </p>
      <br/>
      <h1>Numbers in Python</h1>
      <p>
        In the last tutorial we printed the text 'Hello World'. Such text 
        values are called <b>strings</b>. All you need to know about strings for
        now is  they should be surrounded by quotes ( <b>'</b> or <b>"</b> are
        both ok).
      </p>
      <p>
        In addition to text, we would often need to deal with numbers as well.
        For instance, the height and the weight of the user are numbers, and 
        so is the BMI. Python allows you to easily perform operations ( addition, 
        muliplication etc.) on numbers
      </p>
      <p>
        Let's go ahead and use some numbers in python. Write the following code in
        you file and run it. Don't copy paste the code, type it all out yourself.
      </p>
      <Gist id={'607f5f8023359056bc0dc66372e87c6f'} />
      <p>
        If you run this code, you will see 6 lines printed. This is because each 
        print statement prints to a new line.
      </p>
      <pre>
        Height is<br/>
        160<br/>
        Square of Height is<br/>
        25600<br/>
        Weight is<br/>
        64<br/>
      </pre>
      <p>
        The first thing you should notice from the above code is that unlike 
        strings, numbers don't need to be surrounded with quotes.
      </p>
      <p>
        Another interesting thing is what happens on line 4. On all the other lines,
        anything we print is displayed as it is. But on line 4, python first computes
        the answer to 160 X 160, which is 25600 and then prints it.
      </p>
      <br/>
      <h1>Calculating BMI</h1>
      <p>You can calculate the BMI by using a simple formula</p>
      <ol>
        <li>Multiply the weight (in kgs) by 10,000</li>
        <li>Divide it by the square of the height (in cms)</li>
      </ol>
      <p>
        We just did some basic math in python. Let's take it up a notch 
        and calculate the BMI in python as well.
      </p>
      <Gist id={'e945092d51674a60b2ca01aaf2769ff2'} />
      <p>
        Notice how we have the brackets around 64*1000 and 160*160 on line 10.
        This is so that both these products are calculated first, and then the
        division happends. Go ahead and run this code. You should see the
        following output.
      </p>
      <pre>
        Height is<br/>
        160<br/>
        Square of Height is<br/>
        25600<br/>
        Weight is<br/>
        64<br/>
        Weight times 10,000 is<br/>
        640000<br/>
        BMI is<br/>
        25<br/>
      </pre>
      <p>
        We got the BMI as 25. If you want you can 
        grab a calculator and verify that is indeed correct. 
      </p>
      <br/>
      <h1>Why do we need variables?</h1>
      <p>
        We have our calculator
        working now, but there is one issue. If we want to calculate the BMI for 
        someone else, we will have to go and type the new height and weight values
        on all the lines.
      </p>
      <p>
        This is where variables come in. As I mentioned before, Variables allow you
        to save some values and then reuse them later. You can think of variables like
        boxes. You put something in a box and then give a name to it. Later you 
        can tell python the name of the box and it will get the value for you
      </p>
      <br/>
      <h1>Creating Variables</h1>
      <p>
        Creating variables in python is straightforward. Let's create two variables in 
        our code one for the height and one for the weight of the user. We do this by
        adding the two lines on top of our code.
      </p>
      <Gist id={'557041c94454f472a20de4b73e6e69dd'}/>
      <p>
        We now have a varibale named <b>height</b> whose value is 160, and a 
        variable named <b>weight</b> whose value is 64. Let's update our BMI 
        calcualtion code using these variables.
      </p>
      <Gist id={'8f55b6b6c979ef34a99f633567f14439'}/>
      <p>
        Go ahead and run the code. You will see that we have the same output 
        as before. But now are code is much cleaner.
      </p>
      <p>
        On line 1 when we create the variable height, python creates a box
        with the name height and stores the number 160 in it.
      </p>
      <p>
        Later on when we refer to our variable, say in line 5, python goes back to
        the box and grabs the value. This is why the output of line 5 is 160, which
        is the value of our variable height
      </p>
      <p>
        If you need to calculate the BMI for someone else, you just need to change
        the values on line 1 and 2 and run the file again. Go ahead, and calculate
        your own BMI.
      </p>
      <br/>
      <h1>Summary</h1>
      <p>
        Congratulations! you just wrote yourself a python program that's actually
        useful. Hopefully it was not too overwhelming. So far we have learned how to
      </p>
      <ul>
        <li>Do math in python</li>
        <li>Create and use variables to make our lives easier</li>
      </ul>
      <p>
        In the next chapter, we will make our program interactive, by taking
        input from the user.
      </p>
      <footer>
      Next tutorial -
      <Link to="/user-input">Taking inputs from the user</Link>
      </footer>
    </div>
  );
}

export default HelloWorld
