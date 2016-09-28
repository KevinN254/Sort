$(document).ready(function(){

	//on clicking the submit button thats when everything else should follow
	$("#submit").click(function(){

		// get the values from the input field
		var input = $("#userInput").val();
		var numbers = (input.split(','));
		var len = numbers.length;
		//Turning the array from string to numbers
		for (var i = 0; i < len; i++)
		{
			var number = parseInt(numbers[i]);

			if(numbers[i]===NaN)
			{
				printResults("Make sure you have numbers only, and no extra spaces or commas");
			}
			numbers[i] = number;
		
		}
		printResults("Numbers before Sort "+ numbers);
		var input = $("#userInput").val("");

//check which radio button is selected using if statement to call function selected

		if(($("#bubbleSortRadio").prop("checked"))===true)
			{	
				
				bubbleSort(numbers);
				printResults("Numbers After BubbleSort " + numbers);
			 }
		else
			{	
				// swap(numbers);
				quickSort(numbers);
				printResults("Numbers After QuickSort " + numbers);
			}

		//Showing the results in the HTML
		function printResults(results)
			{
				var print = "<p>" + results + "</p>"
				$("#resultsDisplay").append(print);
			}

		//Swap Function
		function swap(numbers, firstIndex, secondIndex){
		    var temp = numbers[firstIndex];//var to save a temporary number
		    numbers[firstIndex] = numbers[secondIndex];
		    numbers[secondIndex] = temp; //switching 
		}
		//BubbleSort Function
		function bubbleSort(numbers)
		{

			for(var k = 0; k<len ; k++)
			{
				for(var j = 0; j< len-k-1; j++)
				{
					if(numbers[j]>numbers[j+1])
					{
						swap(numbers, [j] , [j+1] );
						console.log(numbers[j]);
					}
				}
			}
		    return numbers;
		}
		//QuickSort Function
		function quickSort(numbers, left, right) {
		  left = left || 0;//Index to start comparing with on the left side(first index of the array)
		  right = right || len - 1;// Index to start comparing with on the right side(last index of the array)

		  var pivot = partition(numbers, left, right);//calls the partition function

		   if(left < pivot - 1) {
			    quickSort(numbers, left, pivot - 1);
			  }
			  if(right > pivot) {
			    quickSort(numbers, pivot, right);
			  }
			  return numbers;
		}
		//Partition for quicksort 
		function partition(numbers, left, right) {
		  var pivot = Math.floor((left + right) / 2 );//Setting the pivot

		  while(left <= right) {
		    while(numbers[left] < numbers[pivot]) {
		      left++;//moving to the next index
		    }
		    while(numbers[right] > numbers[pivot]) {
		      right--;//moving to the next index of the array
		    }
		    if(left <= right) {
		      swap(numbers, left, right);//calls the sap function to do the switch
		      left++;// this two increments are for making sure the left and right markers cross each other, in order to start over again
		      right--;
		    }
		  }
		  return left;
		}

		// console.log(quickSort(numbers.slice()));

		//clearing the displayed items
		$( "#clearResults" ).click(function() {
  			$( "#resultsDisplay" ).empty();
  		}); 
		
	});

});