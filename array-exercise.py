#Code Test: Given an array of ints, return True if the sequence.. 1, 3, 4 .. appears in the array somewhere. Please write your Python code in a secret gist (https://gist.github.com/) and paste the URL below.
def arrayIntContainSequence(arrayInt):
    containsSequence = False
    
    for index in range (0, len(arrayInt)-2):
        if(arrayInt[index] == 1):
            if(arrayInt[index+1] == 3):
                if(arrayInt[index+2] == 4):
                    containsSequence = True
                    break
                
    return containsSequence

arrayInt = [0,1,3,4,2,5,6,7,8,9]
print("arrayInt contains sequence:",str(arrayIntContainSequence(arrayInt)))

arrayInt.reverse()
print("arrayInt reverse contains sequence:",str(arrayIntContainSequence(arrayInt)))  