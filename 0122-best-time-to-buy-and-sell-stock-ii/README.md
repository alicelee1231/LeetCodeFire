<h2><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/">122. Best Time to Buy and Sell Stock II</a></h2><h3>Medium</h3><hr><div data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11"><p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">You are given an integer array <code data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">prices</code> where <code data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">prices[i]</code> is the price of a given stock on the <code data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">i<sup>th</sup></code> day.</p>

<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">On each day, you may decide to buy and/or sell the stock. You can only hold <strong data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">at most one</strong> share of the stock at any time. However, you can buy it then immediately sell it on the <strong data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">same day</strong>.</p>

<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">Find and return <em data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">the <strong data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">maximum</strong> profit you can achieve</em>.</p>

<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">&nbsp;</p>
<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11"><strong class="example" data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">Example 1:</strong></p>

<pre><strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 7
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
</pre>

<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11"><strong class="example" data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<pre><strong>Input:</strong> prices = [1,2,3,4,5]
<strong>Output:</strong> 4
<strong>Explanation:</strong> Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
</pre>

<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11"><strong class="example" data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">Example 3:</strong></p>

<pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
</pre>

<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">&nbsp;</p>
<p data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11"><strong data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">
	<li data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">1 &lt;= prices.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="a15e53f6-de83-4d0a-809e-a6750621fd11">0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li>
</ul>
</div>