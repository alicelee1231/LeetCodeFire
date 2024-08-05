<h2><a href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock/">121. Best Time to Buy and Sell Stock</a></h2><h3>Easy</h3><hr><div data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de"><p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de" data-immersive-translate-paragraph="1">You are given an array <code data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">prices</code> where <code data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">prices[i]</code> is the price of a given stock on the <code data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">i<sup data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">th</sup></code> day.</p>

<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de" data-immersive-translate-paragraph="1">You want to maximize your profit by choosing a <strong data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">single day</strong> to buy one stock and choosing a <strong data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">different day in the future</strong> to sell that stock.</p>

<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de" data-immersive-translate-paragraph="1">Return <em data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">0</code>.</p>

<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">&nbsp;</p>
<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de"><strong class="example" data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de" data-immersive-translate-paragraph="1">Example 1:</strong></p>

<pre><strong>Input:</strong> prices = [7,1,5,3,6,4]
<strong>Output:</strong> 5
<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
</pre>

<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de"><strong class="example" data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<pre><strong>Input:</strong> prices = [7,6,4,3,1]
<strong>Output:</strong> 0
<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.
</pre>

<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">&nbsp;</p>
<p data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de"><strong data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">
	<li data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de"><code data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">1 &lt;= prices.length &lt;= 10<sup data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">5</sup></code></li>
	<li data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de"><code data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">0 &lt;= prices[i] &lt;= 10<sup data-immersive-translate-walked="4c8aff02-826b-4604-a3bf-90ed711257de">4</sup></code></li>
</ul>
</div>