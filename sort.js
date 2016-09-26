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

		else if(($("quickSortRadio").prop("checked"))===true)
			{	
				// swap(numbers);
				quickSort(numbers);
				printResults("Numbers After QuickSort " + numbers);
			}
		else
			{
				printResults("You need to select what type of sort you want to do");
			}
		 		
		//Showing the results in the HTML
		function printResults(results)
			{
				var print = "<p>" + results + "</p>"
				$("#resultsDisplay").append(print);
			}

		//BubbleSort Function
		function swap(numbers, firstIndex, secondIndex){
		    var temp = numbers[firstIndex];
		    numbers[firstIndex] = numbers[secondIndex];
		    numbers[secondIndex] = temp;
		}

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
		
		function quickSort(numbers, left, right) {
		  left = left || 0;
		  right = right || len - 1;

		  var pivot = partitionHoare(numbers, left, right);

		   if(left < pivot - 1) {
			    quicksort(numbers, left, pivot - 1);
			  }
			  if(right > pivot) {
			    quicksort(numbers, pivot, right);
			  }
			  return numbers;
		}

		function partitionHoare(numbers, left, right) {
		  var pivot = Math.floor((left + right) / 2 );

		  while(left <= right) {
		    while(numbers[left] < numbers[pivot]) {
		      left++;
		    }
		    while(numbers[right] > numbers[pivot]) {
		      right--;
		    }
		    if(left <= right) {
		      swap(numbers, left, right);
		      left++;
		      right--;
		    }
		  }
		  return left;
		}

		console.log(quickSort(numbers.slice()));

		
	});

});