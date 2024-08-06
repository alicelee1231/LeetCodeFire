<h2><a href="https://leetcode.com/problems/valid-palindrome/">125. Valid Palindrome</a></h2><h3>Easy</h3><hr><div data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"><p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1">A phrase is a <strong data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>

<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1">Given a string <code data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">s</code>, return <code data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">true</code><em data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"> if it is a <strong data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">palindrome</strong>, or </em><code data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">false</code><em data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"> otherwise</em>.</p>

<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">&nbsp;</p>
<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"><strong class="example" data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "A man, a plan, a canal: Panama"
<strong>Output:</strong> true
<strong>Explanation:</strong> "amanaplanacanalpanama" is a palindrome.
</pre>

<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"><strong class="example" data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "race a car"
<strong>Output:</strong> false
<strong>Explanation:</strong> "raceacar" is not a palindrome.
</pre>

<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"><strong class="example" data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1">Example 3:</strong></p>

<pre><strong>Input:</strong> s = " "
<strong>Output:</strong> true
<strong>Explanation:</strong> s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
</pre>

<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">&nbsp;</p>
<p data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"><strong data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">
	<li data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8"><code data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">1 &lt;= s.length &lt;= 2 * 10<sup data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">5</sup></code></li>
	<li data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="05498d1e-0e38-4b19-85c5-47b7ebabf8c8">s</code> consists only of printable ASCII characters.</li>
</ul>
</div>