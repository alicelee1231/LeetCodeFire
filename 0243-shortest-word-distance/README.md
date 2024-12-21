<h2><a href="https://leetcode.com/problems/shortest-word-distance/">243. Shortest Word Distance</a></h2><h3>Easy</h3><hr><div data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4"><p data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1">Given an array of strings <code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">wordsDict</code> and two different strings that already exist in the array <code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">word1</code> and <code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">word2</code>, return <em data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">the shortest distance between these two words in the list</em>.</p>

<p data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">&nbsp;</p>
<p data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4"><strong class="example" data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1">Example 1:</strong></p>

<pre><strong>Input:</strong> wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
<strong>Output:</strong> 3
</pre>

<p data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4"><strong class="example" data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<pre><strong>Input:</strong> wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
<strong>Output:</strong> 1
</pre>

<p data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">&nbsp;</p>
<p data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4"><strong data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">
	<li data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">2 &lt;= wordsDict.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">1 &lt;= wordsDict[i].length &lt;= 10</code></li>
	<li data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">wordsDict[i]</code> consists of lowercase English letters.</li>
	<li data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">word1</code> and <code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">word2</code> are in <code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">wordsDict</code>.</li>
	<li data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="15bb80c1-1fa2-4107-9a45-4e4d0608f2e4">word1 != word2</code></li>
</ul>
</div>