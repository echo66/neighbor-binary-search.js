function neighbors(values, target) {

	if (target < values[0] || values.length==0) { return [undefined, 0]; }

	return modified_binary_search(values, target, 0, values.length - 1);

	function modified_binary_search(values, target, start, end) {
		
		if (start > end) { return [end, undefined]; } 

		var middle = Math.floor((start + end) / 2);
		var middleValue = values[middle];

		if (middleValue < target && values[middle+1] && values[middle+1] > target)
			return [middle, middle+1];
		else if (middleValue > target) 
			return modified_binary_search(values, target, start, middle-1); 
		else if (middleValue < target) 
		 	return modified_binary_search(values, target, middle+1, end); 
		else 
			return [middle-1, middle, middle+1];
	}

};