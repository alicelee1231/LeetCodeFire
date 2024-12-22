<h2><a href="https://leetcode.com/problems/move-zeroes/">283. Move Zeroes</a></h2><h3>Easy</h3><hr><div data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1"><p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1">Given an integer array <code data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">nums</code>, move all <code data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">0</code>'s to the end of it while maintaining the relative order of the non-zero elements.</p>

<p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">Note</strong> that you must do this in-place without making a copy of the array.</p>

<p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">&nbsp;</p>
<p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e"><strong class="example" data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [0,1,0,3,12]
<strong>Output:</strong> [1,3,12,0,0]
</pre><p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e"><strong class="example" data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [0]
<strong>Output:</strong> [0]
</pre>
<p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">&nbsp;</p>
<p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e"><strong data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">
	<li data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<p data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">&nbsp;</p>
<strong data-immersive-translate-walked="b74418d8-1abd-41bc-9a3a-16cc0e0e9d0e">Follow up:</strong> Could you minimize the total number of operations done?</div>