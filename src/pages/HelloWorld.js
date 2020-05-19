import React from 'react'
import { Link } from 'react-router-dom'
import Gist from 'react-gist'
import hello_gif from '../assets/hello_world.gif'

function HelloWorld() {
  return (
    <div className="container">
      <Link to="/">Home</Link>
      <h1>Hello World!</h1>
      <br/>
      <p>
        It's a tradition to start every coding tutorial with a Hello World program, 
        i.e. a programe that just prints the words 'Hello World!' on your computer screen.
        writing this program in python is rediculously easy. So let's get started.
      </p>
      <br/>
      <h2>Creating your first Python file</h2>
      <p>
        Python files are simply text files that end with the extension <b>.py</b>. We
        will now create one such file.
      </p>
      <ol>
        <li>Open VSCode</li>
        <li>
          press <span class="key">Control</span> +
          <span class="key">N</span> to create a new file
        </li>
        <li>
          press <span class="key">Control</span> +
          <span class="key">S</span> to save the file. You can name it 
          <b> hello.py</b>
        </li>
        <li>
          If you see any warnings about python linters or extensions, you can ignore 
          them for now
        </li>
      </ol>
      <br/>
      <h2>Writing the Hello World code</h2>
      <p>
        To display anything on the screen using python, we use the <b>print </b>
        command. Add the following code to our hello.py file
      </p>
      <Gist id='6d67de76069b2a953fd77caf29bb2140'/>
      <p>
        You don't need to think too much about how this is working. Why are
        there quotes around hello? you might be wondering. It will all become
        clear in the coming tutorial. For now all you need to understand is that
        this is how you use python to display text on the screen.
      </p>
      <br/>
      <h2>Running the code</h2>
      <p>
        Now that we have our first python file ready, we need to figure out how to 
        run it. To run python, we need the terminal. Now you can open the terminal
        using the steps we discussed in the last tutorial. But VSCode provides us
        an easier way to do this. There's a bar at the bottom of your editor.
        If you drag it above, a terminal will appear!
        <img src={hello_gif} alt='Hello world' />
        To run our file simply type <b>python hello.py</b> and press enter. You will see the words 
        'Hello World' appear on the next line, just like we had hoped.
      </p>
      <br/>
      <h2>Summary</h2>
      <p>
        That was easy wasn't it? It may not look like much, but you have now learned how to
        <ul>
          <li>Create a new python file</li>
          <li>Use the <b>print</b> comand to display text on the screen</li>
          <li>Run python file using the VSCode's terminal</li>
        </ul>
        In the next tutorial we will learn how to use variables.
      </p>
      <footer>
      Next tutorial -
      <Link to="/using-variables">Using Variables</Link>
      </footer>
    </div>
  );
}

export default HelloWorld
