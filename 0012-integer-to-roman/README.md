<h2><a href="https://leetcode.com/problems/integer-to-roman/">12. Integer to Roman</a></h2><h3>Medium</h3><hr><div data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Seven different symbols represent Roman numerals with the following values:</p>

<table data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
	<thead data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<th data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Symbol</th>
			<th data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Value</th>
		</tr>
	</thead>
	<tbody data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>I</td>
			<td>1</td>
		</tr>
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>V</td>
			<td>5</td>
		</tr>
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>X</td>
			<td>10</td>
		</tr>
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>L</td>
			<td>50</td>
		</tr>
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>C</td>
			<td>100</td>
		</tr>
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>D</td>
			<td>500</td>
		</tr>
		<tr data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
			<td>M</td>
			<td>1000</td>
		</tr>
	</tbody>
</table>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Roman numerals are formed by appending&nbsp;the conversions of&nbsp;decimal place values&nbsp;from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:</p>

<ul data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
	<li data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">If the value does not start with 4 or&nbsp;9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.</li>
	<li data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">If the value starts with 4 or 9 use the&nbsp;<strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">subtractive form</strong>&nbsp;representing&nbsp;one symbol subtracted from the following symbol, for example,&nbsp;4 is 1 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">I</code>) less than 5 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">V</code>): <code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">IV</code>&nbsp;and 9 is 1 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">I</code>) less than 10 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">X</code>): <code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">IX</code>.&nbsp;Only the following subtractive forms are used: 4 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">IV</code>), 9 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">IX</code>),&nbsp;40 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">XL</code>), 90 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">XC</code>), 400 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">CD</code>) and 900 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">CM</code>).</li>
	<li data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Only powers of 10 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">I</code>, <code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">X</code>, <code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">C</code>, <code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">M</code>) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5&nbsp;(<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">V</code>), 50 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">L</code>), or 500 (<code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">D</code>) multiple times. If you need to append a symbol&nbsp;4 times&nbsp;use the <strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">subtractive form</strong>.</li>
</ul>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Given an integer, convert it to a Roman numeral.</p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">&nbsp;</p>
<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong class="example" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Example 1:</strong></p>

<div class="example-block" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">Input:</strong> <span class="example-io" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">num = 3749</span></p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">Output:</strong> <span class="example-io" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">"MMMDCCXLIX"</span></p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Explanation:</strong></p>

<pre>3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
</pre>
</div>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong class="example" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<div class="example-block" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">Input:</strong> <span class="example-io" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">num = 58</span></p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">Output:</strong> <span class="example-io" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">"LVIII"</span></p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Explanation:</strong></p>

<pre>50 = L
 8 = VIII
</pre>
</div>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong class="example" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Example 3:</strong></p>

<div class="example-block" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">Input:</strong> <span class="example-io" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">num = 1994</span></p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">Output:</strong> <span class="example-io" data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">"MCMXCIV"</span></p>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Explanation:</strong></p>

<pre>1000 = M
 900 = CM
  90 = XC
   4 = IV
</pre>
</div>

<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">&nbsp;</p>
<p data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8"><strong data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">
	<li data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="129741af-56b0-445c-86d2-d4f39bb420b8">1 &lt;= num &lt;= 3999</code></li>
</ul>
</div>