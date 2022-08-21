function merge(nums1, m, nums2, n) {
    var nums = nums1.slice(0, m);
    var i = 0, j = 0, current = 0;
    while (i < m && j < n) {
        if (nums[i] < nums2[j]) {
            nums1[current] = nums[i];
            i++;
        }
        else {
            nums1[current] = nums2[j];
            j++;
        }
        // in each iteration
        current++;
    }
    if (i == m) {
        // adds all remaining elements
        while (j < n) {
            nums1[current] = nums2[j];
            j++;
            current++;
        }
    }
    else {
        // adds all remaining elements
        while (i < m) {
            nums1[current] = nums[i];
            i++;
            current++;
        }
    }
    console.log(nums1);
}
;
