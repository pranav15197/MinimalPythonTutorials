import React from 'react'
import { Link } from 'react-router-dom'
import Gist from 'react-gist'

const styles = {
  multiplicationTableContainer: {
    display: 'flex',
    justifyContent: 'center', 
  }
}

const MultiplicationTable = ({n}) => {
  const styles = {
    multiplicationTable: {
      border: '1px solid black',
      margin: '20px 10px',
      fontSize: '0.8em'
    }
  }
  const numbers=[1,2,3,4,5,6,7,8,9,10]
  return (
    <table style={styles.multiplicationTable}>
      {numbers.map(i=><tr><td>{n} x {i}</td><td> = {i*n}</td></tr>)}
    </table>
  )
}

function ForLoops() {
  
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>For loops - I</h1>
      <br/>
      <p>
        The whole idea about programming is to make the computer do
        a task that might be tough for us to do manually. Our BMI
        calculator is a cool app, but to really appreciate the power of 
        code, we need to move up the complexity little by little.
      </p>
      <p>
        In this tutorial we'll look at how to write multiplication
        tables with python, a task that might be a bit tough to do
        manually.
      </p>
      <br/>
      <h2>Multiplication Tables</h2>
      We all remember memorizing tables like these back in school
      <div style={styles.multiplicationTableContainer}>
        <MultiplicationTable n={6}/>
        <MultiplicationTable n={7}/>
      </div>
      <p>
        We'll now see how we can generate these using python. Let's start out
        with the most obvious solution first, i.e. printing out all the products.
        create a new file 'multiplication_tables.py' and write this code 
        in it.
      </p>
      <Gist id='9f0587d4ae02a778085f4413c582fb8d'/>
      <p>
        If you run this code, this is the output you will get.
      </p>
      <pre>
        6 x 1 = 6<br/>
        6 x 2 = 12<br/>
        6 x 3 = 18<br/>
        6 x 4 = 24<br/>
        6 x 5 = 30<br/>
        6 x 6 = 36<br/>
        6 x 7 = 42<br/>
        6 x 8 = 48<br/>
        6 x 9 = 54<br/>
        6 x 10 = 60<br/>
      </pre>
      <br/>
      <h2>Printing on the same line</h2>
      <p>
        You should notice that in this example we have used the <code>print</code> method
        a bit differently. Till now we have just passed a single thing to print, and 
        it prints that. But <code>print</code> can handle multiple values as well.
      </p>
      <p>
        If we pass more than one values to the <code>print</code> then it prints all of them
        on the same line with a space in between. This is why when we pass the string 
        <code>"6 x 1 ="</code> and the expression <code>6*1</code> to <code>print</code>,
        both of them are printed on the same line.
      </p>
      <p>
        You can print as many things as you want on the same line. For instance,
        in our BMI code we could have written something like
      </p>
      <pre>
        print("Height =", height, " and Weight =", weight)
      </pre>
      <p> and the output would have been</p>
      <pre>
        Height = 160 and Weight = 64
      </pre>
      <p>Keep this in mind as we will use this later.</p>
      <br/>
      <h2>Adding Variables</h2>
      <p>
        Let's now use our knowledge of variables to make the code
        more dynamic. We'll create a varibale named <code>number</code>
        that will hold the value of the number whose table we want to generate.
        We'll then use this varibale while printing.
      </p>
      <p>
        Update your code as shown below
      </p>
      <Gist id='42690f6ef6d218573ffee0f287e50ff6'/>
      <p>
        If you run this code you'll see that we are still getting the same 
        output. But it's way easier for us to update the number and generate 
        a new table. You should give it a try, change the value of number on line 1 to anything
        you want and see the output.
      </p>
      <br/>
      <h2>Summary</h2>
      <p>
        Our code is doing the job that's requried properly. But there is still an issue with 
        it. What if we wanted tables that went up to 20 instead of 10? We would have to 
        add 10 more lines to our code. This is not ideal.
      </p>
      <p>
        You should always be worried when you have such repetetive lines in your code.
        One way to get rid of such repetetion is by using <b>loops</b>. The idea of 
        loops might be confusing for beginners, so we will take it slow. In the next chapter
        we will handle the for loop.
      </p>
      <footer>
      Next tutorial -
      <Link to="/for-loops_ii">For loops - II</Link>
      </footer>
    </div>
  );
}

export default ForLoops
