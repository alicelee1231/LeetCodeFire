<h2><a href="https://leetcode.com/problems/container-with-most-water/">11. Container With Most Water</a></h2><h3>Medium</h3><hr><div data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec"><p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1">You are given an integer array <code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">height</code> of length <code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">n</code>. There are <code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">n</code> vertical lines drawn such that the two endpoints of the <code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">i<sup>th</sup></code> line are <code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">(i, 0)</code> and <code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">(i, height[i])</code>.</p>

<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1">Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>

<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1">Return <em data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">the maximum amount of water a container can store</em>.</p>

<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">Notice</strong> that you may not slant the container.</p>

<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">&nbsp;</p>
<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec"><strong class="example" data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">
<pre><strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
</pre>

<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec"><strong class="example" data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<pre><strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1
</pre>

<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">&nbsp;</p>
<p data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec"><strong data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">
	<li data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">n == height.length</code></li>
	<li data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="9af6f8e7-ea98-4f76-b5a8-597a3e7c40ec">0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>