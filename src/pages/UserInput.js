import React from 'react'
import { Link } from 'react-router-dom'
import Gist from 'react-gist'
import input_gif from '../assets/user_input.gif'

function HelloWorld() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Taking inputs from the User</h1>
      <br/>
      <p>
        We have a nice piece of code that helps us calculate our BMI.
        There is one issue though, we need to edit our code file each time we
        want to do a new calculation.
      </p>
      <p>
        Ideally, our program should ask the user for his height and weight and
        then calculate the BMI using those values. This is what we will be covering in
        this tutorial. Let's create a new file for this and name it 'bmi_interactive.py'
      </p>
      <br/>
      <h2>Using input()</h2>
      <p>
        Just like we had the <code>print</code> command to display stuff on the screen, 
        we have the command <code>input</code> to take input from the screen. It will become
        more clear with an example. Write the following code in your file.
      </p>
      <Gist id={'7e875ec4af3bc5008b099ad85c7e46ab'}/>
      <p>
        I'll explain what's going on here, but first you should run this code and see it in action.
        You should see the text 
      </p>
      <code>Please enter your height: </code>
      <p>
        type a number and press enter. The same number will be displayed back to you on the next line.
      </p>
      <img src={input_gif} alt='user_input'/>
      <br/>
      <h2>How input() works</h2>
      <p>
        Let's go line by line for the above code. On line 1, we call the input method. We 
        have passed the text 'Please enter your height:' to this method. Python
        to display this text on the screen and wait for the user's input. 
      </p>
      <p>
        When the user enters something and presses enter, python reads whatever the user has
        entered and then saves it in the variable <code>height</code>.
      </p>
      <p>
        On line 3, we print this value back, to show that the input was indeed read correctly.
      </p>
      <br/>
      <h2>Converting Strings to Integers</h2>
      <p>
        So far we have dealt with two types of data in python, strings such as <code>'Hello World'</code>
        and integers like <code>64, 120</code>. The input method we used earlier will always return
        the user's input as a string.
      </p>
      <p>This means that the value stored <code></code></p>
      <footer>
      </footer>
    </div>
  );
}

export default HelloWorld
