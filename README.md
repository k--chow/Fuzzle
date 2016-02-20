<h1>Clarifai Demo - Fuzzle</h1>

<h3>Intro</h3>
<p>Fuzzle is a quick demo game of Clarifai's superb image tag recognition ability. Upload an image and see the tags Clarifai returns. Click Fuzzle and have a friend try to guess what the image is of! If one of Clarifai's tags is correctly guessed, you win!</p>
<h3>Demo</h3>
Fuzzle shuffles the pixels of the images; try to guess what the image was originally!

![alt text](https://raw.githubusercontent.com/k--chow/ClarifaiDemo/master/ClarifaiDemo.gif "Final")

<h3>Issues/Challenges/Learning experiences</h3>
- HTML5 canvas is cool, and so is the File System API (blob is awesome)
- Images cannot be sent over HTTP; only a base64 encoded string of an image, which is one of the endpoints of the Clarifai API
- HTML5 allows you to get an RGBA array you can manipulate; we shuffled pixels by swapping values.
- CORS errors are incredibly annoying - loading an image from a URL would not allow us to use the getImageData method to retrieve RGBA values. Loading a file instead did not allow us to get the file path of an image to POST to Clarifai; we instead had to convert the image to base64.
- Manipulating a 1 dimensional array of RGBA values and thinking of it in 2 dimensions was a pain
- In hindsight, this was a poor display of the full potential of Clarifai's image recognition ability.

<h3>Todo</h3>
- Improve the UI! It's garbo!
- Add more picture fuzzing like Gaussian Blur, color inversions, etc. 

<h3>Created by Kevin Chow (k--chow) and Caleb Bryant (cal2u)</h3>
