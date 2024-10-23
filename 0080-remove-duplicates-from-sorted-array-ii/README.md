<h2><a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/">80. Remove Duplicates from Sorted Array II</a></h2><h3>Medium</h3><hr><div data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"><p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Given an integer array <code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">nums</code> sorted in <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">non-decreasing order</strong>, remove some duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank" data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"><strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">in-place</strong></a> such that each unique element appears <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">at most twice</strong>. The <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">relative order</strong> of the elements should be kept the <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">same</strong>.</p>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">first part</strong> of the array <code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">nums</code>. More formally, if there are <code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">k</code> elements after removing the duplicates, then the first <code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">k</code> elements of <code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">nums</code>&nbsp;should hold the final result. It does not matter what you leave beyond the first&nbsp;<code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">k</code>&nbsp;elements.</p>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Return <code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">k</code><em data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"> after placing the final result in the first </em><code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">k</code><em data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"> slots of </em><code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">nums</code>.</p>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Do <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">not</strong> allocate extra space for another array. You must do this by <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank" data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">in-place</a></strong> with O(1) extra memory.</p>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"><strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Custom Judge:</strong></p>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">The judge will test your solution with the following code:</p>

<pre>int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i &lt; k; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">If all assertions pass, then your solution will be <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">accepted</strong>.</p>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">&nbsp;</p>
<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"><strong class="example" data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [1,1,1,2,2,3]
<strong>Output:</strong> 5, nums = [1,1,2,2,3,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"><strong class="example" data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,0,1,1,1,1,2,3,3]
<strong>Output:</strong> 7, nums = [0,0,1,1,2,3,3,_,_]
<strong>Explanation:</strong> Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">&nbsp;</p>
<p data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6"><strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1">Constraints:</strong></p>

<ul data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">
	<li data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6" data-immersive-translate-paragraph="1"><code data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">nums</code> is sorted in <strong data-immersive-translate-walked="03f80172-67be-4a39-9e5c-96e2314c70f6">non-decreasing</strong> order.</li>
</ul>
</div>