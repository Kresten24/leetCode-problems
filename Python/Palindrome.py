def is_palindrome(x):
    """
    :param x: integer
    :return: True if x is a Palindrome
             False if x is not a Palindrome
    """
    rev = list(reversed(str(x)))
    if list(str(x)) == rev:
        return True
    else:
        return False


#print(is_palindrome(121))
# True
#print(is_palindrome(-121))
# False because -121 != 121-
# print(is_palindrome(123))
# False
