<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link href="style.css" rel="stylesheet">
  <title>Rank my images</title>

</head>

<body>
      <h2>Part TWO: Ranking.</h2>
  <section class="def">
    <h2>Definition</h2>
    Map generalisation seeks to adapt a precise geographic dataset for visualisation at a smaller scale. It should provide readable map and conserve the information.<br>

    The mountain road generalization combined: turn enlargement, shape smoothing and simplifying; in order to avoid symbol coalescence.
    <h2>Data</h2>
    The intial image came from the database of roads of the french national map agency (IGN) and are detailled for a display at 1:25 000 scale.
    The target scale is 1:250 000. All images are represented at the same scale in a 2.5km large square. Roads width represent the importance of the road.
  </section>

<section>  <h2>Images</h2>   <img src="images\image_rank\i21.png"  class="img" draggable="false"> <br> Here are some generalisation of the previous image <br>
<div class="image_row">
  <img src="images\image_rank\p21.png" draggable="true" class="img" id="0">
  <img src="images\image_rank\r21.png" draggable="true" class="img" id="1">
  <img src="images\image_rank\u21.png" draggable="true" class="img" id="2" >
  <img src="images\image_rank\c21.png" draggable="true" class="img" id="3">
</div>
</section>

<section> <h2>Ranking</h2> Drag and drop the generalization in your preference order regarding the generalization.</section>
  <div class="image_row">The best     <img src="images\fleche.jpg" class="imglg">The worst

</div><div class="empty_row">

  <div class="empty_square" value="1"></div>
  <div class="empty_square" value="2"></div>
  <div class="empty_square" value="2"></div>
  <div class="empty_square" value="3"></div>
</div>
<button class="cancel" id="cancel"
        type="button">
    Cancel
</button>
<button class="val"
        type="button"
        disabled=true>
        <a href="output.html">   Validate</a>

</button>
<script src="rank.js"></script>
</body>

</html>
