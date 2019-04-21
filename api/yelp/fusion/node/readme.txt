input location files: change address as needed
input0.js, input1,js, .....

change line 2 in yelp.js, depends on which input file you use

node yelp.js > input0.js < output0.txt
node yelp.js > input1.js < output1.txt
.....

Make sure these are the only files named as 'output*'

Get normalized by score:the score is in file yelp_scores.js
python analysis.py