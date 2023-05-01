Question 1: line 12 prints the value of i, which represents the number of items in the array prices, which is 3 according to the parameter of the function call

Question 2: line 13 prints the value of discountedPrice, which represents the price of the last item in the array prices after applying the discount rate, which is 300/2 = 150

Question 3: line 14 prints the value of finlPrice, which represents the price of the last item in the array prices after applying the discount rate and round the number to the first decimal, but the effect of rounding is not shown in this example since 300/2 = 150 doesn't have any decimal numbers.

Question 4: the function returns the array of prices for the items after applying the discount rate and rounding them to the first decimal. Line 9 pushed the final prices of each item to the array discounted so this array contains the corresponding final prices for all the items.

Question 5: line 12 causes an error since the variable i is locally defined in the loop and it has a block scope, so calling it outside of the loop like line 12 did will cause an error.

Question 6: line 13 causes an error since the variable discountedPrice is locally defined in the loop and it has a block scope, so calling it outside of the loop like line 13 did will cause an error.

Question 7: line 14 still works as Q3 did because the variable finalPrice is declared in the whole function so printing its value inside the function does not cause an error.

Question 8: the function returns the array of prices for the items after applying the discount rate and rounding them to the first decimal as Q4 explained. This is also not out of scope since the scope of this array is the whole function.

Question 9: line 11 causes an error because the scope of i is within the loop and accessing it outside of the loop will cause the error saying that "i is not defined".

Question 10: line 12 prints the length of the array prices, which represents the number of items in the array.

Question 11: the function returns the array of prices for the items after applying the discount rate and rounding them to the first decimal as Q4 explained. Pushing items into the array doesn't violate the rules of not changing the value of const variables since we didn't reassign the variable to other things. 

Question 12: A. student.name; B. student['Grad Year']; C. student.greeting(); D. student['Favorite Teacher'].name; E. student.courseLoad[0]

Question 13: A. '3'+2 = '5'; B. '3'-2 = 1; C. 3+null = 3; D. '3'+null = '3null'; E. true+3 = 4; F. false+null = 0; G. '3'+undefined = '3undefined'; H. '3'-undefined = NaN

Question 14: A. '2'>1 = true; B. '2'<'12' = false; C. 2=='2' = true; D. 2==='2' = false; E. true==2 = false; F. true===Boolean(2) = true

Question 15: the difference between == and === is that == only requires the value of the two compared items to be equal ignoring their types, but === requires both the type and value of two compared items to be equal. For example, 2 == '2' is true but 2 === '2' is false since 2 is an integer but '2' is a string. 

Question 17: The result is that all elements in the original array is multiplied by 2. The original array[1,2,3] and the function doSomething() are passed as parameters of the function modifyArray. In the function, we first create a new empty arrar, then we multiply each element in [1,2,3] by 2 using the function doSomething() and push the multiplied elements to the empty array. Finally we return the new array which contains elements in [1,2,3] that are multiplied by 2. 

Question 19: the order that the number come out is 1 4 3 2